# 🏥 Healthcare Recommendation System

An AI-powered **Healthcare Recommendation System** that analyzes patient information and generates personalized healthcare recommendations including treatment suggestions, diet plans, lifestyle improvements, and similar patient insights.

The application consists of:

- **Backend:** FastAPI (Python)
- **Frontend:** React + TypeScript + Vite + Material UI
- **Machine Learning/NLP:** Sentence Transformers, spaCy, Transformers, PyTorch
- **Datasets:** Patient Records, Treatment Plans, Diet Suggestions, Lifestyle Plans

---

# 📌 Features

- Personalized Healthcare Recommendations
- Patient Profile Analysis
- Semantic Similarity Matching
- Rule-Based Recommendation Engine
- Diet Recommendations
- Lifestyle Recommendations
- Treatment Plan Suggestions
- Fast REST API
- Modern React Dashboard
- Material UI Interface
- Error Handling
- Loading Indicators
- Modular Architecture

---

# 🏗 Project Architecture

```
Healthcare_Recommendation_System/
│
├── backend/
│   ├── data/
│   │
│   ├── healthcare-recommendation-system-python-app/
│   │      ├── implementations/
│   │      ├── routers/
│   │      ├── services/
│   │      ├── utils/
│   │      └── main.py
│   │
│   └── README.md
│
├── ui/
│   └── reactjs/
│        └── healthcare-recommendation-system-react-app/
│
├── requirements.txt
│
└── README.md
```

---

# ⚙ Technology Stack

## Backend

- Python 3.11+
- FastAPI
- Uvicorn
- Pandas
- spaCy
- Transformers
- Sentence Transformers
- PyTorch
- MLflow
- Loguru
- NLTK

---

## Frontend

- React 19
- TypeScript
- Vite
- Material UI
- Axios
- React Hook Form

---

# 📂 Backend Structure

```
backend/
│
├── data/
│     patient_records.csv
│     treatment_plans.csv
│     diet_suggestions.csv
│     lifestyle_plans.csv
│
├── implementations/
│     data_loader.py
│     patient_profiler.py
│     preprocess.py
│     recommendation_engine.py
│     recommendation_rules.py
│     semantic_matcher.py
│     similarity_calculator.py
│
├── routers/
│     recommendation_router.py
│
├── services/
│     recommendation_service.py
│
├── utils/
│     logger.py
│
└── main.py
```

---

# 📂 Frontend Structure

```
src/

├── api/
├── assets/
├── components/
├── pages/
├── types/
├── App.tsx
└── main.tsx
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone <repository-url>

cd Healthcare_Recommendation_System
```

---

# 🐍 Backend Setup

## Create Virtual Environment

Windows

```bash
python -m venv venv

venv\Scripts\activate
```

Linux / macOS

```bash
python3 -m venv venv

source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Run Backend

Navigate to

```bash
cd backend/healthcare-recommendation-system-python-app
```

Run

```bash
uvicorn main:app --reload
```

Backend starts at

```
http://localhost:8000
```

Swagger Documentation

```
http://localhost:8000/docs
```

ReDoc

```
http://localhost:8000/redoc
```

---

# ⚛ Frontend Setup

Navigate to

```bash
cd ui/reactjs/healthcare-recommendation-system-react-app
```

Install packages

```bash
npm install
```

Run

```bash
npm run dev
```

Frontend

```
http://localhost:5173
```

---

# 🔌 API Endpoint

## Generate Recommendations

### POST

```
POST /recommendation/
```

---

## Sample Request

```json
{
  "age": 52,
  "gender": "Male",
  "diagnosis": "Hypertension",
  "symptoms": [
    "Headache",
    "Fatigue"
  ]
}
```

---

## Sample Response

```json
{
  "patient_profile": {
    "...": "..."
  },
  "treatment_recommendations": [],
  "diet_recommendations": [],
  "lifestyle_recommendations": [],
  "similar_patients": []
}
```

---

# 🧠 Recommendation Pipeline

```
Patient Input
      │
      ▼
Data Preprocessing
      │
      ▼
Patient Profiling
      │
      ▼
Semantic Matching
      │
      ▼
Similarity Calculation
      │
      ▼
Rule Engine
      │
      ▼
Recommendation Generation
      │
      ▼
API Response
```

---

# 📊 Datasets

The project includes the following datasets:

- Patient Records
- Treatment Plans
- Diet Suggestions
- Lifestyle Plans

These datasets are used to generate personalized recommendations.

---

# 📦 Python Dependencies

- FastAPI
- Uvicorn
- Pandas
- Transformers
- PyTorch
- Sentence Transformers
- spaCy
- Streamlit
- MLflow
- NLTK
- Loguru

---

# 📦 React Dependencies

- React
- TypeScript
- Material UI
- Axios
- React Hook Form
- Vite

---

# 🔄 Application Workflow

```
React UI
     │
     ▼
Axios API Call
     │
     ▼
FastAPI Router
     │
     ▼
Recommendation Service
     │
     ▼
Recommendation Engine
     │
     ▼
Semantic Matching
     │
     ▼
Recommendation Rules
     │
     ▼
Response
     │
     ▼
React Dashboard
```

---

# 📈 Future Enhancements

- Explainable AI (XAI)
- LLM-based Clinical Recommendations
- Electronic Health Record (EHR) Integration
- Drug Interaction Detection
- Clinical Risk Prediction
- Personalized Preventive Care
- Voice-based Clinical Assistant
- Multi-language Support
- Authentication & Authorization
- Docker Deployment
- Kubernetes Deployment
- CI/CD Pipeline
- Cloud Deployment (Azure/AWS/GCP)

---

# 🔒 Security

- Input Validation
- CORS Configuration
- REST API Architecture
- Modular Service Layer
- Error Handling
- Secure Data Processing

---

# 🧪 Testing

Backend

```bash
pytest
```

Frontend

```bash
npm test
```

---

# 🚀 Deployment

Backend

```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

Frontend

```bash
npm run build
```

---

# 👨‍💻 Author

Healthcare Recommendation System

Developed using

- FastAPI
- React
- TypeScript
- Material UI
- NLP
- Sentence Transformers
- Machine Learning
- Python

---

# 📄 License

This project is intended for educational, research, and healthcare analytics purposes.