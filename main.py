from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FormData(BaseModel):
    dropdown1: str
    dropdown2: str
    dropdown3: str
    slider1: int
    slider2: int


@app.post("/submit-form")
async def submit_form(data: FormData):
    print(data)
    
    return {"message": "Form submitted successfully"}

@app.get("/")
def read_root():
    return {"message": "Hello World!"}
