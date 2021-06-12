
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