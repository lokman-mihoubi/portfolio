// Get the canvas element and its context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Set the canvas dimensions to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define the raindrop class
function Raindrop() {
  this.x = Math.random() * canvas.width;  // random x position
  this.y = 0;                            // start at the top of the screen
  this.size = Math.random() * 5 + 5;     // random size between 5 and 10
  this.speed = this.size / 5;            // speed proportional to size
}

// Define the raindrop array
var raindrops = [];

// Add a raindrop to the array every 100 milliseconds
setInterval(function() {
  raindrops.push(new Raindrop());
}, 100);

// Define the animation loop function
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw each raindrop
  for (var i = 0; i < raindrops.length; i++) {
    // Move the raindrop down
    raindrops[i].y += raindrops[i].speed;

    // Draw the raindrop as a blue circle
    ctx.fillStyle = '#00a8ff';
    ctx.beginPath();
    ctx.arc(raindrops[i].x, raindrops[i].y, raindrops[i].size, 0, Math.PI * 2);
    ctx.fill();

    // Remove the raindrop if it goes off the bottom of the screen
    if (raindrops[i].y > canvas.height) {
      raindrops.splice(i, 1);
    }
  }

  // Call the animation loop again
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
