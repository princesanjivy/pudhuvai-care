import json
from urllib import request


def categorizeHospitals(govtHospitals, privateHospitals, privateNursingHomes):
    trTag = '''<tr  class="content-ash {}"  >
                        <td id="hospital-name-ash"class="hospital-name" >{}</td>
                        <td  id="isolation-ash" >{}</td>
                        <td id="oxygen-ash" >{}</td>
                        <td id="ventilator-ash" >{}</td>
            </tr>'''
    gov_tr = ''
    pri_tr = ''
    nursingHomes_tr = ''
    finalTags = []
    for i in govtHospitals:
        gov_tr += trTag.format('gov_institue-ash', i['hospitalName'], i['isolationBeds']
                               ['vacant'], i['oxygenBeds']['vacant'], i['ventilatorBeds']['vacant'])

    for i in privateHospitals:
        pri_tr += trTag.format('private_institute-ash', i['hospitalName'], i['isolationBeds']
                               ['vacant'], i['oxygenBeds']['vacant'], i['ventilatorBeds']['vacant'])

    for i in privateNursingHomes:
        nursingHomes_tr += trTag.format('private_nursing-ash', i['hospitalName'], i['isolationBeds']
                                        ['vacant'], i['oxygenBeds']['vacant'], i['ventilatorBeds']['vacant'])
    finalTags.append(gov_tr)
    finalTags.append(pri_tr)
    finalTags.append(nursingHomes_tr)
    return finalTags


def processData(hospitalDetails):
    govtHospitals = []
    privateHospitals = []
    privateNursingHomes = []
    for i in hospitalDetails:
        if (i['typeofInstitution'] == 'Govt Institutions'):
            govtHospitals.append(i)
        elif (i['typeofInstitution'] == 'PRIVATE MEDICAL COLLEGES'):
            privateHospitals.append(i)
        elif(i['typeofInstitution'] == 'PRIVATE NURSING HOMES'):
            privateNursingHomes.append(i)
    return categorizeHospitals(govtHospitals, privateHospitals, privateNursingHomes)


def getApiData():
    resp = request.urlopen('https://pycare-api.herokuapp.com/hospitalDetails')
    data = resp.read()
    hospitalDetails = data.decode('utf-8')
    hospitalDetails = json.loads(hospitalDetails)
    return processData(hospitalDetails)


def readDynamicPages():
    covidTracker = ''
    bedAvailability = ''
    with open(".\dynamicPages\covidTracker.html", "r", encoding='utf-8') as dynamicPage_1:
        covidTracker = dynamicPage_1.read()
    with open(".\dynamicPages\/bedAvailability.html", "r", encoding='utf-8') as dynamicPage_2:
        bedAvailability = dynamicPage_2.read()
    finalTags = getApiData()
    writeToStaticPages(covidTracker, bedAvailability, finalTags)


# formatting the two string's placeholders with the realtime data from the API


def writeToStaticPages(covidTracker, bedAvailability, finalTags):
    bedAvailability = bedAvailability.format(
        finalTags[0], finalTags[1], finalTags[2])
    with open(".\staticPages\covidTracker.html", "w", encoding='utf-8') as covidTrackerFile:
        covidTrackerFile.write(covidTracker)
    with open(".\staticPages\/bedAvailability.html", "w", encoding='utf-8') as bedAvailabilityFile:
        bedAvailabilityFile.write(bedAvailability)
    print('HTML Files generated succesfully')


readDynamicPages()
