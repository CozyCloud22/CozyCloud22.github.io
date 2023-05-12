window.addEventListener('load', function() {
  var loadingBar = document.querySelector('.loading-bar');

  loadingBar.addEventListener('animationiteration', function() {
    // Stop the loading bar animation
    loadingBar.style.animationPlayState = 'paused';

    // Trigger the page load when the animation iteration completes
    window.location.href = 'index.html';
  });
});

function stopLoadingBar() {
  var loadingBar = document.querySelector('.loading-bar');
  loadingBar.style.animationPlayState = 'paused';
}

var stopTimeout = setTimeout(stopLoadingBar, 2000);
