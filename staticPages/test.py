import pandas as pd
import requests
import csv
import io

dynamic = {}

url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRJswyu1sF0hRdRIi8qFTXbUKqGQbV76bs6jNKUAX50ZdYmna0K-gf-TfZngyOVmHR6FcbQ7lwr_FIQ/pub?output="

resp = requests.get(url+"csv")
data = csv.reader(io.StringIO(resp.text))

data = list(data)
latestData = data[4]

date = latestData[0]
values = latestData[1:25]

keys = ["todayNewCases", "hospitalised",
        "homeIsolation", "totalRecovered", "totalDeath"]
subKeys = ["pondicherry", "karaikal", "yanam", "mahe"]
values = [dict(zip(subKeys, values[i*4:(i+1)*4]))
          for i in range(1, len(values)//4)]

covidData = dict(zip(keys, values))
covidData["lastUpdatedData"] = date


df = pd.read_excel(url+"xlsx", engine='openpyxl', sheet_name=1)
df = df.fillna(0)
df = df.iloc[3].tolist()

covidData["testStatistics"] = {"todayTests": latestData[1],
                               "cumTest": latestData[33], "cumNegative": latestData[35]}

covidData["vitalStatistics"] = {"testPositivity": latestData[56][:4],
                                "caseFatalityRate": latestData[57][:4], "recoveryRate": latestData[58][:4]}

covidData["occupancy"] = {"jipmer": latestData[2],
                          "ghcd": latestData[3], "ccc": latestData[4]}

covidData["covidVaccine"] = {"firstDose": [df[12], df[15]], "secondDose": [
    df[13], df[16]], "total": [df[14], df[17]]}

covidData["covidTillDate"] = {"detected": latestData[36],
                              "recovered": latestData[46], "death": latestData[51]}

dynamic["covidData"]  = covidData

print(dynamic)