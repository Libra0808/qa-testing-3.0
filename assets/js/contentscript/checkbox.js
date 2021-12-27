var toggler = document.getElementsByClassName("caret");
for (let i = 0; i < toggler.length; i++) {
   toggler[i].addEventListener("click", function () {
      this.parentElement.querySelector(".nested").classList.toggle("show");
      this.classList.toggle("caret-down");
   });
}

let checkboxes = document.querySelectorAll('.nested-checkbox input[type="checkbox"]');

for (let x = 0; x < checkboxes.length; x++) {

   checkboxes[x].addEventListener("change", function (e) {

      let parentNode = this.parentNode;

      const cbDescendants = parentNode.querySelectorAll('input[type="checkbox"]');

      for (let y = 0; y < cbDescendants.length; y++) {
         cbDescendants[y].checked = this.checked;
         cbDescendants[y].indeterminate = false;
      }

      while (["ul", "li"].indexOf(parentNode.nodeName.toLowerCase()) >= 0) {

         const mainCb = parentNode.querySelector(':scope > input[type="checkbox"]');

         if (mainCb && mainCb != this) {

            mainCb.checked = this.checked;

            const mainCbChildren = mainCb.parentNode.querySelectorAll('input[type="checkbox"]');
            const numTotal = mainCbChildren.length;

            let numChecked = 0;
            for (let z = 0; z < mainCbChildren.length; z++) {
               numChecked += mainCbChildren[z].checked;
            }

            if (numTotal === numChecked) {
               mainCb.indeterminate = false;
               mainCb.checked = true;
            } else {
               if (numChecked === 0) {
                  mainCb.indeterminate = false;
                  mainCb.checked = false;
               } else {
                  mainCb.indeterminate = true;
                  mainCb.checked = false;
               }
            }
         }

         parentNode = parentNode.parentNode;
      }
   });
}

// code for the output 
let ulli = document.querySelectorAll("#checkbox-output li");
checkboxes.forEach(function (ele) {
   ele.addEventListener("change", checkall);
   function checkall() {
      for (let i = 0; i <= checkboxes.length; i++) {
         if (checkboxes[i].checked == true) {
            ulli[i].style.display = "block";
         }
         else {
            ulli[i].style.display = "none";
         }
      }
   }
})