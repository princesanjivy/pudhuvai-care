// COVID TRACKER

// Author: Ashok

    // function display_ct() {
    // var x = new Date()
    // var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    // hours = x.getHours( ) % 12;
    // hours = hours ? hours : 12;
    // month = x.getMonth()+1;
    // var x1=" Date: " + x.getDate() +  "/" + month + "/" + x.getFullYear(); 
    // x1 = x1 + " ";
    // x2 = " Time: " +  hours + ":" +  x.getMinutes() + ":" + ampm;
    // document.getElementById('ct_d-ash').innerHTML = x1;
    // document.getElementById('ct_t-ash').innerHTML = x2
    // display_c();
    //  }
     
    // function display_c(){
    // var refresh=1000; // Refresh rate in milli seconds
    // mytime=setTimeout('display_ct()',refresh)
    // }

// testing 

// Author: Manigandan.G
function myFunction() {
    var search_input = document.getElementById('searchInput').value;
    var input = search_input.toUpperCase();
    // console.log(input);
    var contents = document.getElementsByClassName('col');
    
    for (let i = 0; i < contents.length; i++) {
 
        // console.log(contents[i].innerText);
        x = contents[i].innerText.toUpperCase();
        // console.log(x);
        if (!(x.indexOf(input) > -1 )) {
            // console.log('true');
            contents[i].style.display = 'none';
            if (contents[i].style.display=='none') {
                console.log("Not found");
            }
           
            
        }
        else{
            // console.log(false);
            contents[i].style.display = 'block';
        }
    }
//    var index =  contents[0].innerText.indexOf(input);
//    console.log(contents[0].innerText);
//    console.log(index);
}

// bed availability

// Author:Ashok


// 

function table_search() {

    var original = document.getElementById('search-ash').value;
    var input = original.toUpperCase();
    // console.log(input);
    var count = 0;

    //gov body
    var gov_body = document.getElementById('gov_body');
    var row = gov_body.getElementsByTagName('tr');
    var hospital_name = gov_body.getElementsByClassName('hospital-name');
    var gov_head = document.getElementById('gov_head');

    //private body
    var private_body = document.getElementById('private_body');
    var private_row = private_body.getElementsByTagName('tr');
    var private_hospital_name = private_body.getElementsByClassName('hospital-name');
    var private_head = document.getElementById('private_head');


    // nursing home
    var nursing_body = document.getElementById('nursing_body');
    var nursing_row = nursing_body.getElementsByTagName('tr');
    var nursing_hospital_name = nursing_body.getElementsByClassName('hospital-name');
    var nursing_head = document.getElementById('nursing_head')
    


    //gov loop
    for(var i = 0; i<row.length; i++){
      var x = hospital_name[i].textContent.toUpperCase()
      if (x.indexOf(input)>-1) {
        // console.log('found');
      }
      else{
        row[i].style.display = 'none';
      }
    }
    for(var j =0; j<hospital_name.length; j++){
      if (row[j].style.display =='none') {
          count +=1;
      }
    }
    // console.log(count);
    // console.log(hospital_name.length);
    if (count == hospital_name.length) {
      gov_head.style.display = 'none';
    }

    //loop for private
    for(var k = 0;k<private_hospital_name.length; k++ ){
        var y = private_hospital_name[k].textContent.toUpperCase();
        if (y.indexOf(input)>-1) {
            // console.log('found');            
        }
        else{
            private_row[k].style.display = 'none';
        }
    }
    var count2 = 0;
    for(var j =0; j<private_hospital_name.length; j++){
        if (private_row[j].style.display =='none') {
            count2 +=1;
        }
      }
    // console.log(private_hospital_name.length);
    if (count2 == private_hospital_name.length) {
      private_head.style.display = 'none';
    }

    //loop for private nursing 
    for(var i=0; i<nursing_hospital_name.length; i++){
        var z = nursing_hospital_name[i].textContent.toUpperCase();
        // console.log(z);
        if (z.indexOf(input)> -1) {
            console.log('Found');
        }
        else{
            nursing_row[i].style.display = 'none';
        }
    }
    var count3 = 0;
    for(var m = 0; m<nursing_hospital_name.length;m++){
        if (nursing_row[m].style.display=='none') {
            count3+=1;
        }
    }
    if (count3 == nursing_hospital_name.length) {
        nursing_head.style.display = 'none';        
    }

    not_found();

  }

  function not_found() {
    var gov_head = document.getElementById('gov_head');
    var private_head = document.getElementById('private_head');
    var nursing_head = document.getElementById('nursing_head');
    var not_found = document.getElementById('not_found-ash');

    if (gov_head.style.display === 'none' && private_head.style.display ==='none' && nursing_head.style.display ==='none') {
      not_found.style.display = '';
    }
  

  }


//   reset
function reset() {
    var all_rows = document.getElementsByTagName('tr');
    var all_head = document.getElementsByTagName('thead');
    var table = document.getElementsByTagName('table');
    var not_found = document.getElementById('not_found-ash');
    
    // console.log(all_rows);
    // for(var i = 0; i<table.length; i++){
    //   table[i].style.display = '';
    // }

    for(var i = 0; i<all_rows.length; i++){
      all_rows[i].style.display = '';
    }
    for(var i=0; i<all_head.length; i++){
        all_head[i].style.display='';
    }
    // for(var i = 0; i<extra.length; i++){
    //   extra[i].style.display = 'none';
    // }
    var gov_head = document.getElementById('gov_head');
    gov_head.style.display = '';


    not_found.style.display = 'none';

  
}