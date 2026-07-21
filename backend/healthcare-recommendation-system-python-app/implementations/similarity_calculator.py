from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def calculate_similarity(input_text, corpus):

    vectorizer = TfidfVectorizer()

    vectors = vectorizer.fit_transform([input_text] + corpus)

    similarity = cosine_similarity(vectors[0:1], vectors[1:])

    return similarity[0]