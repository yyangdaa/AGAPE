  const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')
  
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  
  }
  
  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')
  
    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }
  
  window.addEventListener('keydown', handleFirstTab)
  
  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;
  
  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
      ? "scale(1)"
      : "scale(0)";
  };
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });

  window.addEventListener("DOMContentLoaded", function(){
    var dynamicText = document.getElementById("dynamic-text");
    var text = ['I am a software developer', 'I am a student', 'I am an entrepreneur'];
    var textIndex = 0;
  
    function updateText() {
      dynamicText.classList.remove('scrolling'); // Reset animation
      dynamicText.innerText = text[textIndex];
      dynamicText.classList.add('scrolling'); // Start animation
      textIndex = (textIndex + 1) % text.length; // Move to the next index, loop back to 0 at the end
    }
  
    setInterval(updateText, 2000);
    updateText(); // Initial text setup
  });
  