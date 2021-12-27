let radio_btn = document.querySelectorAll(".radio_buttons .form-check-input");
for (let i = 0; i <= radio_btn.length; i++) {
   radio_btn[i].addEventListener("click", function () {
      if (radio_btn[i].checked == true) {
         document.getElementById("click-radio-content").innerText = "You Selected " + radio_btn[i].value;
      }
   })
}