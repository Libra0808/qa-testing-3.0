document.querySelectorAll('.tooltip-demo').forEach(function (tooltip) {
   new bootstrap.Tooltip(tooltip, {
       selector: '[data-bs-toggle="tooltip"]'
   })
})