$(document).ready(function () {
    // Function to check if an element is in the viewport
    function isInViewport(elem) {
      const bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to fade in elements when they enter the viewport
    function fadeInOnScroll() {
      const sections = $("section");
  
      sections.each(function () {
        if (isInViewport(this)) {
          gsap.to(this, { duration: 1, opacity: 1, delay: 0.25 });
        }
      });
    }
  
    // Set the initial opacity of sections to 0
    $("section").css("opacity", 0);
  
    // Call fadeInOnScroll once to show the first section
    fadeInOnScroll();
  
    // Fade in sections when scrolling
    $(window).on("scroll", fadeInOnScroll);
  });
  