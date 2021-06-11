function gov() {
    var original = document.getElementById('search').value;
    var input = original.toUpperCase();
    
    var gov = document.getElementsByClassName('gov_institue');
    // console.log(gov.length);
    
    for (var i = 0; i < gov.length; i++) {
      if (!(gov[i].textContent.match(input)))  {
        gov[i].style.display = 'none';
        not_found = document.getElementById('not_found_gov');
      not_found.style.display='';
          
      }        else{
        // console.log('false');
        gov[i].style.display='';
        not_found = document.getElementById('not_found_gov');
        not_found.style.display='none';
    
      }
    }
    }

function private() {
var original = document.getElementById('search').value;
var input = original.toUpperCase();
var priva = document.getElementsByClassName('private_institute');
    for (var i = 0; i < priva.length; i++) {
        if (!(priva[i].textContent.match(input)))  {
          priva[i].style.display = 'none';
          not_found = document.getElementById('not_found_private');
        //   console.log(not_found);
             not_found.style.display='';
            
        }
        else{
          // console.log('false');
          priva[i].style.display='';
          not_found = document.getElementById('not_found_private');
          not_found.style.display='none';

      
        }

      }

}

function private_nursing() {
    var original = document.getElementById('search').value;
    var input = original.toUpperCase();
    var priva = document.getElementsByClassName('private_nursing');
        for (var i = 0; i < priva.length; i++) {
            if (!(priva[i].textContent.match(input)))  {
              priva[i].style.display = 'none';
              not_found = document.getElementById('not_found_nursing');
              console.log(not_found);
                 not_found.style.display='';
                
            }
            else{
              // console.log('false');
              priva[i].style.display='';
              not_found = document.getElementById('not_found_nursing');
              not_found.style.display='none';
          
            }
              
          }
    }