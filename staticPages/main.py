import requests
import json
import io
import csv

dynamic = {}

# lastUpdatedOn
statusRes = requests.get("https://pycare-api.herokuapp.com/status")
statusData = json.loads(statusRes.content)

dynamic["lastUpdatedOn"] = statusData[0]["lastUpdatedOn"]

# covidTracker
covidTrackerRes = requests.get(
    "https://pycare-api.herokuapp.com/districtWiseReport")
covidTrackerData = json.loads(covidTrackerRes.content)

dynamic["covidTracker"] = covidTrackerData

# testingCenter
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

# bedAvailability
bedAvailabilityRes = requests.get(
    "http://pycare-api.herokuapp.com/hospitalDetails")
bedAvailabilityData = json.loads(bedAvailabilityRes.content)

dynamic["bedAvailability"] = bedAvailabilityData

with open("dynamic.json", "w") as f:
    f.write(json.dumps(dynamic))
