function myAddFunction()
{
    var li = document.createElement("li");
  var inputValue = document.getElementById("inputItem").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("showItem").appendChild(li);
  }
  document.getElementById("inputItem").value = "";
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "delete";
  span.appendChild(txt);
  li.appendChild(span);
  var remove = document.getElementsByClassName("delete");

  for (var i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

