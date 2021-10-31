function loadJSON(callback) {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "covidTracker.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

loadJSON(function (response) {
  let data = JSON.parse(response);

  let table = `<table id="table-content" style="overflow-x: scroll;">
    <tr style="border: none;">
        <td style="border: none; text-align: center;">
            <img id="covid-th" src="images/covid_th.jpg" alt="infected">
        </td>
        <td style="border: none; text-align: center;">
            <img id="hospital-th" src="images/hospital_th.jpg" alt="hospital">
        </td>
        <td style="border: none; text-align: center;">
            <img id="isolation-th" src="images/home_th.jpg" alt="isolation">
        </td>
        <td style="border: none; text-align: center;">
            <img id="recovered-th" src="images/recovered_th.jpg" alt="recovered">
        </td>
        <td style="border: none; text-align: center;">
            <img id="death-th" src="images/death_th.jpg" alt="death">
        </td>
    </tr>


    <tr id="tracker-table">
        <th lang="en" id="tracker-table" rowspan="2"> <span lang="en">Today New Cases</span> </th>
        <th lang="en" id="tracker-table" rowspan="2">Today Recovered</th>
        <th lang="en" id="tracker-table" rowspan="2">Today Death</th>
    </tr>
    <tr id="tracker-table">
        <th class="td-red" lang="en" id="tracker-table">Hospital</th>
        <th class="td-red" lang="en" id="tracker-table">Home Isolation</th>
    </tr>`;

  let status = data["covidTracker"];
  let covidData = data["covidData"];

  for (let i in status) {
    table +=
      `<tr id="tracker-table">
                <td id="tracker-table">
                    <p style="text-align: left;"><u><span>` +
      status[i].district +
      `</span></u> <br>
                        <p class="td-red" style="font-size: 2vh; font-weight: bold;">` +
      covidData.todayNewCases[status[i].district.toLowerCase()] +
      `</p>
                    </p>
                    <td class="td-red" id="tracker-table" style="font-size: 2vh; font-weight: bold;">` +
      covidData.hospitalised[status[i].district.toLowerCase()] +
      `</td>
                    <td class="td-red" id="tracker-table" style="font-size: 2vh; font-weight: bold;">` +
      covidData.homeIsolation[status[i].district.toLowerCase()] +
      `</td>
                    <td id="tracker-table" style="color: green;font-size: 2vh;font-weight: bold;">
                        <p>` +
      covidData.totalRecovered[status[i].district.toLowerCase()] +
      `</p>
                    </td>
                    <td id="tracker-table" style="color: green;font-size: 2vh;font-weight: bold;">
                        <p>` +
      covidData.totalDeath[status[i].district.toLowerCase()] +
      `</p>
                    </td>
            </tr>`;
  }
  table += "</table>";

  document.getElementById("covidTrackerTable").innerHTML = table;

  for (let i in covidData.occupancy) {
    document.getElementById(i).innerHTML = covidData.occupancy[i];
  }

  for (let i in covidData.testStatistics) {
    document.getElementById(i).innerHTML = covidData.testStatistics[i];
  }

  for (let i in covidData.vitalStatistics) {
    document.getElementById(i).innerHTML = covidData.vitalStatistics[i];
  }

  for (let i in covidData.covidTillDate) {
    document.getElementById(i).innerHTML = covidData.covidTillDate[i];
  }

  document.getElementById("firstDoseToday").innerHTML =
    covidData.covidVaccine.firstDose[0];
  document.getElementById("firstDoseCum").innerHTML =
    covidData.covidVaccine.firstDose[1];

  document.getElementById("secondDoseToday").innerHTML =
    covidData.covidVaccine.secondDose[0];
  document.getElementById("secondDoseCum").innerHTML =
    covidData.covidVaccine.secondDose[1];

  document.getElementById("doseTotalToday").innerHTML =
    covidData.covidVaccine.total[0];
  document.getElementById("doseTotalCum").innerHTML =
    covidData.covidVaccine.total[1];

  document.getElementById("lastUpdatedOn").innerHTML =
    covidData.lastUpdatedData;
});
