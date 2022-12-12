function typewriter() {
    let text = "prout";
    let i = 0;

    // Set an interval to display the next character in the text every 1000ms (1s)
    let interval = setInterval(() => {
      // Display the current character
      document.write(text[i]+ "<br>");

      // If we've reached the end of the text, clear the interval
      if (i === text.length - 1) {
        clearInterval(interval);
        showTimeElapsed()
      }

      // Move to the next character
      i++;
    }, 1000);
  }

  function showTimeElapsed() {
    let seconds = 0;

    // Set an interval to increment the seconds variable and update the display every 1000ms (1s)
    let interval = setInterval(() => {
      // Increment the seconds variable
      seconds++;

      // Update the display to show the number of seconds that have passed
      let minutes = Math.floor(seconds / 60);
      if (minutes === 1) {
        document.write(`${seconds} seconds have passed (1 minute) <br>`);
      } else if (minutes > 1) {
        document.write(`${seconds} seconds have passed (${minutes} minutes) <br>`);
      } else {
        document.write(`${seconds} seconds have passed <br>`);
      }
    }, 1000);
  }

  typewriter()



