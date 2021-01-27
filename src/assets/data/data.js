import {
  FaPencilRuler,
  FaCode,
  FaRegLightbulb,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJs,
  FaSass,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';

import dicoding from '../img/dicoding.png';
import udemy from '../img/udemy.png';
import htmlCss from '../img/html-css.png';
import js from '../img/js.png';
import react from '../img/react.png';
import sass from '../img/sass.png';
import nodejs from '../img/node-js.png';
import pathWebDev from '../img/path-webDev.png';

export const headerIcons = [
  {
    id: 1,
    name: FaInstagram,
    link: 'https://www.instagram.com/fajariadi_/',
  },
  {
    id: 2,
    name: FaLinkedinIn,
    link: 'https://www.linkedin.com/in/fajariadi',
  },
  {
    id: 3,
    name: FaGithub,
    link: 'https://github.com/fajariadi-id',
  },
];

export const cards = [
  {
    id: 1,
    icon: FaPencilRuler,
    title: '- Design',
    text:
      'Design bukan hanya sekedar tampilan yang nyaman untuk dilihat. Design juga mencakup fungsionalitas serta pengalaman pengguna secara keseluruhan. Saya berusaha untuk membangun UI/UX yang dapat dinikmati orang disemua perangkat digital.',
  },
  {
    id: 2,
    icon: FaCode,
    title: '- Code',
    text:
      'Dengan dasar ilmu komputer yang saya pelajari, saya sangat menyukai design dan web development. Saat saya tumbuh sebagai seorang developer, saya berharap dapat menulis clean code, penulisan kode yang mudah dibaca dan dipahami oleh developer lain dan dapat digunakan untuk membangun software yang baik.',
  },
  {
    id: 3,
    icon: FaRegLightbulb,
    title: '- Involvement',
    text:
      'Saat ini saya aktif mengikuti webinar dan kursus online untuk mempertajam serta memperkaya pengetahuan saya mengenai web development. Sebelumnya, ketika menjadi mahasiswa saya aktif sebagai asisten laboratorium elektronika dasar sebagai tenaga pengajar.',
  },
];

export const skills = [
  {
    id: 1,
    name: FaHtml5,
  },
  {
    id: 2,
    name: FaCss3,
  },
  {
    id: 3,
    name: FaBootstrap,
  },
  {
    id: 4,
    name: FaSass,
  },
  {
    id: 5,
    name: FaJs,
  },
  {
    id: 6,
    name: FaReact,
  },
  {
    id: 7,
    name: FaNodeJs,
  },
];

export const certificates = [
  {
    id: 1,
    img: dicoding,
    title: 'Belajar Dasar Pemrograman Web',
    platform: 'Dicoding',
    credential: 'https://www.dicoding.com/certificates/L4PQMQWD7ZO1',
  },
  {
    id: 2,
    img: udemy,
    title: '50 Projects in 50 Days - HTML, CSS & JavaScript',
    platform: 'Udemy',
    credential: 'http://ude.my/UC-b9073f05-ccfe-4f17-b4c1-d2f8454c565c',
  },
  {
    id: 3,
    img: pathWebDev,
    title: 'Path Pengembangan Web(Node.js)',
    platform: 'Progate',
    credential: 'http://progate.com/course_certificate/04f488faqnbb7l',
  },
  {
    id: 4,
    img: nodejs,
    title: 'Kursus Node.Js',
    platform: 'Progate',
    credential: 'http://progate.com/course_certificate/77e036b5qnavwr',
  },
  {
    id: 5,
    img: sass,
    title: 'Kursus Sass',
    platform: 'Progate',
    credential: 'http://progate.com/course_certificate/928329f9qmtrq4',
  },
  {
    id: 6,
    img: react,
    title: 'Kursus React',
    platform: 'Progate',
    credential: 'http://progate.com/course_certificate/7a82f545qlxgcb',
  },
  {
    id: 7,
    img: js,
    title: 'Kursus JavaScript',
    platform: 'Progate',
    credential: 'http://progate.com/course_certificate/ab0cd7daqlx5uj',
  },
  {
    id: 8,
    img: htmlCss,
    title: 'Kursus HTML & CSS',
    platform: 'Progate',
    credential: 'http://progate.com/course_certificate/efc47308qlu1et',
  },
];
