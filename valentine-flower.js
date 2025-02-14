
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Get the audio element
  const audio = document.getElementById("background-audio");

  // Function to attempt playback
  const playAudio = () => {
    audio.play().catch((error) => {
      // If autoplay is blocked, wait for user interaction
      console.log("Autoplay was blocked. Waiting for user interaction...");
      document.body.addEventListener("click", () => {
        audio.play(); // Play audio on user interaction
      }, { once: true }); // Only listen for the first click
    });
  };

  // Attempt to play the audio as soon as the page loads
  playAudio();
};