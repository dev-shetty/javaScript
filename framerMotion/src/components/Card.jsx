import { motion, useMotionValue, useScroll, useTransform } from "framer-motion"

function Card({ emote }) {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 10000], [0, 2])
  const scrollVariant = {
    hidden: { opacity: 0, x: "-25%" },
    show: { opacity: 1, x: 0 },
  }
  return (
    <>
      <div className="scroll-progress-wrapper w-10 aspect-square fixed top-4 right-4 bg-transparent border-2 rounded-full">
        <motion.div
          style={{ scale }}
          className="scroll-progress w-10 aspect-square fixed z-10 top-4 right-4 bg-blue-500 md:bg-white rounded-full"
        ></motion.div>
      </div>
      <motion.div
        className="w-[90%] md:w-2/4 lg:w-1/4 bg-white aspect-square flex justify-center rounded-lg"
        variants={scrollVariant}
        initial="hidden"
        whileInView="show"
        transition={{ ease: "easeInOut" }}
      >
        <div className="card flex items-center">
          <p className="text-[10rem]">{emote}</p>
        </div>
      </motion.div>
    </>
  )
}

export default Card
