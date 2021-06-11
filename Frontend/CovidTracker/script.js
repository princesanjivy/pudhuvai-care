function display_ct() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    hours = x.getHours( ) % 12;
    hours = hours ? hours : 12;
    var x1=" Date: " + x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
    x1 = x1 + " ";
    x2 = " Time: " +  hours + ":" +  x.getMinutes() + ":" + ampm;
    document.getElementById('ct_d').innerHTML = x1;
    document.getElementById('ct_t').innerHTML = x2
    display_c();
     }
     
    function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
    // display_c()
