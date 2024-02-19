"use client";
import SelfImage from "../../public/SelfImage.png";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex h-screen w-full justify-center items-center"
    >
      <motion.div
        animate={{ x: -50 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="flex font-Montserrat w-96 rounded-full  h-96 justify-center items-center"
      >
        <div className="flex w-3/4 text-xl ">
          From back-end whispers to front-end fireworks, I've got the full-stack
          symphony covered.
        </div>
      </motion.div>
      <div className="flex font-Montserrat w-64 rounded-full border-white border-4 h-64 justify-center items-center">
        <motion.div
          className="flex"
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
        >
          <Image className="rounded-full" src={SelfImage} alt="self picture" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
