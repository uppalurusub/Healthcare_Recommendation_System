
import requests
API_URL="http://localhost:8000/recommendation/"
def generate(payload):
    return requests.post(API_URL,json=payload,timeout=120)
