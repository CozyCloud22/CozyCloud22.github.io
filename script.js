window.addEventListener('load', function() {
  var loadingBar = document.querySelector('.loading-bar');

  // Get the duration of the loading bar animation
  var animationDuration = parseFloat(getComputedStyle(loadingBar).animationDuration) * 1000;

  // Wait for the animation to finish and then load the homepage
  setTimeout(function() {
    window.location.href = 'homepage.html';
  }, animationDuration);
});
