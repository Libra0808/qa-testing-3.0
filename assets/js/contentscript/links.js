let link_result = document.getElementById('link-result');
let created = document.getElementById("created");
let content = document.getElementById("content");
let moved = document.getElementById("moved");
let request = document.getElementById("request");
let unauthorized = document.getElementById("unauthorized");
let forbidden = document.getElementById("forbidden");
let found = document.getElementById("found");

created.addEventListener("click", function(){
   link_result.innerHTML = "Link has responded with staus <b>201</b> and status text <b>Created</b>";
})

content.addEventListener("click", function(){
   link_result.innerHTML = "Link has responded with staus <b>204</b> and status text <b>No Content</b>";
})

moved.addEventListener("click", function(){
   link_result.innerHTML = "Link has responded with staus <b>301</b> and status text <b>Moved Permanently</b>";
})

request.addEventListener("click", function(){
   link_result.innerHTML = "Link has responded with staus <b>400</b> and status text <b>Bad Request</b>";
})

unauthorized.addEventListener("click", function(){
   link_result.innerHTML = "Link has responded with staus <b>401</b> and status text <b>Unauthorized</b>";
})

forbidden.addEventListener("click", function(){
   link_result.innerHTML = "Link has responded with staus <b>403</b> and status text <b>Forbidden</b>";
})

found.addEventListener("click", function(){
   link_result.innerHTML = "Link has responded with staus <b>404</b> and status text <b>Not Found</b>";
})