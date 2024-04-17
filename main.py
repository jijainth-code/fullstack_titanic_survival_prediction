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
    string_input: str
    integer_input: int


@app.post("/submit-form")
async def submit_form(data: FormData):
    print("String Input:", data.string_input)
    print("Integer Input:", data.integer_input)
    return {"message": "Form submitted successfully"}

@app.get("/")
def read_root():
    return {"message": "Bitch!"}


