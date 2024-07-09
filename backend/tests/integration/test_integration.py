import requests

MAIN_BACKEND_URL = "http://localhost:8080"  # Assuming backend service name is 'backend'
MODEL_BACKEND_URL = "http://backend_modal_service_container:8000"  # Correct service name and port

def test_main_backend_to_model_backend():
    passenger_data = {
        "pclass": 1,
        "sex": 0,
        "age": 30,
        "fare": 100,
        "traveled_alone": 1,
        "embarked": 2
    }
    model_name = "random_forest"

    response = requests.post(f"{MAIN_BACKEND_URL}/surv_or_not/{model_name}", json=passenger_data)
    assert response.status_code == 200, f"Failed with status code {response.status_code}, response: {response.text}"
    response_json = response.json()
    assert "survived" in response_json, f"Response JSON does not contain 'survived': {response_json}"

    model_response = requests.post(f"{MODEL_BACKEND_URL}/surv/{model_name}", json=passenger_data)
    assert model_response.status_code == 200, f"Failed with status code {model_response.status_code}, response: {model_response.text}"
    model_response_json = model_response.json()
    assert "survived" in model_response_json, f"Response JSON does not contain 'survived': {model_response_json}"
