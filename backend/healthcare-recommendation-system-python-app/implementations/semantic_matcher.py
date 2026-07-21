from implementations.data_loader import load_patient_data
from implementations.similarity_calculator import calculate_similarity

def find_similar_patients(profile):

    df = load_patient_data()

    corpus = df["medical_history"].astype(str).tolist()

    similarity_scores = calculate_similarity(
        profile["profile_text"],
        corpus
    )

    df["score"] = similarity_scores

    top_matches = df.sort_values(
        by="score",
        ascending=False
    ).head(5)

    return top_matches.to_dict(orient="records")