import gsap from "gsap"

export const scrollAnimation = (position, target, onUpdate) => {
  const timeline = gsap.timeline()

  timeline
    .to(position, {
      x: -3.38, // got from webGL viewer
      y: -10.74,
      z: -5.93,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom", // when top of sound-section intersects bottom of viewport
        end: "top top", // when top of sound-section intersects top of viewport
        scrub: 2, // for transition
        immediateRender: false, // not render till it is triggered
      },
      onUpdate,
    })
    .to(target, {
      x: 1.52, // got from webGL viewer
      y: 0.77,
      z: -1.08,
      scrollTrigger: {
        trigger: ".sound-section",
        start: "top bottom", // when top of sound-section intersects bottom of viewport
        end: "top top", // when top of sound-section intersects top of viewport
        scrub: 2, // for transition
        immediateRender: false, // not render till it is triggered
      },
    })
}
