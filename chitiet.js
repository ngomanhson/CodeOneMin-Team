//Go to Top
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//Images
function myFunction(smallImg){
  var fullImg  = document.getElementById("imgBox");
  fullImg.src = smallImg.src;
}

//TangGiam
function increaseValue() {
  var value = parseInt(document.getElementById('soluong').value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementById('soluong').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('soluong').value, 10);
  value = isNaN(value) ? 1 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('soluong').value = value;
}


//Table
function openCity(evt, suKien) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(suKien).style.display = "block";
  evt.currentTarget.className += " active";
}


