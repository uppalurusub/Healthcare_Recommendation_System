from implementations.patient_profiler import build_patient_profile
from implementations.semantic_matcher import find_similar_patients
from implementations.recommendation_engine import generate_plan
import mlflow
from datetime import datetime

def generate_recommendations(payload):

    mlflow.set_tracking_uri(
        "http://localhost:5000"
    )

    mlflow.set_experiment(
        "Healthcare_Recommendation_System_Inference"
    )

    with mlflow.start_run(
        run_name=
        f"Healthcare_Recommendation_System_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
    ):

        profile = build_patient_profile(payload)

        similar_patients = find_similar_patients(profile)

        recommendations = generate_plan(profile, similar_patients)

        mlflow.log_param(
            "input_text",
            payload
        )

        mlflow.log_param(
            "recommendations",
            recommendations
        )

        

        mlflow.set_tag(
            "source",
            "FastAPI"
        )

        mlflow.set_tag(
            "endpoint",
            "/recommendation"
        )


        return {
            "patient_profile": profile,
            "recommendations": recommendations
        }