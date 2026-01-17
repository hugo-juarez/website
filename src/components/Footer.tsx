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
      className="flex flex-col items-center text-light-text-muted dark:text-dark-text-muted gap-4 absolute inset-x-0 bottom-4"
    >
      <div className="flex flex-row justify-center items-center gap-8 text-h4">
        <HoverButton>
          <a href="https://github.com/hugo-juarez" target="_blank">
            <FaGithub />
          </a>
        </HoverButton>
        <HoverButton>
          <a href="https://www.linkedin.com/in/hugos-juarez/" target="_blank">
            <FaLinkedin />
          </a>
        </HoverButton>
        <HoverButton>
          <a href="https://discord.com/users/blurry_face" target="_blank">
            <FaDiscord />
          </a>
        </HoverButton>
        <HoverButton>
          <a href="https://www.instagram.com/hugos_jp/" target="_blank">
            <FaInstagram />
          </a>
        </HoverButton>
        <HoverButton>
          <a href="https://open.spotify.com/user/sry30irz17b7tdwfkkj0e4yit" target="_blank">
            <FaSpotify />
          </a>
        </HoverButton>
        <HoverButton>
          <a href="https://www.youtube.com/@HugoSJuarez" target="_blank">
            <FaYoutube />
          </a>
        </HoverButton>
      </div>
      <p className="text-caption">@ 2025 Hugo Juarez. All rights reserved.</p>
    </motion.div>
  );
}

export default Footer;
