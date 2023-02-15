import { motion } from "framer-motion"

function Normal() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-2">
        <motion.div
          className="box"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileTap={{ borderRadius: "1rem" }}
          whileHover={{ scale: 1.2, backgroundColor: "navy" }}
          whileInView={{ backgroundColor: "orange" }}
          drag="x"
          // If there is no dragConstraints then it will drag a lot
          dragConstraints={{ left: -100, right: 100 }}
        ></motion.div>
        <motion.div
          className="box"
          animate={{ x: [-100, 100, 0] }}
        ></motion.div>
        <motion.div
          className="box"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 100, 100, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            backgroundColor: "green",
          }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        ></motion.div>
      </div>
    </div>
  )
}

export default Normal
