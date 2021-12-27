let tag_input = document.getElementById("tag-input");
let tags = document.getElementById("tags")
tag_input.addEventListener("keyup", function (e) {
   if (e.key === "Enter") {
      let input_value = tag_input.value;
      tag_input.value = "";
      tag_input.removeAttribute("placeholder");
      const tag_div = document.createElement("div");
      tag_div.setAttribute("class", "tag");
      const tag_label_div = document.createElement("div");
      tag_label_div.setAttribute("class", "tag-label");
      tag_label_div.innerText = input_value;
      const close_tag_div = document.createElement("div");
      close_tag_div.setAttribute("class", "close-tag");
      close_tag_div.innerText = "×";
      tag_div.append(tag_label_div);
      tag_div.append(close_tag_div);
      tags.prepend(tag_div);
      let close = document.querySelectorAll(".tag-container .tag .close-tag");
      close.forEach(ele => {
         ele.addEventListener("click", remove_fun);
         function remove_fun(e) {
            let tag = e.target.parentElement;
            tag.remove();
         }
      });
   }
});
document.getElementById("tags-output").addEventListener("click", function () {
   let tag_label = document.querySelectorAll(".tag-container .tag-label");
   for (let i = 0; i <= tag_label.length; i++) {
      console.log(tag_label[i].innerText);
      let tag = document.createElement("div");
      tag.innerText = tag_label[i].innerText;
      document.getElementById("all-tags-output").append(tag);
   }
})