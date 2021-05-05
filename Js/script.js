// Tags
var tagsElement = document.getElementsByClassName("tag");

function loadDoc(url,cFunction){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange= function(){
    if(xhttp.readyState==4 && xhttp.status==200){
      cFunction(this.responseText);
    }
  };
  xhttp.open("GET",url,true);
  xhttp.send();
}

loadDoc('js/tagdates.txt',showTagDates);
function showTagDates(dates){
  var datesSplit = dates.split(";");
  for(i in tagsElement){
         tagsElement[i].innerHTML = datesSplit[i];
     }
}





// Show menu in Extra Small Mobile phones
var menu = document.getElementById("menu"),
  menuBar = document.getElementById("menuBar");
  menuBar.addEventListener("click",showMenu,true);
function showMenu(){
  menuBar.removeEventListener("click",showMenu,true);
  menu.classList.add("xsm-menu-show");
  menuBar.addEventListener("click", closeMenu,true);
}
function closeMenu(){
  menuBar.removeEventListener("click",closeMenu,true);
  menu.classList.remove("xsm-menu-show");
  menuBar.addEventListener("click", showMenu,true);
}
