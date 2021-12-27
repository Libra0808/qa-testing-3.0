let tb_form = document.getElementById("tb_form");
tb_form.addEventListener("submit",text_box_form_validation);

function text_box_form_validation(e){
   e.preventDefault();
   text_input("tb_name","tb_name_out","Name:- ");
   text_input("tb_email","tb_email_out","Email Address:- ");
   text_input("tb_current_add","tb_current_add_out","Current Address:- ");
   text_input("tb_permanent_add","tb_permanent_add_out","Permanent Address:- ");
   if((document.getElementById("tb_name_out").innerText !== "" && document.getElementById("tb_email_out").innerText !== "") && (document.getElementById("tb_current_add_out").innerText !== "" && document.getElementById("tb_permanent_add_out").innerText !== "")){
      document.getElementById("tb_ouput").style.display = "block";
      tb_form.reset();
      document.getElementById("tb_name").style.borderColor = "#ced4da";
      document.getElementById("tb_email").style.borderColor = "#ced4da";
      document.getElementById("tb_current_add").style.borderColor = "#ced4da";
      document.getElementById("tb_permanent_add").style.borderColor = "#ced4da";
   }
   else{
      document.getElementById("tb_ouput").style.display = "none";
   }

}

function text_input(id,id2,text) {
   let ele = document.getElementById(id);
   if (ele.value.trim() == "") {
      ele.style.borderColor = "red";
   }
   else {
      ele.style.borderColor = "green";
      document.getElementById(id2).innerText = text + ele.value;
   }
}