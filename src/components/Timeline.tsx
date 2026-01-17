import { experiences } from '../data/curriculum';
import { motion } from 'motion/react';

interface TimelineProps {
  hoverSection: string;
  setHoverSection: (section: string) => void;
}

function Timeline({ hoverSection, setHoverSection }: TimelineProps) {
  let opacity = 100;

  const handleMouseEnter = () => {
    setHoverSection('Timeline');
  };

  const handleMouseLeave = () => {
    setHoverSection('');
  };

  if (hoverSection && hoverSection != 'Timeline') {
    opacity = 50;
  }

  return (
    <div
      className={`flex flex-row justify-center w-full py-8 opacity-${opacity}`}
    >
      <motion.div
        className="flex flex-col md:flex-row w-3xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="w-full md:w-1/4 md:my-8 text-h3 font-semibold">Timeline</h2>
        <ul className="w-full md:w-3/4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-light-surface dark:bg-dark-border" />
          {experiences.map((experience) => (
            <motion.li
              key={experience.title}
              className="text-body-sm my-8 relative ml-4 cursor-default"
              whileHover={{ scale: 1.05 }}
              style={{ transformOrigin: 'left' }}
            >
              <div
                className={`absolute aspect-square -left-5 rounded-2xl top-1 w-2 y-2 ${experience.dotColot} ring-4 ring-light-surface dark:ring-dark-surface`}
              />
              <div className="flex flex-row justify-between">
                <h4 className="">{experience.company}</h4>
                <p className="text-light-text-muted dark:text-dark-text-muted">
                  {experience.date}
                </p>
              </div>
              <p className="italic text-light-text-muted dark:text-dark-text-muted my-1">
                {experience.title}
              </p>
              <ul className="list-disc list-inside">
                <li className="text-light-text-muted dark:text-dark-text-muted">
                  {experience.description}
                </li>
              </ul>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Timeline;
