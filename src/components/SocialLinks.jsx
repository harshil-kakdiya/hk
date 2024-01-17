import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/",
      style: "rounded-tr-md bg-red",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/harshil-kakdiya",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={20} />
        </>
      ),
      href: "mailto:harshilpatel0334@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={20} />
        </>
      ),
      href: resume,
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Twitter <FaTwitter size={20} />
        </>
      ),
      href: "https://twitter.com/aman_aura",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <motion.li variants={slideIn("left", "tween", 0.5, 1)}
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-5 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200 bg-gray-600" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;