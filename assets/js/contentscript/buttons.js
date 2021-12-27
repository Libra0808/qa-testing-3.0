let ondblclick_btn = document.getElementById("ondblclick");
let oncontextmenu_btn = document.getElementById("oncontextmenu");
let onclick_btn = document.getElementById("onclick");

ondblclick_btn.addEventListener("dblclick",function(){document.getElementById('double-content').innerText = "you have done a double click";});
oncontextmenu_btn.addEventListener("contextmenu",function(e){e.preventDefault();document.getElementById('right-content').innerText = "you have done a right click";});
onclick_btn.addEventListener("click",function(){document.getElementById('click-content').innerText = "you have done a dynamic click";});