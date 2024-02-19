"use client";
import React from "react";
import Link from "next/link";
import { mail } from "../../public/mail.png";
import { useScrollPosition } from "./useScrollPosition";
import { motion } from "framer-motion";

const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={classNames(
        scrollPosition > 200 ? "bg-black" : "bg-transparent",
        "flex w-full h-16 items-end  z-10 sticky top-0"
      )}
    >
      <div className="flex w-1/4 justify-center hover:uppercase">
        <Link href="/">manpreet singh</Link>
      </div>
      <div className="flex w-2/4 justify-center">
        <motion.div className="flex w-2/6 justify-center hover:uppercase ">
          <Link
            className="w-1/5 flex justify-center"
            href="https://www.linkedin.com/in/manpreet-singh-58044411a/"
          >
            linkedin
          </Link>
        </motion.div>
        <motion.div className="flex w-2/6 justify-center hover:uppercase ">
          <Link className="w-1/5 flex justify-center " href="/projects">
            projects
          </Link>
        </motion.div>
        <motion.div className="flex w-2/6 justify-center hover:uppercase ">
          <Link className="w-1/5 flex justify-center " href="/about">
            about
          </Link>
        </motion.div>
      </div>
      <div className="flex w-1/4 justify-center">
        <Link
          className=" flex justify-center"
          href="mailto:manpreet049617@gmail.com"
        >
          manpreet049617@gmail.com
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
