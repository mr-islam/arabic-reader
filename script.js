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

//for no scroll-bar, auto expanding height of textarea
var tx = document.getElementsByTagName('textarea');
for (var i = 0; i < tx.length; i++) {
    tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
    tx[i].addEventListener("input", OnInput, false);
}
function OnInput(e) {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}