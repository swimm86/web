function formCheck() {
  event.preventDefault();
  var x = document.getElementById("form");
  var text = "";
  for (var i = 0; i < x.length; i++) {
    x.elements[i].className = "";
  }
  if (!x.elements[5].value.endsWith(".jpg")) {
    text += "Image must be an *.jpg" + "<br>";
    x.elements[5].className = "error";
  }
  if (x.elements[5].files[0].size > 1038336) {
    text += "Photo size must be less than 1mb" + "<br>";
  }
  document.getElementById("errorBlock").innerHTML = text;
}