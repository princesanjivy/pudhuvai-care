function loadJSON(callback) {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "testingCenter.json", true);
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

  let status = data["testingCenter"];

  for (let i in status) {
    div += `<div class="col">
         <div class="profile">
             <img src="images/test.jpg">
             <center><h3>`+ status[i].time +`<a href="`+ status[i].map +`" target="_blank" style="text-decoration: none;"><span style="font-size: 23px;color: blue;">&#128506</span></a></h3></center>
             <p><span style="font-weight: bold;">Address:</span>`+ status[i].location +`, `+ status[i].pincode +`</p>
         </div>
     </div>`;
  }

  document.getElementById("testingCenterData").innerHTML = div;
});
