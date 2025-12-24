import { motion } from "motion/react";
import { type ReactNode } from "react";
import { useTheme } from "../contexts/ThemeContext";

interface FadeInSectionProps {
  children: ReactNode | ReactNode[];
}

function HoverButton({ children }: FadeInSectionProps) {
  const { theme } = useTheme();

  return (
    <motion.button
      initial={{scale: 1, color: `${theme == "dark" ? "#9CA3AF" : "#4B5563"}`}}
      whileHover={{ scale: 1.15, color: `${theme == "dark" ? "#E5E7EB" : "#0F0F15"}` }}
      className="cursor-pointer"
    >
      {children}
    </motion.button>
  );
}

export default HoverButton;
