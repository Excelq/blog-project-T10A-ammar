function changeText() {
  var replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "Scroll untuk melihat";
  document.getElementById("icon-up").style.display = "none";
  document.getElementById("icon-down").style.display = "block";
}
function dayMode() {
  document.querySelector("body").style.color = "black";
  document.querySelector("body").style.backgroundColor = "white";
}
function nightMode() {
  document.querySelector("body").style.color = "white";
  document.querySelector("body").style.backgroundColor = "black";
}
function changeImage(element) {
  element.setAttribute("src", "img/stoen.jpg");
}
function changeImageBack(element) {
  element.setAttribute("src", "img/Hand coding-pana.png");
}
function newText() {
  document.querySelector(".jumbotron-title").innerHTML =
    "Baca Artikel Dibawah!";
}
var item = document.querySelectorAll(".item");
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function (e) {
    alert("Item " + i + " clicked");
  });
}
var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("span");
  span.innerHTML = "x";
  myList[i].appendChild(span).setAttribute("class", "close");
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function newElement() {
  // Create new list with the inputed value
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  // Check the inputed value
  if (inputValue === "" || inputValue === "") {
    alert("Data tidak boleh kosong!");
  } else {
    document
      .getElementById("myUL")
      .appendChild(li)
      .setAttribute("class", "search-tags-item");
    li.innerHTML = inputValue;
  }
  // Clear text on the search bar
  document.getElementById("myInput").value = "";
  // Create button close
  var span = document.createElement("SPAN");
  span.innerHTML = "x";
  li.appendChild(span).setAttribute("class", "close");
  // Delete list
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");

  let i = 1;
  var repeater = function () {
    setTimeout(function () {
      [...active].forEach(function (activeSlide) {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      buttons[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i > slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();
