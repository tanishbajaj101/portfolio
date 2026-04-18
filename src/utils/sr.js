const isSSR = typeof window === 'undefined';

const sr = isSSR
  ? null
  : (await import('scrollreveal')).default();

export default sr;
