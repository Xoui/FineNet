document.addEventListener("DOMContentLoaded", function() {
    // Find the link element
    var link = document.querySelector('.game-frame');
  
    // Listen for click event on the link
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Get the href attribute of the link
      var href = this.getAttribute('href');
  
      // Create the iframe element
      var iframe = document.createElement('iframe');
      iframe.setAttribute('src', href);
  
      // Add the iframe to the container
      var container = document.getElementById('game-frame-container');
      container.innerHTML = ''; // Clear previous content
      container.appendChild(iframe);
  
      // Display the container
      container.style.display = 'block';
    });
  
    // Hide the iframe container when clicking outside of it
    document.addEventListener('click', function(event) {
      var container = document.getElementById('game-frame-container');
      if (!container.contains(event.target)) {
        container.style.display = 'none';
      }
    });
  });
 