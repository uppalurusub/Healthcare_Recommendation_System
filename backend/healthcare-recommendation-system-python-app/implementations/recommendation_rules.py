def get_lifestyle_recommendations(condition):

    recommendations = {
        "diabetes": [
            "Reduce sugar intake",
            "Daily walking",
            "Low carb diet"
        ],
        "hypertension": [
            "Reduce salt intake",
            "Meditation",
            "Cardio exercise"
        ]
    }

    return recommendations.get(condition.lower(), [])