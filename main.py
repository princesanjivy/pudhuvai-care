# import io
# import json
# from os import terminal_size
# import requests
# import csv
# from urllib import request


# def categorizeHospitals(hospitalDetails):
#     trTag = '''<tr  class="content-ash"  >
#                         <td id="hospital-name-ash" class="hospital-name" >{}</td>
#                         <td  id="isolation-ash">{}</td>
#                         <td id="oxygen-ash">{}</td>
#                         <td id="ventilator-ash">{}</td>
#             </tr>'''
#     tr = ''
#     bedAvailability_Tags = []
#     for i in hospitalDetails:
#         tr += trTag.format(i['hospitalName'], i['isolationBeds']
#                            ['vacant'], i['oxygenBeds']['vacant'], i['ventilatorBeds']['vacant'])

#     bedAvailability_Tags.append(tr)
#     return bedAvailability_Tags


# def processHospitalData(hospitalDetails):
#     return hospitalDetails


# def processTrackerDetails(trackerDetails):
#     overallCases = ''' <tr style="background-color: white;">
#                     <td>    <div class="color-box-ash total-cases-ash"></div> <span id="total_cases1-ash">{}</span></td>
#                     <td>
#                         <div class="color-box-ash total-cured-ash"></div><span id="total_cured1-ash">{}</span></td>
#                         <td><div class="color-box-ash active-cases-ash"></div><span id="active_cases1-ash">{}</span></td>
#                         <td><div class="color-box-ash death-ash"></div><span id="total_death1-ash">{}</span></td>


#                 </tr>'''
#     tracker_Trtag = '''
#                 <tr>
#                     <td id="district" >{}</td>
#                     <td id="reported">{}</td>
#                     <td id="cured">{}</td>
#                     <td id="active">{}</td>
#                     <td id="death">{}</td>
#                 </tr>'''
#     tracker_tag = ''
#     totalCases = 0
#     totalCured = 0
#     totalActiveCases = 0
#     totalDeathCases = 0
#     for i in trackerDetails:
#         totalCases += int(i['reported'])
#         totalCured += int(i['cured'])
#         totalActiveCases += int(i['active'])
#         totalDeathCases += int(i['death'])
#     # print(totalCases, ' ', totalCured, ' ',
#         # totalActiveCases, ' ', totalDeathCases)
#         if i['district'] == 'Pondicherry':
#             tracker_tag += tracker_Trtag.format('Pondicherry',
#                                                 i['reported'], i['cured'], i['active'], i['death'])
#         elif i['district'] == 'Karaikal':
#             tracker_tag += tracker_Trtag.format('Karaikal', i['reported'],
#                                                 i['cured'], i['active'], i['death'])

#         elif i['district'] == 'Yanam':
#             tracker_tag += tracker_Trtag.format('Yanam', i['reported'],
#                                                 i['cured'], i['active'], i['death'])

#         elif i['district'] == 'Mahe':
#             tracker_tag += tracker_Trtag.format('Mahe', i['reported'],
#                                                 i['cured'], i['active'], i['death'])
#     overallCases = overallCases.format(totalCases, totalCured,
#                                        totalActiveCases, totalDeathCases)
#     return tracker_tag, overallCases


# def getApiData():
#     resp_1 = request.urlopen(
#         'https://pycare-api.herokuapp.com/hospitalDetails')
#     data_1 = resp_1.read()
#     hospitalDetails = data_1.decode('utf-8')
#     hospitalDetails = json.loads(hospitalDetails)

#     resp_2 = request.urlopen(
#         'https://pycare-api.herokuapp.com/districtWiseReport')
#     data_2 = resp_2.read()
#     trackerDetails = data_2.decode()
#     trackerDetails = json.loads(trackerDetails)

#     testingCentersDataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vReED3ftV6BZO96JnXcC9puD5jYQqDzHKRWd8C_Eab0Z-edLU0z60JRWi3j7MJuTYDROnkgWlcujVSk/pub?output=csv"
#     response = requests.get(testingCentersDataUrl)
#     reader = csv.reader(io.StringIO(response.text))

#     m = list(reader)[8:]

#     print(m[0])
#     return hospitalDetails, trackerDetails, list(reader)[8:]


# def readDynamicPages():
#     covidTracker = ''
#     bedAvailability = ''
#     testingCenters = ""

#     with open("./dynamicPages/covidTracker.html", "r", encoding='utf-8') as dynamicPage_1:
#         covidTracker = dynamicPage_1.read()
#     with open("./dynamicPages/bedAvailability.html", "r", encoding='utf-8') as dynamicPage_2:
#         bedAvailability = dynamicPage_2.read()
#     with open("./dynamicPages/testingCenter.html", "r", encoding='utf-8') as dynamicPage:
#         testingCenters = dynamicPage.read()

