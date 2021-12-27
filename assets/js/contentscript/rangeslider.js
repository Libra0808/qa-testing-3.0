let range_slider = document.getElementById('range-slider');
let range_value = document.getElementById('range-value');
range_value.innerHTML = range_slider.value;
range_slider.oninput = function () {
   range_value.innerHTML = this.value;
}