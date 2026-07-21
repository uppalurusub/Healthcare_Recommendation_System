
import streamlit as st, json
from utils.formatters import sample_payload, pretty
def render():
    tab1,tab2=st.tabs(["JSON Input","Form Input"])
    payload=None
    with tab1:
        txt=st.text_area("Request Payload (JSON)",value=pretty(sample_payload()),height=350)
    with tab2:
        pid=st.text_input("Patient ID","P1001")
        age=st.number_input("Age",0,120,55)
        gender=st.selectbox("Gender",["Male","Female","Other"])
        hist=st.text_input("History","Hypertension")
        sym=st.text_area("Symptoms","Headache,Fatigue")
    if st.button("Generate Recommendations",type="primary"):
        try: payload=json.loads(txt)
        except:
            payload={"patient_id":pid,"age":age,"gender":gender,"history":hist,"symptoms":[x.strip() for x in sym.split(",") if x.strip()]}
    return payload
