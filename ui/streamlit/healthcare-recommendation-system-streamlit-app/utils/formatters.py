
import json
def sample_payload():
    return {
      "patient_id":"P1001","age":55,"gender":"Male",
      "history":"Hypertension","symptoms":["Headache","Fatigue"]
    }
def pretty(obj): return json.dumps(obj,indent=4)
