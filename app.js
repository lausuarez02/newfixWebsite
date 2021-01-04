
 const callback = function(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function(target) {
  observer.observe(target);
});


var hamburger = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav-links");
var links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener("click", function(){
    navLinks.classList.toggle("open");
    links.forEach(function (link) {
      link.classList.toggle("fade");
    });
  });


  var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);


 









