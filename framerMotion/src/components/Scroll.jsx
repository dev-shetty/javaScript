import { motion, useScroll, useSpring } from "framer-motion"
import { useTransform, useMotionValue, useVelocity } from "framer-motion"
import { useEffect } from "react"

function orange(saturation) {
  return `hsl(39, ${saturation}%, 50%)`
}

function Scroll() {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  const x = useMotionValue(0)
  const x2 = useMotionValue(0)

  const x2Smooth = useSpring(x2, { damping: 50, stiffness: 400 })
  const x2Velocity = useVelocity(x2Smooth)

  useEffect(() => {
    return x2Velocity.onChange((latestVelocity) => {
      console.log("Velocity: ", latestVelocity)
    })
  }, [])
  // const x2 = useMotionValue(10)
  // const y2 = useTransform(x, (value) => Math.cos(value / 10) * 50)
  const input = [-600, 0, 600]
  const output = [0, 1, 0]
  const opacity = useTransform(x, input, output)

  const { scrollYProgress } = useScroll()
  const { scrollY } = useScroll()
  const rotate = useTransform(scrollY, [0, 100], [0, 360], { clamp: false })
  const scaleX = useSpring(scrollYProgress)

  const scale = useTransform(x2Velocity, [-3000, 0, 3000], [2, 1, 2], {
    clamp: false,
  })
  const backgroundColor = useTransform(
    x2Velocity,
    [-2000, 0, 2000],
    [orange(0), orange(100), orange(0)]
  )
  return (
    <div className="min-h-[400vh] flex items-center justify-center">
      <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-3 bg-orange-600"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <motion.div
        className="progress-bar fixed top-3 left-0 right-0 h-3 bg-blue-600"
        style={{ scaleX }}
      ></motion.div>
      <div className="flex flex-col gap-8">
        <motion.div
          className="box"
          drag="x"
          dragConstraints={{ left: -500, right: 500 }}
          style={{ x, opacity }}
        ></motion.div>
        <motion.div
          className="box"
          style={{ rotate, backgroundColor: "orange" }}
        ></motion.div>
        {/* <motion.div style={{ x: x2, y: y2 }} className="box"></motion.div> */}
        <motion.div
          className="box"
          drag="x"
          dragElastic={1}
          dragConstraints={{ left: -200, right: 200 }}
          style={{ scale, backgroundColor, x: x2 }}
        ></motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          className="box"
          viewport={{ margin: "-100px" }}
          // {once: true} Says that the animation only happens in first scroll
          // {margin: "-100px"} that the animation will occur after 100px is scrolled in viewport (default: 0)
        ></motion.div>
      </div>
    </div>
  )
}

export default Scroll
