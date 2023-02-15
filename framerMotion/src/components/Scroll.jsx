import { motion, useScroll, useSpring } from "framer-motion"

function Scroll() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
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
      <div className="box"></div>
    </div>
  )
}

export default Scroll
