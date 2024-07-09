from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
import requests
import uvicorn
import logging

logging.basicConfig(level=logging.DEBUG)
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Passenger(BaseModel):
    pclass: int
    sex: int
    age: float
    fare: float
    traveled_alone: int
    embarked: int

@app.post("/surv_or_not/{model_name}")
async def surv_or_not(model_name: str, passenger: Passenger):
    passenger_dict = passenger.model_dump()  # Use model_dump instead of dict
    logging.debug(f"Request payload: {passenger_dict}")
    try:
        response = requests.post(f"http://backend_modal_service_container:8000/surv/{model_name}", json=passenger_dict)
        response.raise_for_status()
        logging.debug(f"Model backend response: {response.json()}")
        return response.json()
    except requests.RequestException as e:
        logging.error(f"Error connecting to model backend: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Model backend connection failed: {str(e)}")

@app.get("/api")
def read_root():
    return {"message": "Hello World"}

app.mount("/", StaticFiles(directory="dist", html=True), name="static")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8080)
