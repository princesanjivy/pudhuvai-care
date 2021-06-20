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
    bedAvailability_Tags = []
    for i in govtHospitals:
        gov_tr += trTag.format('gov_institue-ash', i['hospitalName'], i['isolationBeds']
                               ['vacant'], i['oxygenBeds']['vacant'], i['ventilatorBeds']['vacant'])

    for i in privateHospitals:
        pri_tr += trTag.format('private_institute-ash', i['hospitalName'], i['isolationBeds']
                               ['vacant'], i['oxygenBeds']['vacant'], i['ventilatorBeds']['vacant'])

    for i in privateNursingHomes:
        nursingHomes_tr += trTag.format('private_nursing-ash', i['hospitalName'], i['isolationBeds']
                                        ['vacant'], i['oxygenBeds']['vacant'], i['ventilatorBeds']['vacant'])
    bedAvailability_Tags.append(gov_tr)
    bedAvailability_Tags.append(pri_tr)
    bedAvailability_Tags.append(nursingHomes_tr)
    return bedAvailability_Tags


def processHospitalData(hospitalDetails):
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
    return govtHospitals, privateHospitals, privateNursingHomes


def processTrackerDetails(trackerDetails):
    overallCases = ''' <tr style="background-color: white;">
                    <td>    <div class="color-box-ash total-cases-ash"></div> <span id="total_cases1-ash">{}</span></td>
                    <td>
                        <div class="color-box-ash total-cured-ash"></div><span id="total_cured1-ash">{}</span></td>
                        <td><div class="color-box-ash active-cases-ash"></div><span id="active_cases1-ash">{}</span></td>
                        <td><div class="color-box-ash death-ash"></div><span id="total_death1-ash">{}</span></td>
        
                    
                </tr>'''
    tracker_Trtag = '''
                <tr>
                    <td id="district" >{}</td>
                    <td id="reported">{}</td>
                    <td id="cured">{}</td>
                    <td id="active">{}</td>
                    <td id="death">{}</td>
                </tr>'''
    total_tag = '''<tr id="total" class = "total">
                    <td id="total" >{}</td>
                    <td id="reported">{}</td>
                    <td id="cured">{}</td>
                    <td id="active">{}</td>
                    <td id="death">{}</td>
                </tr>            '''
    tracker_tag = ''
    totalCases = 0
    totalCured = 0
    totalActiveCases = 0
    totalDeathCases = 0
    for i in trackerDetails:
        totalCases += int(i['reported'])
        totalCured += int(i['cured'])
        totalActiveCases += int(i['active'])
        totalDeathCases += int(i['death'])
    # print(totalCases, ' ', totalCured, ' ',
        # totalActiveCases, ' ', totalDeathCases)
        if i['district'] == 'Pondicherry':
            tracker_tag += tracker_Trtag.format('Pondicherry',
                                                i['reported'], i['cured'], i['active'], i['death'])
        elif i['district'] == 'Karaikal':
            tracker_tag += tracker_Trtag.format('Karaikal', i['reported'],
                                                i['cured'], i['active'], i['death'])

        elif i['district'] == 'Yanam':
            tracker_tag += tracker_Trtag.format('Yanam', i['reported'],
                                                i['cured'], i['active'], i['death'])

        elif i['district'] == 'Mahe':
            tracker_tag += tracker_Trtag.format('Mahe', i['reported'],
                                                i['cured'], i['active'], i['death'])
    overallCases = overallCases.format(totalCases, totalCured,
                                       totalActiveCases, totalDeathCases)
    tracker_tag += total_tag.format('Total', totalCases,
                                    totalCured, totalActiveCases, totalDeathCases)
    return tracker_tag, overallCases


def getApiData():
    resp_1 = request.urlopen(
        'https://pycare-api.herokuapp.com/hospitalDetails')
    data_1 = resp_1.read()
    hospitalDetails = data_1.decode('utf-8')
    hospitalDetails = json.loads(hospitalDetails)
    resp_2 = request.urlopen(
        'https://pycare-api.herokuapp.com/districtWiseReport')
    data_2 = resp_2.read()
    trackerDetails = data_2.decode()
    trackerDetails = json.loads(trackerDetails)
    return hospitalDetails, trackerDetails


def readDynamicPages():
    covidTracker = ''
    bedAvailability = ''
    with open(".\dynamicPages\covidTracker.html", "r", encoding='utf-8') as dynamicPage_1:
        covidTracker = dynamicPage_1.read()
    with open(".\dynamicPages\/bedAvailability.html", "r", encoding='utf-8') as dynamicPage_2:
        bedAvailability = dynamicPage_2.read()
    return covidTracker, bedAvailability


# formatting the two string's placeholders with the realtime data from the API


def writeToStaticPages(covidTracker, bedAvailability, bedAvailability_Tags, tracker_tag, overallCases):
    bedAvailability = bedAvailability.format(
        bedAvailability_Tags[0], bedAvailability_Tags[1], bedAvailability_Tags[2])
    covidTracker = covidTracker.format(overallCases, tracker_tag)
    with open(".\staticPages\covidTracker.html", "w", encoding='utf-8') as covidTrackerFile:
        covidTrackerFile.write(covidTracker)
    with open(".\staticPages\/bedAvailability.html", "w", encoding='utf-8') as bedAvailabilityFile:
        bedAvailabilityFile.write(bedAvailability)
    print('HTML Files generated succesfully')


covidTracker, bedAvailability = readDynamicPages()
hospitalDetails, trackerDetails = getApiData()
govtHospitals, privateHospitals, privateNursingHomes = processHospitalData(
    hospitalDetails)
bedAvailability_Tags = categorizeHospitals(
    govtHospitals, privateHospitals, privateNursingHomes)
tracker_tag, overallCases = processTrackerDetails(trackerDetails)
writeToStaticPages(covidTracker, bedAvailability,
                   bedAvailability_Tags, tracker_tag, overallCases)
