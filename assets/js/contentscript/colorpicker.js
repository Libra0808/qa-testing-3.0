let col_in = document.getElementById("color-in");
let col_out = document.getElementById("color-out");
col_in.addEventListener("input", setcolor);
function setcolor() {
   col_out.style.color = col_in.value;
}