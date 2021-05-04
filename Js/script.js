// Tags
var tagsElement = document.getElementsByClassName("tag");
var tagResponseText="";
var xhttp = new XMLHttpRequest();

xhttp.open("GET", "Js/tagdates.txt", true);
xhttp.onreadystatechange = function () {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    tagResponseText = xhttp.responseText.split(";");
    for(i in tagsElement){
        tagsElement[i].innerHTML = tagResponseText[i];
    }
  }
};
xhttp.send();

var menu=document.getElementById("menu");
function showMenu(){
  console.log("showMenu");
  document.body.addEventListener("click",closeMenu,true);
  menu.classList.add(".xsm-menu-show");
}
function closeMenu(){
  menu.classList.remove("xsm-menu-show");
}
