window.addEventListener('load', function() {
  var loadingBar = document.querySelector('.loading-bar');

  loadingBar.addEventListener('animationiteration', function() {
    // Trigger the page load when the animation iteration completes
    window.location.href = 'index.html';
  });
});

function stopLoadingBar() {
  clearTimeout(redirectTimeout);
  clearInterval(stopTimeout);
}