#     return covidTracker, bedAvailability, testingCenters


# # FORMATTING THE TWO STRING'S PLACEHOLDERS WITH THE REALTIME DATA FROM THE API


# def writeToStaticPages(covidTracker,
#                        bedAvailability,
#                        bedAvailability_Tags,
#                        tracker_tag,
#                        overallCases,
#                        trackerDetails,
#                        testingCenters,
#                        testingCentersList):
#     bedAvailability = bedAvailability.format(
#         bedAvailability_Tags[0])

#     temp = []
#     for i in trackerDetails:
#         if i["district"] == "Pondicherry":
#             temp.append(i["active"])
#             temp.append(i["active"])
#             temp.append(i["cured"])
#             temp.append(i["death"])

#         if i["district"] == "Karaikal":
#             temp.append(i["active"])
#             temp.append(i["active"])
#             temp.append(i["cured"])
#             temp.append(i["death"])

#         if i["district"] == "Yanam":
#             temp.append(i["active"])
#             temp.append(i["active"])
#             temp.append(i["cured"])
#             temp.append(i["death"])

#         if i["district"] == "Mahe":
#             temp.append(i["active"])
#             temp.append(i["active"])
#             temp.append(i["cured"])
#             temp.append(i["death"])

#     covidTracker = covidTracker.format(*temp)
#     # with open(".\dynamicPages\/trackerscript.txt", "r", encoding="utf-8") as s:
#     #     trackerJs = s.read()
#     # covidTracker += trackerJs
#     del temp

#     temp = """<div class="col">
#                 <div class="profile">
#                     <img src="images/test.jpg">
#                     <center><h3> {time} <a href="{mapLink}" target="_blank" style="text-decoration: none;"><span style="font-size: 23px;color: blue;">&#128506</span></a></h3></center>
#                     <p><span style="font-weight: bold;">Address:</span>{location}, {pincode}</p>
#                 </div>
#             </div>"""

#     t = ""

#     for divs in testingCentersList:
#         t += temp.format(time=divs[5], mapLink=divs[7],
#                          location=divs[2], pincode=divs[6])

#     testingCenters = testingCenters.format(t)

#     with open("./staticPages/covidTracker.html", "w", encoding='utf-8') as covidTrackerFile:
#         covidTrackerFile.write(covidTracker)
#     with open("./staticPages/bedAvailability.html", "w", encoding='utf-8') as bedAvailabilityFile:
#         bedAvailabilityFile.write(bedAvailability)
#     with open("./staticPages/testingCenter.html", "w", encoding='utf-8') as testingCenterFile:
#         testingCenterFile.write(testingCenters)

#     print('HTML Files generated succesfully')


# ###  MAIN PART ###
# # covidTracker, bedAvailability, testingCenters = readDynamicPages()
# # hospitalDetails, trackerDetails, testingCentersList = getApiData()
# # hospitalDetails = processHospitalData(
# #     hospitalDetails)
# # bedAvailability_Tags = categorizeHospitals(
# #     hospitalDetails)
# # tracker_tag, overallCases = processTrackerDetails(trackerDetails)
# # writeToStaticPages(covidTracker, bedAvailability,
# #                    bedAvailability_Tags, tracker_tag, overallCases, trackerDetails, testingCenters, testingCentersList)


# # response = request.urlopen("https://pycare-api.herokuapp.com/status")
# # data = response.read()
# # lastUpdatedOn = json.loads(data.decode("utf-8"))[0]["lastUpdatedOn"]
# # with open("./staticPages/lastUpdate.js", "w") as js:
# #     js.write('''document.getElementById("lastUpdatedOn").innerHTML = "{}";'''.format(lastUpdatedOn))


# testingCentersDataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vReED3ftV6BZO96JnXcC9puD5jYQqDzHKRWd8C_Eab0Z-edLU0z60JRWi3j7MJuTYDROnkgWlcujVSk/pub?output=csv"
# response = requests.get(testingCentersDataUrl)
# reader = csv.reader(io.StringIO(response.text))

# m = list(reader)[8:]

# d = []

# for data in m:
#     d.append({"district":data[0].strip(),
#     "location":data[2].strip(),
#     "time": data[5].strip(),
#     "pincode":data[6].strip(),
#     "map":data[7].strip()})

# with open("testingCenter.json","w") as f:
#     f.write(json.dumps(d))