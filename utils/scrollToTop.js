window.addEventListener("scroll", function() {
  var scrollToTopButton = document.getElementById("scrollToTop");
  var halfViewportHeight = window.innerHeight / 2;
  
  if (window.scrollY > halfViewportHeight) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

document.getElementById("scrollToTop").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
