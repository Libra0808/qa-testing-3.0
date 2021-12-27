function dynamicproperties() {
   document.getElementById("Enable").disabled = true;
   document.getElementById("Change").style.cssText = "color:white;";
   setTimeout(function () { document.getElementById("Enable").disabled = false; }, 5000);
   setTimeout(function () { document.getElementById("Change").style.cssText = "color:red;"; }, 5000);
   document.getElementById("Visible").style.visibility = "hidden";
   setTimeout(function () { document.getElementById("Visible").style.visibility = "visible"; }, 5000);
}
dynamicproperties();