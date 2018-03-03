function showMessage() {
  var message = document.getElementById("message").value;
  document.getElementById("display-message").innerHTML = message;
}
function hideInput() {
  var button = document.getElementById('button');
  button.style.display='none';
  var message = document.getElementById('message');
  message.style.display='none';
} 
