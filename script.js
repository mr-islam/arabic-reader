
function showMessage() {
  var message = document.getElementById("message").value;
  document.getElementById("display-message").innerHTML = message;
}

function hideInput() {
  var x = document.getElementsByClassName("input");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
