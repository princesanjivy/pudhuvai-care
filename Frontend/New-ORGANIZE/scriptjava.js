// COVID TRACKER

// Author: Ashok

function display_ct() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    hours = x.getHours( ) % 12;
    hours = hours ? hours : 12;
    month = x.getMonth()+1;
    var x1=" Date: " + x.getDate() +  "/" + month + "/" + x.getFullYear(); 
    x1 = x1 + " ";
    x2 = " Time: " +  hours + ":" +  x.getMinutes() + ":" + ampm;
    document.getElementById('ct_d-ash').innerHTML = x1;
    document.getElementById('ct_t-ash').innerHTML = x2
    display_c();
     }
     
    function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
    // display_c()

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


// working
    // var original = document.getElementById('search').value;
    // var input = original.toUpperCase();
    // console.log(input);
    // // console.log(input);
    // var table = document.getElementById('table_content');
    // var rows = document.getElementsByClassName('content');
  
    //   for (var i = 0; i<rows.length; i++ ){
    //     // console.log(rows[i].textContent);
    //     // console.log(input);
    //     if (!(rows[i].textContent.match(input))) {
    //       // console.log('true');
    //       rows[i].style.display = 'none';
    //         not_found = document.getElementById('not_found');
    //       not_found.style.display='';
    

            
    //     }
    //     else{
    //       // console.log('false');
    //       rows[i].style.display='';
    //       not_found = document.getElementById('not_found');
    //       not_found.style.display='none';

    //     }
    //       }  

function gov() {
    var original = document.getElementById('search-ash').value;
    var input = original.toUpperCase();
    
    var gov = document.getElementsByClassName('gov_institue-ash');
    // console.log(gov.length);
    
    for (var i = 0; i < gov.length; i++) {
      // console.log(gov[i]);
      var x = gov[i].textContent.toUpperCase();
      // console.log(x);
      if (!(x.indexOf(input) > -1 ))  {
        gov[i].style.display = 'none';
        not_found = document.getElementById('not_found_gov-ash');
      not_found.style.display='';
          
      }        else{
        // console.log('false');
        gov[i].style.display='';
        not_found = document.getElementById('not_found_gov-ash');
        not_found.style.display='none';
    
      }
    }
    }



function private() {
var original = document.getElementById('search-ash').value;
var input = original.toUpperCase();
var priva = document.getElementsByClassName('private_institute-ash');
    for (var i = 0; i < priva.length; i++) {
      var x = priva[i].textContent.toUpperCase();

        if (!(x.indexOf(input) > -1 ))  {
          priva[i].style.display = 'none';
          not_found = document.getElementById('not_found_private-ash');
        //   console.log(not_found);
             not_found.style.display='';
            
        }
        else{
          // console.log('false');
          priva[i].style.display='';
          not_found = document.getElementById('not_found_private-ash');
          not_found.style.display='none';

      
        }

      }

}

function private_nursing() {
    var original = document.getElementById('search-ash').value;
    var input = original.toUpperCase();
    var priva = document.getElementsByClassName('private_nursing-ash');
        for (var i = 0; i < priva.length; i++) {
          var x = priva[i].textContent.toUpperCase();
            if (!(x.indexOf(input) > -1 ))  {
              priva[i].style.display = 'none';
              not_found = document.getElementById('not_found_nursing-ash');
              // console.log(not_found);
                 not_found.style.display='';
            }
            else{
              // console.log('false');
              priva[i].style.display='';
              not_found = document.getElementById('not_found_nursing-ash');
              not_found.style.display='none';
          
            }
              
          }
    }