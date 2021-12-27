let ele = document.querySelectorAll(".selectable .list-group .list-group-item");
for (let i = 0; i < ele.length; i++) {
   ele[i].addEventListener("click", function () {
      // ele[i].style.background = 'red';
      ele[i].classList.toggle("selected");
   })
}