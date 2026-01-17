import FadeInSection from '../animations/FadeInSection';
import { contactLinks } from '../data/contact';
import { motion } from 'motion/react';

function Contact() {
  return (
    <section>
      <h2 className="text-h2 mt-8 mb-4 font-semibold">Contact</h2>
      <p>Let's connect</p>
      <FadeInSection delay={0.5}>
        <div className="w-full flex justify-center items-center">
          <div className="w-2/3">
            <p className="mt-8 text-light-text-muted dark:text-dark-text-muted">
              Contact me through my socials:
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8">
              {contactLinks.map((link) => (
                <motion.a
                key={link.title}
                  className="group flex flex-row items-center w-full py-2 px-4 gap-4 border rounded-lg border-light-border dark:border-dark-border"
                  href={link.link}
                  target="_blank"
                  variants={{
                    initial: { scale: 1, y: 0 },
                    hover: {
                      scale: 1.02,
                      y: -2,
                      transition: {
                        duration: 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    },
                  }}
                  whileHover="hover"
                >
                  <motion.div
                    variants={{
                      hover: {
                        scale: 1.1,
                        rotate: 5,
                        transition: {
                          duration: 0.2,
                          ease: [0.4, 0, 0.2, 1],
                        },
                      },
                    }}
                    className='text-light-text-muted dark:text-dark-text-muted group-hover:text-light-text dark:group-hover:text-dark-text'
                  >
                    {link.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">{link.title}</h4>
                    <p className="text-sm font-light text-light-text-muted dark:text-dark-text-muted">
                      {link.social}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Contact;
