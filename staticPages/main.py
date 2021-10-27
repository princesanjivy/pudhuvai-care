import requests
import json
import io
import csv

dynamic = {}


# lastUpdatedOn
statusRes = requests.get("https://pycare-api.herokuapp.com/status")
statusData = json.loads(statusRes.content)

dynamic["lastUpdatedOn"] = statusData[0]["lastUpdatedOn"]

with open("dynamic.json", "w") as f:
    f.write(json.dumps(dynamic))

# covidTracker
dynamic = {}

covidTrackerRes = requests.get(
    "https://pycare-api.herokuapp.com/districtWiseReport")
covidTrackerData = json.loads(covidTrackerRes.content)

dynamic["covidTracker"] = covidTrackerData

# covidData 
url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRJswyu1sF0hRdRIi8qFTXbUKqGQbV76bs6jNKUAX50ZdYmna0K-gf-TfZngyOVmHR6FcbQ7lwr_FIQ/pub?output=csv"

resp = requests.get(url)
data = csv.reader(io.StringIO(resp.text))

data = list(data)
latestData = data[4]

date = latestData[0]
values = latestData[1:25]

keys = ["todayNewCases", "hospitalised", "homeIsolation", "totalRecovered", "totalDeath"]
subKeys = ["pondicherry", "karaikal", "yanam", "mahe"]
values = [dict(zip(subKeys, values[i*4:(i+1)*4])) for i in range(1,len(values)//4)]

covidData = dict(zip(keys, values))
covidData["lastUpdatedData"] = date

dynamic["covidData"]  = covidData

with open("covidTracker.json", "w") as f:
    f.write(json.dumps(dynamic))

# testingCenter
dynamic = {}

testingCenterRes = requests.get(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vReED3ftV6BZO96JnXcC9puD5jYQqDzHKRWd8C_Eab0Z-edLU0z60JRWi3j7MJuTYDROnkgWlcujVSk/pub?output=csv")
testingCenterData = csv.reader(io.StringIO(testingCenterRes.text))

m = list(testingCenterData)[8:]

testingCenterData = []

for data in m:
    testingCenterData.append({"district": data[0].strip(),
                              "location": data[2].strip(),
                              "time": data[5].strip(),
                              "pincode": data[6].strip(),
                              "map": data[7].strip()})

dynamic["testingCenter"] = testingCenterData

with open("testingCenter.json", "w") as f:
    f.write(json.dumps(dynamic))

# bedAvailability
dynamic = {}

bedAvailabilityRes = requests.get(
    "http://pycare-api.herokuapp.com/hospitalDetails")
bedAvailabilityData = json.loads(bedAvailabilityRes.content)

dynamic["bedAvailability"] = bedAvailabilityData

with open("bedAvailability.json", "w") as f:
    f.write(json.dumps(dynamic))