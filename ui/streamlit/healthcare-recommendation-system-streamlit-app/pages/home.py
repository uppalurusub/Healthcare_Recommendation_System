
import streamlit as st
from components.sidebar import render_sidebar
from components.request_form import render
from components.response_view import render as show
from api.client import generate
st.set_page_config(page_title="Healthcare Recommendation System",layout="wide")
st.title("🏥 Healthcare Recommendation System")
render_sidebar()
payload=render()
if payload:
    with st.spinner("Generating recommendations..."):
        r=generate(payload)
    if r.status_code==200: show(r.json())
    else: st.error(r.text)
