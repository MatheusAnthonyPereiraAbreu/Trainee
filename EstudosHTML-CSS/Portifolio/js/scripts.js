
function openNav() { 

    var x = document.getElementById("navigation");
    var y = document.getElementById("icon-3-line");

    if (x.className === "navigation"){
        x.className += " menujs";
        y.innerHTML = "&Cross;";
        
    } else {
        x.className = "navigation" ;
        y.innerHTML = "&#9776;";
    }



}