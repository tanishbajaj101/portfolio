import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Stubs browser-only modules during Astro's SSR/SSG build phase */
const ssrBrowserStub = {
  name: 'ssr-stub-browser-modules',
  enforce: 'pre',
  resolveId(id, _, options) {
    if (options?.ssr) {
      if (id === 'scrollreveal') return '\0scrollreveal-stub';
      if (id === 'animejs') return '\0animejs-stub';
    }
  },
  load(id) {
    if (id === '\0scrollreveal-stub') {
      return `export default function ScrollReveal() { return { reveal() {}, clean() {} }; }`;
    }
    if (id === '\0animejs-stub') {
      return `
        const noop = () => chain;
        const chain = { add: noop };
        const timeline = (opts = {}) => chain;
        export default { timeline, setDashoffset: null };
      `;
    }
  },
};

export default defineConfig({
  site: 'https://tanishbajaj.dev',
  integrations: [
    react({
      include: ['**/*.jsx', '**/*.tsx', '**/*.js', '**/*.ts'],
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
  ],
  vite: {
    plugins: [ssrBrowserStub],
    ssr: {
      noExternal: ['styled-components', '@emotion/stylis', '@emotion/unitless', '@emotion/is-prop-valid'],
    },

    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  },
});
