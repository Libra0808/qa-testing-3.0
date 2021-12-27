// let clickbtn = document.getElementsByClassName("click-dynamic-id-btn");
// clickbtn[0].addEventListener("click", function () {
//    let clicknum = Math.floor(Math.random() * 545452);
//    clickbtn[0].setAttribute("id", `its'id-${clicknum}`);
//    let clickidvalue = clickbtn[0].getAttribute("id");
//    document.getElementsByClassName("click-dynamic-id-btn-out")[0].innerText = clickidvalue;
// });

// let secbtn = document.getElementsByClassName("sec-dynamic-id-btn");
// setInterval(function () {
//    let secknum = Math.floor(Math.random() * 545452);
//    secbtn[0].setAttribute("id", `its'id-${secknum}`);
//    let secidvalue = secbtn[0].getAttribute("id");
//    document.getElementsByClassName("sec-dynamic-id-btn-out")[0].innerText = secidvalue;
// }, 5000);

 // change id on load

 let id_content = document.getElementById("dynamicid");

 id_content.onmessage  = function () {
    {
       let loadbtn = document.getElementsByClassName("load-dynamic-id-btn");
       let loadnum = Math.floor(Math.random() * 101000);
       loadbtn[0].setAttribute("id", `its'id-${loadnum}`);
       let loadidvalue = loadbtn[0].getAttribute("id");
       document.getElementsByClassName("load-dynamic-id-btn-out")[0].innerText = loadidvalue;
    }
    {
       let clickbtn = document.getElementsByClassName("click-dynamic-id-btn");
       let clicknum = Math.floor(Math.random() * 101000);
       clickbtn[0].setAttribute("id", `its'id-${clicknum}`);
       let clickidvalue = clickbtn[0].getAttribute("id");
       document.getElementsByClassName("click-dynamic-id-btn-out")[0].innerText = clickidvalue;
    }
    {
       let seckbtn = document.getElementsByClassName("sec-dynamic-id-btn");
       let secknum = Math.floor(Math.random() * 101000);
       seckbtn[0].setAttribute("id", `its'id-${secknum}`);
       let secidvalue = seckbtn[0].getAttribute("id");
       document.getElementsByClassName("sec-dynamic-id-btn-out")[0].innerText = secidvalue;
    }
 }

 // change id on click;

 let clickbtn = document.getElementsByClassName("click-dynamic-id-btn");
 clickbtn[0].addEventListener("click", function () {
    let clicknum = Math.floor(Math.random() * 545452);
    clickbtn[0].setAttribute("id", `its'id-${clicknum}`);
    let clickidvalue = clickbtn[0].getAttribute("id");
    document.getElementsByClassName("click-dynamic-id-btn-out")[0].innerText = clickidvalue;
 });

 // change id after 5 seconds

 let secbtn = document.getElementsByClassName("sec-dynamic-id-btn");
 setInterval(function () {
    let secknum = Math.floor(Math.random() * 545452);
    secbtn[0].setAttribute("id", `its'id-${secknum}`);
    let secidvalue = secbtn[0].getAttribute("id");
    document.getElementsByClassName("sec-dynamic-id-btn-out")[0].innerText = secidvalue;
 }, 5000);