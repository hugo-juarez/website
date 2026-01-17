import { projects } from '../data/curriculum';
import {motion} from 'motion/react';

function Projects() {
  return (
    <div className="flex flex-row justify-center w-full py-8">
      <div className="flex flex-row w-4xl">
        <h2 className="w-1/4 my-8 text-h3 font-semibold">Projects</h2>
        <ul className="w-3/4 relative text-sm">
          {projects.map((project) => (
            <motion.a className="group flex flex-row my-8 ml-4 justify-between" whileHover={{scale: 1.05}} style={{transformOrigin: 'left'}} href={project.link} target='_blank'>
              <div className="w-2/3">
                <h4 className="font-semibold group-hover:text-blue-400">{project.title}</h4>
                <p className="text-light-text-muted dark:text-dark-text-muted mt-1">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 w-1/5">
                {project.tech.map((tech) => (
                  <span
                    key={tech.name}
                    className={`text-xs px-2 py-1 rounded-full text-white flex items-center justify-center ${tech.color} h-7`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
