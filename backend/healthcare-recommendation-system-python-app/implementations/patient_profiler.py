from implementations.preprocess import clean_text

def build_patient_profile(payload):

    history = payload.get("medical_history", "")
    symptoms = payload.get("symptoms", "")

    #combined = history + " " + symptoms
    combined = str(history) + " " + " ".join(symptoms)

    cleaned = clean_text(combined)

    profile = {
        "age": payload.get("age"),
        "gender": payload.get("gender"),
        "profile_text": cleaned
    }

    return profile