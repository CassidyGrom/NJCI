//Get the button
var mybutton = document.getElementById("myBtn");
var mobileBarEl = document.getElementById("subscriptionBar");
mobileBarEl.style.color = "purple";

var x = window.matchMedia("(max-width:1200px)");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
    // mobileBarEl.style.display = "block";
  } else {
    mybutton.style.display = "none";
    // mobileBarEl.style.display = "none";
  }
}

function appearFunction(x) {
  if (x.matches) {
    mobileBarEl.style.display = "block";
  } else {
    mobileBarEl.style.display = "none";
  }
}

appearFunction(x);
x.addListener(appearFunction);
