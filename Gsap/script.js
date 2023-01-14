// gsap.from(".header", {
//   duration: 1,
//   y: "-100%",
//   ease: "bounce",
// })

// gsap.from(".link", {
//   duration: 1,
//   opacity: 0,
//   delay: 1,
//   stagger: 0.5,
// })

// gsap.from(".right", {
//   duration: 1,
//   x: "-100vw",
//   delay: 1,
//   ease: "power2.in",
// })

// gsap.from(".left", {
//   duration: 1,
//   x: "-100%",
//   delay: 1.5,
// })

// gsap.to(".footer", {
//   duration: 1,
//   y: 0,
//   ease: "elastic",
//   delay: 2.5,
// })

// gsap.fromTo(
//   ".button",
//   {
//     opacity: 0,
//     scale: 0,
//     rotation: 720,
//   },
//   {
//     duration: 1,
//     opacity: 1,
//     scale: 1,
//     rotation: 0,
//     delay: 1,
//   }
// )

// const obj = { x: 0 }

// gsap.to(obj, { duration: 2, x: 100, onUpdate: () => console.log(obj.x) })

const timeline = gsap.timeline({ defaults: { duration: 1 } })
timeline
  .from(".header", {
    y: "-100%",
    ease: "bounce",
  })
  .from(".link", {
    opacity: 0,
    stagger: 0.5,
  })
  .from(
    ".right",
    {
      x: "-100vw",
      ease: "power2.in",
    },
    1 // to animate the sidebars while links appear
  )
  .from(
    ".left",
    {
      x: "-100%",
    },
    "<0.5" // < means delay same as previous and 0.5 means after 0.5 seconds of previous
  )
  .to(".footer", {
    y: 0,
    ease: "elastic",
  })
  .fromTo(
    ".button",
    {
      opacity: 0,
      scale: 0,
      rotation: 720,
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
    }
  )

// Reverse a timeline
const button = document.querySelector(".button")
button.addEventListener("click", () => {
  timeline.timeScale(3)
  timeline.reverse()
})
