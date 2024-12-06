var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    }




     var manubtn = document.getElementById("manubtn");
     var sidenav = document.getElementById("sidenav");
     var menu = document.getElementById("menu");
      sidenav.style.right = "-250px";

       manubtn.onclick = function() {
if (sidenav.style.right == "-250px") {
    sidenav.style.right = "0";
    menu.src = "images/menu.png";
} else {
    sidenav.style.right = "-250px";
    menu.src = "images/menu.png";
}
}