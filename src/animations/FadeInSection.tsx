import { motion, useInView } from "motion/react";
import { type ReactNode, useRef } from "react";

interface FadeInSectionProps {
  children: ReactNode | ReactNode[];
  delay?: number;
}

function FadeInSection({ children, delay }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInSection;
