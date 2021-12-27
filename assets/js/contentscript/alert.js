document.getElementById("myalert").addEventListener("click", function () {
   alert("you have clicked a button");
});

document.getElementById("aftersec5").addEventListener("click", function () {
   setTimeout(function () { alert("This alert appeared after 5 seconds"); }, 5000);
});

document.getElementById("myconfirm").addEventListener("click", function () {
   var r = confirm("Do you want to confirm");
   var txt;
   if (r == true) {
      txt = "You pressed OK!";
   } else {
      txt = "You pressed Cancel!";
   }
   document.getElementById("confirm-result").innerHTML = txt;
});

document.getElementById("myprompt").addEventListener("click", function () {
   var person = prompt("Please enter your name");
   document.getElementById("name-result").innerHTML = person;
});
