const e = 'tanishbajaj101@gmail.com',
  n = [
    { name: 'GitHub', url: 'https://github.com/tanishbajaj101' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/tanish-bajaj-878964292/' },
    { name: 'Instagram', url: 'https://www.instagram.com/tanishbajaj84/' },
  ],
  s = [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#jobs' },
    { name: 'Work', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ],
  i = (a = 200, t = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay: a,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: !0,
    reset: !1,
    useDelay: 'always',
    viewFactor: t,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  });
export { n as a, e, s as n, i as s };
