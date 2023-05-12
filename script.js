window.addEventListener('load', stopLoadingBar);

function stopLoadingBar() {
  var loadingBar = document.querySelector('.loading-bar');

  loadingBar.addEventListener('animationiteration', function() {
    // Stop the loading bar animation
    loadingBar.style.animationPlayState = 'paused';

    // Fade out the loading bar
    loadingBar.style.opacity = '0';

    // Remove the loading bar from the DOM after it fades out
    setTimeout(function() {
      
      loadingBar.parentNode.removeChild(loadingBar);
    }, 500000);
    //^^adjust the duration (in milliseconds) based on your transition time
  });

  setTimeout(function() {
    loadingBar.parentNode.removeChild(loadingBar);
  }, 500000);
}

//var stopTimeout = setTimeout(stopLoadingBar, 2000);

window.addEventListener('load', function() {
  var background = document.querySelector('.background');
  
  // Add the "show" class after a delay to trigger the opacity transition
  setTimeout(function() {
    background.classList.add('show');
  }, 1000); // Adjust the delay (in milliseconds) based on your needs
});
