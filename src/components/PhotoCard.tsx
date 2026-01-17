import { motion } from "motion/react";
import { useState } from "react";

interface Photo {
  id: number;
  src: string;
  alt: string;
  rotation: number;
}

interface PhotoCardProps {
  photo: Photo;
  isInView: boolean;
}

function PhotoCard({ photo, isInView }: PhotoCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 50, scale: 0.9, rotateZ: 0 }
        }
        transition={{
          duration: 0.5,
          delay: photo.id * 0.15,
          ease: "easeOut",
        }}
      >
        <motion.div
          initial={{ rotateZ: photo.rotation }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="aspect-square h-56 bg-light-surface dark:bg-dark-surface rounded-lg overflow-hidden will-change-transform"
        >
          <img src={photo.src} alt={photo.alt} className="object-cover aspect-square h-56" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PhotoCard;
