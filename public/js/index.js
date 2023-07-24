var i = 0;
var noiDung =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";
var tocDo = 50;

function hieuUngDanhChu() {
  if (i < noiDung.length) {
    document.getElementById("screen_content_header").innerHTML += noiDung.charAt(i);
    i++;
    setTimeout(hieuUngDanhChu, tocDo);
  }
}

hieuUngDanhChu();

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    var elementVisible = 250;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);