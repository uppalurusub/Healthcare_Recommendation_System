# 🏥 Healthcare Recommendation System

An AI-powered Healthcare Recommendation System built using **FastAPI**, **Streamlit**, **Sentence Transformers**, **NLP**, **Semantic Similarity**, and **MLflow**.

The application analyzes patient information, identifies similar patient cases using semantic similarity, and generates personalized healthcare recommendations including treatment plans, diet suggestions, lifestyle modifications, and follow-up recommendations.

---

# Project Overview

The Healthcare Recommendation System helps healthcare professionals by generating evidence-based recommendations from patient information.

The system performs the following workflow:

Patient Information
        │
        ▼
Patient Profile Generation
        │
        ▼
NLP Preprocessing
        │
        ▼
Semantic Similarity Search
        │
        ▼
Similar Patient Identification
        │
        ▼
Recommendation Engine
        │
        ▼
Treatment + Diet + Lifestyle + Follow-up

---

# Features

- FastAPI REST API
- Streamlit User Interface
- Patient Profile Builder
- NLP Text Preprocessing
- Semantic Similarity Matching
- Recommendation Engine
- Rule-Based Lifestyle Recommendation
- MLflow Experiment Tracking
- Modular Architecture
- CSV Knowledge Base
- Easy Integration with Other Systems

---

# Technology Stack

| Category | Technology |
|-----------|------------|
| Language | Python 3.x |
| API | FastAPI |
| Frontend | Streamlit |
| NLP | spaCy |
| Embeddings | Sentence Transformers |
| Deep Learning | PyTorch |
| ML Tracking | MLflow |
| Data Processing | Pandas |
| Logging | Loguru |
| Deployment | Uvicorn |



# Architecture

```
                    +----------------+
                    | Streamlit UI   |
                    +--------+-------+
                             |
                             |
                             ▼
                    +----------------+
                    | FastAPI API    |
                    +--------+-------+
                             |
                             ▼
              +----------------------------+
              | Recommendation Service     |
              +-------------+--------------+
                            |
        ----------------------------------------------
        |            |              |                 |
        ▼            ▼              ▼                 ▼
Patient Profile  NLP Process  Semantic Search  MLflow Logging
        |            |              |
        --------------              |
               |                    |
               ▼                    ▼
         Similar Patients ------ Recommendation Engine
                         |
                         ▼
         Treatment Recommendations
         Diet Plan
         Lifestyle Changes
         Follow-up Plan
```

---

# Recommendation Workflow

1. Receive patient information
2. Create patient profile
3. Preprocess patient data
4. Convert patient information into embeddings
5. Find semantically similar patients
6. Generate treatment recommendations
7. Recommend diet plans
8. Recommend lifestyle modifications
9. Return personalized recommendations
10. Log inference in MLflow

---

# API Endpoint

## Generate Recommendations

**POST**

```
/recommendation/
```

---

## Sample Request

```json
{
    "patient_id": "P1001",
    "age": 55,
    "gender": "Male",
    "history": "Hypertension",
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
  "recommendations": [
    {
      "disease": "Hypertension",
      "recommended_treatment": "...",
      "diet_plan": "...",
      "lifestyle_changes": "...",
      "follow_up": "..."
    }
  ]
}
```

---

# Streamlit Dashboard

The project includes a Streamlit application for easy interaction.

Features include:

- JSON Input
- Form Input
- Recommendation Cards
- Patient Information
- Treatment Recommendations
- Diet Plans
- Lifestyle Suggestions
- Follow-up Recommendations

---

# MLflow Integration

Every API request is logged into MLflow.

Tracked information includes:

- Input Payload
- Generated Recommendations
- API Endpoint
- Source
- Timestamp

Experiment Name:

```
Healthcare_Recommendation_System_Inference
```

---

# Datasets

The project uses multiple datasets.

| Dataset | Purpose |
|-----------|----------|
| patient_records.csv | Historical patient data |
| treatment_plans.csv | Disease treatment mapping |
| diet_suggestions.csv | Diet recommendations |
| lifestyle_plans.csv | Lifestyle recommendations |

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Create Virtual Environment

```bash
python -m venv venv
```

Activate environment

Windows

```bash
venv\Scripts\activate
```

Linux / Mac

```bash
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

# Run MLflow

```bash
mlflow ui
```

or

```bash
mlflow server \
--backend-store-uri sqlite:///mlflow.db \
--default-artifact-root ./mlruns \
--host 0.0.0.0 \
--port 5000
```

---

# Run FastAPI

```bash
uvicorn app.main:app --reload
```

FastAPI:

```
http://localhost:8000
```

Swagger:

```
http://localhost:8000/docs
```

---

# Run Streamlit

```bash
streamlit run ui/app.py
```

---

# Key Components

## Patient Profiler

Creates structured patient profiles.

---

## NLP Preprocessor

Performs text cleaning and preprocessing.

---

## Semantic Matcher

Finds similar historical patient records using sentence embeddings.

---

## Recommendation Engine

Generates personalized healthcare recommendations.

---

## Recommendation Rules

Provides disease-specific lifestyle suggestions.

---

## Similarity Calculator

Computes similarity scores between patients.

---

# Future Enhancements

- Integration with Electronic Health Records (EHR)
- LLM-powered clinical recommendations
- Retrieval-Augmented Generation (RAG)
- Drug interaction analysis
- Explainable AI recommendations
- Risk prediction models
- Disease progression forecasting
- Multi-language support
- FHIR interoperability
- Docker deployment
- Kubernetes deployment
- Azure deployment
- Authentication and Role-Based Access Control (RBAC)

---

# Requirements

- Python 3.10+
- FastAPI
- Streamlit
- PyTorch
- Transformers
- Sentence Transformers
- spaCy
- MLflow
- Pandas
- Loguru

---

# License

This project is intended for educational and research purposes.

---

# Author

Healthcare Recommendation System

Built using:

- FastAPI
- Streamlit
- NLP
- Sentence Transformers
- Semantic Search
- MLflow
- Python