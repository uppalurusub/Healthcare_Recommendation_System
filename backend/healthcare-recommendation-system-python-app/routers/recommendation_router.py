from fastapi import APIRouter
from services.recommendation_service import generate_recommendations

router = APIRouter(
    prefix="/recommendation",
    tags=["Healthcare Recommendation"]
)

@router.post("/")
def get_recommendations(payload: dict):
    return generate_recommendations(payload)