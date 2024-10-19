function loadingAnimation(params) {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.29,
    duration: 0.9,
    delay: 0.1,
  });

  tl.from("#line1-part1, .line h2", {
    opacity: 0,
    onStart: () => {
      var Increment = document.querySelector("#line1-part1 h5");

      var count = 0;
      setInterval(() => {
        if (count < 100) {
          Increment.innerHTML = count++;
        } else {
          Increment.innerHTML = count;
        }
      }, 24);
    },
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.7,
    ease: "expo.in",
    delay: 1.6,
    y: -800,
  });

  tl.from("nav", {
    opacity: 0,
  });

  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 140,
    stagger: 0.2,
  });
}
loadingAnimation();


function cursorAnimation() {
  Shery.makeMagnet("#nav-left #left, #nav-part2 h4", {});
}
cursorAnimation();

document.addEventListener("mousemove", function (dets) {
  gsap.to("#crsr", {
    left: dets.x,
    top: dets.y,
    duration: 0.5,
  });
});
