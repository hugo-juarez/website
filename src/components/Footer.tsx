import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";
import HoverButton from "../animations/HoverButton";

function Footer() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-col items-center text-light-text-muted dark:text-dark-text-muted gap-4 mt-16 mb-2"
    >
      <div className="flex flex-row justify-center items-center gap-8 text-h4">
        <HoverButton>
          <FaGithub />
        </HoverButton>
        <HoverButton>
          <FaLinkedin />
        </HoverButton>
        <HoverButton>
          <FaDiscord />
        </HoverButton>
        <HoverButton>
          <FaInstagram />
        </HoverButton>
        <HoverButton>
          <FaSpotify />
        </HoverButton>
        <HoverButton>
          <FaYoutube />
        </HoverButton>
      </div>
      <p className="text-caption">@ 2025 Hugo Juarez. All rights reserved.</p>
    </motion.div>
  );
}

export default Footer;
