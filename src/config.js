export const email = 'tanishbajaj101@gmail.com';

export const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/tanishbajaj101',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/tanish-bajaj-878964292/',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/tanishbajaj84/',
  },
];

export const navLinks = [
  {
    name: 'About',
    url: '/#about',
  },
  {
    name: 'Experience',
    url: '/#jobs',
  },
  {
    name: 'Work',
    url: '/#projects',
  },
  {
    name: 'Contact',
    url: '/#contact',
  },
];

export const colors = {
  green: '#7aa2f7',
  navy: '#1a1b26',
  darkNavy: '#16161e',
};

export const srConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});
