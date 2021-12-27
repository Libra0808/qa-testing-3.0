// getting modal
const web_modal = new bootstrap.Modal(document.getElementById("web-modal"));
const corection_modal = new bootstrap.Modal(document.getElementById("correction-modal"));

// getting all forms
let web_form = document.getElementById("web-form");
let correction_form = document.getElementById("correction-form");

let corection_form_input_feedback = document.querySelectorAll("#correction-modal .feedback");
let correction_form_input_ele = document.querySelectorAll("#correction-form input");

let selected_row = null;

// code to do validation of text input element
function text_input(id) {
   let ele = document.getElementById(id);
   let next_ele = ele.nextElementSibling;
   if (ele.value.trim() == "") {
      ele.style.borderColor = "red";
      next_ele.innerText = "This cannot be empty";
      next_ele.style.color = "red";
      return false;
   }
   else {
      ele.style.borderColor = "green";
      next_ele.innerText = "Looks Good";
      next_ele.style.color = "green";
      return true;
   }
}

// code to do validation of number input element
// $ convert num value into int
function num_input(id, num) {
   let ele = document.getElementById(id);
   let next_ele = ele.nextElementSibling;
   if (ele.value.trim() == "" || isNaN(ele.value)) {
      ele.style.borderColor = "red";
      next_ele.innerText = "This cannot be empty and can have number only";
      next_ele.style.color = "red";
      return false;
   }
   else if (ele.value.length < num) {
      ele.style.borderColor = "red";
      return false;
   }
   else {
      ele.style.borderColor = "green";
      next_ele.innerText = "Looks Good";
      next_ele.style.color = "green";
      return true;
   }
}

// function to value of input element
function give_input_value(id) {
   let ele = document.getElementById(id);
   return ele.value;
}

// funtion to remove row form web table
function remove_btn_fun() {
   let remove_btn = document.querySelectorAll(".remove-tr");
   remove_btn.forEach(function (ele) {
      ele.addEventListener("click", remove_tr);
      function remove_tr(e) {
         let tr = e.target.parentElement.parentElement;
         tr.remove();
         if (document.getElementById("web-table-body").innerText == "") {
            document.getElementById("web-table-body").innerHTML = '<tr><td colspan="6" class="text-center"><h1>No Data</h1></td></tr>';
         }
      }
   });
}
remove_btn_fun();

// validation or adding form data into web table
web_form.addEventListener("submit", valid_web_form);

function valid_web_form(e) {
   e.preventDefault();
   text_input("web-first-name");
   text_input("web-last-name");
   text_input("web-email");
   num_input("web-age", 2);
   text_input("web-department");

   if (((text_input("web-first-name")) && (text_input("web-last-name"))) && ((text_input("web-email")) && (text_input("web-department")))) {
      if (num_input("web-age", 2)) {

         let table_row = document.createElement("tr");
         let first_name_td = document.createElement("td");
         let last_name_td = document.createElement("td");
         let email_td = document.createElement("td");
         let age_td = document.createElement("td");
         let department_td = document.createElement("td");
         let action_td = document.createElement("td");
         action_td.setAttribute("class", "text-center");
         // edit btn
         let edit_btn_td = document.createElement("button");
         edit_btn_td.setAttribute("class", "btn btn-sm btn-primary me-2 edit-btn");
         // edit_btn_td.setAttribute("onclick", "open_correction_form()");
         edit_btn_td.innerText = "Edit";
         // remove btn
         let remove_btn_td = document.createElement("button");
         remove_btn_td.setAttribute("class", "btn btn-sm btn-danger ms-2 remove-tr");
         remove_btn_td.innerText = "Delete";

         action_td.append(edit_btn_td);
         action_td.append(remove_btn_td);

         first_name_td.innerText = give_input_value("web-first-name");;
         last_name_td.innerText = give_input_value("web-last-name");;
         email_td.innerText = give_input_value("web-email");;
         age_td.innerText = give_input_value("web-age");;
         department_td.innerText = give_input_value("web-department");;

         table_row.append(first_name_td);
         table_row.append(last_name_td);
         table_row.append(email_td);
         table_row.append(age_td);
         table_row.append(department_td);
         table_row.append(action_td);

         if (document.getElementById("web-table-body").innerHTML == '<tr><td colspan="6" class="text-center"><h1>No Data</h1></td></tr>') {
            document.getElementById("web-table-body").innerHTML = "";
            document.getElementById("web-table-body").append(table_row);
         }
         else {
            document.getElementById("web-table-body").append(table_row);
         }

         let web_form_input_ele = document.querySelectorAll("#web-form input");
         for (let i = 0; i <= 4; i++) {
            web_form_input_ele[i].style.borderColor = "#ced4da";
         }

         let web_form_input_feedback = document.querySelectorAll("#web-modal .feedback");
         for (let i = 0; i < web_form_input_feedback.length; i++) {
            web_form_input_feedback[i].innerText = "";
         }

         remove_btn_fun();
         web_form.reset();
         web_modal.hide();
         edit_fun()
      }
   }
   else {
      web_modal.show();
   }
}

// code for the correction 
function edit_fun() {
   let edit_btns = document.querySelectorAll(".edit-btn");
   edit_btns.forEach(function (btn_ele) {
      btn_ele.onclick = function (e) {
         corection_modal.show();
         console.log(e.target);
         selected_row = e.target.parentElement.parentElement.children;
         console.log(selected_row);

         for (let i = 0; i <= 4; i++) {
            correction_form_input_ele[i].value = selected_row[i].innerText;
            correction_form_input_ele[i].style.borderColor = "#ced4da";
         }

         for (let i = 0; i < corection_form_input_feedback.length; i++) {
            corection_form_input_feedback[i].innerText = "";
         }

         correction_form.addEventListener("submit", valid_correction_form);

         function valid_correction_form(e) {
            e.preventDefault();

            text_input("cor-first-name");
            text_input("cor-last-name");
            text_input("cor-email");
            num_input("cor-age", 2);
            text_input("cor-department");

            if (((text_input("cor-first-name")) && (text_input("cor-last-name"))) && ((text_input("cor-email")) && (text_input("cor-department")))) {
               if (num_input("cor-age", 2)) {

                  corection_modal.hide();

                  selected_row[0].innerText = give_input_value("cor-first-name");
                  selected_row[1].innerText = give_input_value("cor-last-name");
                  selected_row[2].innerText = give_input_value("cor-email");
                  selected_row[3].innerText = give_input_value("cor-age");
                  selected_row[4].innerText = give_input_value("cor-department");

                  for (let i = 0; i <= 4; i++) {
                     correction_form_input_ele[i].style.borderColor = "#ced4da";
                  }

                  for (let i = 0; i < corection_form_input_feedback.length; i++) {
                     corection_form_input_feedback[i].innerText = "";
                  }

                  correction_form.reset();
               }
            }
            else {
               corection_modal.show();
            }
         }

      }
   });
}
edit_fun();