function handleScroll() {
    const image = document.querySelector(".titleimg");
    const imagePosition = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (imagePosition < windowHeight - 100) { // Adjust for earlier trigger
      image.classList.add("animate");
      window.removeEventListener("scroll", handleScroll); // Trigger only once
    }
  }
  
  window.addEventListener("scroll", handleScroll);
  
document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll(".cloudleftimg, .cloudrightimg");

function checkPosition() {
  elementsToAnimate.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top;
    const triggerPoint = 100; // Adjust this value to control the scroll trigger point

    if (elementTop <= window.innerHeight - triggerPoint) {
      element.classList.add("animate");
    }
  });
}

  // Run the function on scroll and initially
  window.addEventListener("scroll", checkPosition);
  checkPosition(); // Initial check in case elements are already in view
});
  
  
  
  
  
  