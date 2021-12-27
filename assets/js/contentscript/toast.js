document.querySelectorAll('.toast').forEach(function (toastNode) {
   var toast = new bootstrap.Toast(toastNode, {autohide: false });
   toast.show()
})