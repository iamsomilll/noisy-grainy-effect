gsap.to(".img1 , .img2", {
  scale: 1,
  scrollTrigger: {
    scroller: "body",
    trigger:"#page2",
    start: "top -55%",
    end: "top -85%",
    scrub: 3,
    ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    // markers:true
  },
});

function rollNumbers(targetId, endValue, duration = 3) {
  const target = document.getElementById(targetId);

  // Animate the number with GSAP
  gsap.to(target, {
    duration: duration,
    innerText: endValue,
    snap: { innerText: 1 }, // Ensures we get integer values
    ease: "cubic-bezier(0.25, 0.1, 0.25, 1)", // Smooth easing effect
    onUpdate: function() {
      // Optional: If you want to control the animation, you can do it here.
      target.innerText = Math.floor(target.innerText); // Ensures it's an integer
    }
  });
}
// Example usage: Roll to the year 2028
rollNumbers("year", 1898);
