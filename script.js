
function showMessage() {
  var message = document.getElementById("message").value;
  display_message.innerHTML= message;
}

function hideInput() {
  var x = document.getElementById("user-input");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
