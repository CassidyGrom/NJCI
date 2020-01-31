//Get the button
var mybutton = document.getElementById("sticky");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// $(document).ready(function(){

// 	var elm_class = '.gotop'; // Adjust this accordingly.

// 	//Check to see if the window is top if not then display button
// 	$(window).scroll(function(){
// 		if ($(this).scrollTop() > 300) { // 300px from top
// 			$(elm_class).fadeIn();
// 		} else {
// 			$(elm_class).fadeOut();
// 		}
// 	});
