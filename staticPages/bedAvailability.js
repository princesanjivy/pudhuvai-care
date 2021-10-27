function loadJSON(callback) {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "bedAvailability.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

loadJSON(function (response) {
  let data = JSON.parse(response);

  let div = "";

  let status = data["bedAvailability"];

  for (let i in status) {
    div +=
      `<tr  class="content-ash">
      <td id="hospital-name-ash" class="hospital-name" >` +
      status[i].hospitalName +
      `</td>
      <td  id="isolation-ash">` +
      status[i].isolationBeds.vacant +
      `</td>
      <td id="oxygen-ash">` +
      status[i].oxygenBeds.vacant +
      `</td>
      <td id="ventilator-ash">` +
      status[i].ventilatorBeds.vacant +
      `</td>
        </tr>`;
  }

  document.getElementById("bedAvailabilityData").innerHTML = div;
});
