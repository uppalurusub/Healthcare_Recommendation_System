from implementations.recommendation_rules import (
    get_lifestyle_recommendations
)

def generate_plan(profile, similar_patients):

    recommendations = []

    for patient in similar_patients:

        condition = patient.get("disease", "")

        lifestyle = get_lifestyle_recommendations(condition)

        recommendations.append({
            "disease": condition,
            "recommended_treatment": patient.get("treatment"),
            "diet_plan": patient.get("diet_plan"),
            "lifestyle_changes": lifestyle,
            "follow_up": patient.get("follow_up")
        })

    return recommendations