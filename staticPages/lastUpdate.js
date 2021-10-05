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
  let date = JSON.parse(response);
  document.getElementById("lastUpdatedOn").innerHTML = date["lastUpdatedOn"];
});
