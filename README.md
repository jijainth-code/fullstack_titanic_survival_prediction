# Titanic Survival Calculator

## Project Overview

This project is part of the Summerterm 2024 AIN-B Software Engineering course led by Prof. Dr. Christoph Schober. The project consists of two main tasks:

1. **Titanic Survivor App**: A web application to predict the survival of passengers in the Titanic accident.
2. **Presentation**: A demonstration of the developed software, insights on the system architecture, and individual contributions.

## Team Information

- **Team Members**: 
  - Aadi Alhuwalia : 22202107
  - Aryan Jain : 22107593
  - Avanish Kumar Singh : 22200727
  - Bhanu Pratap Rana : 22201990
  - Harsh Gurawaliya : 22109730
  - Jijainth Dhinakaran : 22100952
  - Nemish Kyada : 22212034
  - Rohit Galani : 22209032

## Project Structure
```
titanic_web_service-main/
├── __pycache__/
│   ├── backend.cpython-310.pyc
│   ├── main.cpython-310.pyc
│   └── main.cpython-311.pyc
├── backend/
│   ├── __pycache__/
│   │   ├── main.cpython-311.pyc
│   │   ├── main.cpython-312 2.pyc
│   │   ├── main.cpython-312.pyc
│   │   ├── main.cpython-39.pyc
│   │   ├── predict.cpython-312 2.pyc
│   │   └── predict.cpython-312.pyc
│   ├── dist/
│   │   ├── css/
│   │   │   ├── app.5fed518f.css
│   │   │   └── app.a2f58a13.css
│   │   ├── img/
│   │   │   ├── aadi.02a7f0ab.png
│   │   │   ├── aryan.453d5392.png
│   │   │   ├── avanish.f96d5188.png
│   │   │   ├── bhanu.b242fc23.png
│   │   │   ├── dataset.a5484bc2.png
│   │   │   ├── gitlab-logo.db385ac.png
│   │   │   ├── header.f3f1b282.png
│   │   │   ├── nemish.5987e7f8.png
│   │   │   ├── pp.f7e8cfa8.webp
│   │   │   ├── rohit.165c520d.png
│   │   │   └── ship.b0486ab9.png
│   │   ├── js/
│   │   │   ├── app.5fed518f.js
│   │   │   └── app.a2f58a13.js
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── tests/
│   │   ├── __pycache__/
│   │   │   ├── test_01.cpython-310.pyc
│   │   │   ├── test_01.cpython-39.pyc
│   │   │   └── test_02.cpython-310.pyc
│   │   ├── test_01.py
│   │   └── test_02.py
│   ├── .DS_Store
│   ├── dockerfile
│   ├── main.py
│   ├── package-lock.json
│   └── requirements.txt
├── vue-frontend/
│   ├── cypress/
│   │   ├── e2e/
│   │   │   ├── titanic/
│   │   │   │   └── survival_calculator.spec.cy.js
│   │   ├── fixtures/
│   │   │   ├── titanic_survival_prediction.json
│   │   │   ├── titanic_survival_result.json
│   │   ├── screenshots/
│   │   │   ├── cypress/
│   │   │   │   ├── e2e/
│   │   │   │   │   ├── titanic/
│   │   │   │   │   │   ├── survival_calculator.spec.cy.js/
│   │   │   │   │   │   │   ├── Home Page.png
│   │   │   │   │   │   │   └── Survival Calculator.png
│   │   ├── support/
│   │   │   ├── commands.js
│   │   │   └── e2e.js
│   ├── public/
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   ├── aadi.png
│   │   │   ├── aryan.png
│   │   │   ├── avanish.png
│   │   │   ├── bhanu.png
│   │   │   ├── dataset.png
│   │   │   ├── dataset.webp
│   │   │   ├── gitlab-logo.png
│   │   │   ├── header.png
│   │   │   ├── nemish.png
│   │   │   ├── pp.webp
│   │   │   ├── rohit.png
│   │   │   └── ship.png
│   │   ├── components/
│   │   │   ├── HelloWorld.vue
│   │   │   ├── PredictPage.vue
│   │   │   └── landing_page.vue
│   │   ├── App.vue
│   │   └── main.js
├── .DS_Store
├── .gitlab-ci.yml
├── LICENSE
├── README.md
└── docker-compose.yml
```
## Requirements and Setup

### Prerequisites

- **Docker**: Ensure Docker is installed and running on your machine. [Docker Installation Guide](https://docs.docker.com/get-docker/)
- **Docker Compose**: Ensure Docker Compose is installed. [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

### Cloning Repositories

The project is divided into two repositories within the team's Gitlab group:

1. **Web Application Service Repository**: [Link to the repository]
2. **Prediction Model Service Repository**: [Link to the repository]

Clone both repositories to your local machine.

```sh
git clone <web_application_service_repo>
git clone <prediction_model_service_repo>
```

### Building and Running the Application

Navigate to the directory containing the Docker Compose file and run the following command to build and start the services:

```sh
docker-compose up --build
```

This command will:
- Build Docker images for both the web application service and the prediction model service.
- Start the services and make the web interface accessible at \`https://localhost:8080\`.

### Accessing the Web Application

Once the services are up and running, open your web browser and navigate to:

```
https://localhost:8080
```

## Application Structure

### Web Application

The web application consists of two main pages:

1. **Landing Page**: Provides a short explanation of the app's functionality and a link to the Survival Calculator.
2. **Survival Calculator**: Allows users to input passenger details and view survival predictions based on selected models.

#### Passenger Details Input

- **PClass**: First, Second, Third
- **Sex**: Male, Female
- **Age**: 0-100
- **Fare**: 0-500 $
- **Traveled Alone**: Yes, No
- **Embarked**: Cherbourg, Queenstown, Southampton

Users can view explanations for each input property and select prediction models from Random Forest, Decision Tree, KNN, Support Vector Machines, or Logistic Regression.

### Prediction Model Service

The prediction model service:
- Is written in Python using FastAPI.
- Uses models implemented as per the proof-of-concept notebook.
- Stores trained models as Pickle files.
- Exposes a RESTful API for prediction model inference.

## Testing and CI/CD

### Testing

- **Unit and Integration Tests**: Written using the pytest framework with a coverage requirement above 75%.
- **End2End Tests**: Written using Cypress or Playwright and automatically run in a nightly pipeline.

### Continuous Integration

- **Gitlab CI**: Docker images are built and pushed to the registry with each commit.
- **Pipeline Execution**: Unit and integration tests run on every commit, while End2End tests run nightly.

## Project Management

The project follows the Scrum framework with 3 sprints, each lasting 3 weeks. All non-code resources are managed in Jira.

### Submissions

- **Source Code and Documentation**: Includes all source code, configuration files, and documentation.
- **Git Repositories**: Both Git repositories as downloaded from Gitlab.
- **README File**: Instructions for building, running, and accessing the web application.
- **Team Presentation**: A PDF of the team presentation.
- **JIRA Sprint Planning**: A PDF export of the JIRA sprint planning at the beginning of each sprint (total of 3 PDFs).

### Final Submission

Submit the solution in a ZIP archive via iLearn.

## Contact Information

For any queries, contact Prof. Dr. Christoph Schober at christoph.schober@th-deg.de.

## Additional Notes

- Ensure to attend project meetings and the final presentation in Deggendorf.
- Follow the functional and non-functional requirements outlined in the project document.
- Check iLearn for any updates or corrections to the project requirements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
