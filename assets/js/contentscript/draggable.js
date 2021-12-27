{
    const item = document.getElementById("drag");
    item.addEventListener("mousedown", mousedown_fun);
    function mousedown_fun(e) {
        let itemx = e.clientX;
        let itemy = e.clientY;
        window.addEventListener("mousemove", mousemove_fun);
        window.addEventListener("mouseup", mouseup_fun);
        function mousemove_fun(e) {
            let newx = itemx - e.clientX;
            let newy = itemy - e.clientY;
            const rect = item.getBoundingClientRect();
            item.style.left = rect.left - newx + "px";
            item.style.top = rect.top - newy + "px";
            itemx = e.clientX;
            itemy = e.clientY;
        }
        function mouseup_fun() {
            window.removeEventListener("mousemove", mousemove_fun);
            window.removeEventListener("mouseup", mouseup_fun);
        }
    }
}
{
    const item = document.getElementById("drag-x");
    item.addEventListener("mousedown", mousedown_fun);
    function mousedown_fun(e) {
        let itemx = e.clientX;
        let itemy = e.clientY;
        window.addEventListener("mousemove", mousemove_fun);
        window.addEventListener("mouseup", mouseup_fun);
        function mousemove_fun(e) {
            let newx = itemx - e.clientX;
            let newy = itemy - e.clientY;
            const rect = item.getBoundingClientRect();
            item.style.left = rect.left - newx + "px";
            itemx = e.clientX;
        }
        function mouseup_fun() {
            window.removeEventListener("mousemove", mousemove_fun);
            window.removeEventListener("mouseup", mouseup_fun);
        }
    }
}
{
    const item = document.getElementById("drag-y");
    item.addEventListener("mousedown", mousedown_fun);
    function mousedown_fun(e) {
        let itemx = e.clientX;
        let itemy = e.clientY;
        window.addEventListener("mousemove", mousemove_fun);
        window.addEventListener("mouseup", mouseup_fun);
        function mousemove_fun(e) {
            let newx = itemx - e.clientX;
            let newy = itemy - e.clientY;
            console.log("newy " + newy);
            const rect = item.getBoundingClientRect();
            item.style.top = rect.top - newy + "px";
            itemy = e.clientY;
        }
        function mouseup_fun() {
            window.removeEventListener("mousemove", mousemove_fun);
            window.removeEventListener("mouseup", mouseup_fun);
        }
    }
}