"use client";
import arrowImage from "../../public/arrowIcon.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="flex justify-center h-screen scroll-smooth"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <div className="flex items-center w-3/5 h-screen ">
        <div>
          <div className="flex font-Montserrat text-5xl ">
            I'm Manpreet Singh
          </div>
          <div className="flex font-Montserrat text-6xl pt-4 ">
            Lifelong learner | Building better code.
          </div>
        </div>
        <div className="flex">
          <Image src={arrowImage} width={60} height={60} alt="Down Arrow" />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
