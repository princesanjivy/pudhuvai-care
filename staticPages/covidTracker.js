function loadJSON(callback) {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "dynamic.json", true);
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
        <th class="td-red" lang="en" id="tracker-table" colspan="2">Active = #NUMBER </th>
        <th lang="en" id="tracker-table" rowspan="2">Today Recovered</th>
        <th lang="en" id="tracker-table" rowspan="2">Today Death</th>
    </tr>
    <tr id="tracker-table">
        <th class="td-red" lang="en" id="tracker-table">Hospital</th>
        <th class="td-red" lang="en" id="tracker-table">Home Isolation</th>
    </tr>`;

    let status = data["covidTracker"];

    for(let i in status){
        table += 
        `<tr id="tracker-table">
                <td id="tracker-table">
                    <p style="text-align: left;"><u><span>`+ status[i].district +`</span></u> <br>
                        <p class="td-red" style="font-size: 2vh; font-weight: bold;"> 107 </p>
                    </p>
                    <td class="td-red" id="tracker-table" style="font-size: 2vh; font-weight: bold;">142</td>
                    <td class="td-red" id="tracker-table" style="font-size: 2vh; font-weight: bold;">800</td>
                    <td id="tracker-table" style="color: green;font-size: 2vh;font-weight: bold;">
                        <p>` + status[i].cured + `</p>
                    </td>
                    <td id="tracker-table" style="color: green;font-size: 2vh;font-weight: bold;">
                        <p>` + status[i].death + `</p>
                    </td>
            </tr>`;
    }
    table += "</table>";

    document.getElementById("covidTrackerTable").innerHTML = table;
});
