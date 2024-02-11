document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector('.header-area');

  // Add a scroll event listener to show/hide the header based on the scroll position
  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      header.classList.remove('header-visible');
    } else {
      header.classList.add('header-visible');
    }
  });

  // Add a hover event listener to show the header on hover
  header.addEventListener('mouseenter', function () {
    header.classList.add('header-visible');
  });

  // Add a mouse leave event listener to hide the header when not hovered
  header.addEventListener('mouseleave', function () {
    if (window.scrollY === 0) {
      header.classList.remove('header-visible');
    }
  });
});


