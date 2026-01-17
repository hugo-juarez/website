import { FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export const contactLinks = [
  {
    title: 'Email',
    social: 'hsebastianjuarezp@gmail.com',
    link: 'mailto:hsebastianjuarezp@gmail.com',
    icon: <IoMdMail />,
  },
  {
    title: 'Instagram',
    social: '@hugos_jp',
    link: 'https://www.instagram.com/hugos_jp/',
    icon: <FaInstagram />,
  },
  {
    title: 'LinkedIn',
    social: 'in/hugo-juarez',
    link: 'https://www.linkedin.com/in/hugos-juarez/',
    icon: <FaLinkedin />,
  },
  {
    title: 'Discord',
    social: '#blurry_face',
    link: 'https://discord.com/users/blurry_face',
    icon: <FaDiscord />,
  },
];
