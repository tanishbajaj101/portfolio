import { q as d, P as n, j as e } from './GlobalStyle.Bb7mjjE7.js';
import './index.B8NUFlbB.js';
import { k as r } from './kebabCase.DfQ4QkSZ.js';
import { L as x } from './side.D2ortFwv.js';
import './footer.23J8IVI4.js';
import './jobs.CbeqI7LU.js';
import './projects.C1ZTG5l-.js';
const g = d.main.withConfig({
    displayName: 'TagPage__StyledTagsContainer',
    componentId: 'sc-1a0b1e-0',
  })(
    [
      'max-width:1000px;a{',
      ';}h1{',
      ';margin-bottom:50px;a{font-size:var(--fz-lg);font-weight:400;}}ul{li{font-size:24px;h2{font-size:inherit;margin:0;a{color:var(--light-slate);}}.subtitle{color:var(--slate);font-size:var(--fz-sm);.tag{margin-right:10px;}}}}',
    ],
    ({ theme: s }) => s.mixins.inlineLink,
    ({ theme: s }) => s.mixins.flexBetween,
  ),
  j = ({ tag: s, posts: t }) =>
    e.jsx(x, {
      pathname: `/pensieve/tags/${r(s)}`,
      children: e.jsxs(g, {
        children: [
          e.jsxs('span', {
            className: 'breadcrumb',
            children: [
              e.jsx('span', { className: 'arrow', children: '←' }),
              e.jsx('a', { href: '/pensieve', children: 'All memories' }),
            ],
          }),
          e.jsxs('h1', {
            children: [
              e.jsxs('span', { children: ['#', s] }),
              e.jsx('span', {
                children: e.jsx('a', { href: '/pensieve/tags', children: 'View all tags' }),
              }),
            ],
          }),
          e.jsx('ul', {
            className: 'fancy-list',
            children: t.map((l, o) => {
              const { title: m, slug: c, date: h, tags: a } = l;
              return e.jsxs(
                'li',
                {
                  children: [
                    e.jsx('h2', { children: e.jsx('a', { href: c, children: m }) }),
                    e.jsxs('p', {
                      className: 'subtitle',
                      children: [
                        e.jsx('time', {
                          children: new Date(h).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          }),
                        }),
                        e.jsx('span', { children: ' — ' }),
                        a &&
                          a.length > 0 &&
                          a.map((i, p) =>
                            e.jsxs(
                              'a',
                              {
                                href: `/pensieve/tags/${r(i)}/`,
                                className: 'tag',
                                children: ['#', i],
                              },
                              p,
                            ),
                          ),
                      ],
                    }),
                  ],
                },
                o,
              );
            }),
          }),
        ],
      }),
    });
j.propTypes = { tag: n.string.isRequired, posts: n.array.isRequired };
export { j as default };
