
function myFunction() {
    var search_input = document.getElementById('search').value;
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