import { useInView } from "motion/react";
import casinoImg from "../assets/casino.jpg";
import formalImg from "../assets/formal-pic.jpg";
import madisonImg from "../assets/madison-capital.jpg";
import vikingsImg from "../assets/vikings-game.jpg";
import PhotoCard from "./PhotoCard";
import { useRef } from "react";

interface Photo {
  id: number;
  src: string;
  alt: string;
  rotation: number;
}

const photos: Photo[] = [
  {
    id: 1,
    src: madisonImg,
    alt: "Photo 1",
    rotation: -10,
  },
  {
    id: 2,
    src: formalImg,
    alt: "Photo 2",
    rotation: 5,
  },
  {
    id: 3,
    src: casinoImg,
    alt: "Photo 3",
    rotation: -5,
  },
  {
    id: 4,
    src: vikingsImg,
    alt: "Photo 4",
    rotation: 10,
  },
];

function PhotoGallery() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="w-full flex justify-center">
      <div className="flex -space-x-5 w-1/2 my-12">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} isInView={isInView} />
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
