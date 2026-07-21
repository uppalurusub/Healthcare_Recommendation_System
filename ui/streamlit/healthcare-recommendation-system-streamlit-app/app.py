from components.response_view import display_response
import requests
from components.request_form import render

api_url = "http://localhost:8000/recommendation/"
payload = render()
response = requests.post(
                api_url,
                json=payload,
                timeout=120
            )

result = response.json()

display_response(result)
