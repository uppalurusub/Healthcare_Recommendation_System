import pandas as pd

def load_patient_data():

    df = pd.read_csv("../data/patient_records.csv")

    return df