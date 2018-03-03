
function showMessage() {
  var message = document.getElementById("message").value;
  document.getElementById("display-message").innerHTML = message;
}

function hideInput() {
  var inputElems = document.getElementsByClassName("input");
  if (inputElems.style.display === "none") {
    inputElems.style.display = "block";
  } else {
    inputElems.style.display = "none";
  }
} 
