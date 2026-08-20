import { q as i, P as x, j as e } from './GlobalStyle.Bb7mjjE7.js';
import './index.B8NUFlbB.js';
import { k as h } from './kebabCase.DfQ4QkSZ.js';
import { L as f } from './side.D2ortFwv.js';
import './footer.23J8IVI4.js';
import './jobs.CbeqI7LU.js';
import './projects.C1ZTG5l-.js';
import { a as g } from './twitter.BDuDRxDo.js';
const v = i.main.withConfig({
    displayName: 'PensievePage__StyledMainContainer',
    componentId: 'sc-1xlznfj-0',
  })(
    [
      `& > header{margin-bottom:100px;text-align:center;a{&:hover,&:focus{cursor:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>") 20 0,auto;}}}footer{`,
      ';width:100%;margin-top:20px;}',
    ],
    ({ theme: t }) => t.mixins.flexBetween,
  ),
  _ = i.ul.withConfig({ displayName: 'PensievePage__StyledGrid', componentId: 'sc-1xlznfj-1' })(
    [
      '',
      ';display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;margin-top:50px;position:relative;@media (max-width:1080px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}',
    ],
    ({ theme: t }) => t.mixins.resetList,
  ),
  u = i.li.withConfig({ displayName: 'PensievePage__StyledPost', componentId: 'sc-1xlznfj-2' })(
    [
      'transition:var(--transition);cursor:default;@media (prefers-reduced-motion:no-preference){&:hover,&:focus-within{.post__inner{transform:translateY(-7px);}}}a{position:relative;z-index:1;}.post__inner{',
      ';',
      ';flex-direction:column;align-items:flex-start;position:relative;height:100%;padding:2rem 1.75rem;border-radius:var(--border-radius);transition:var(--transition);background-color:var(--light-navy);header,a{width:100%;}}.post__icon{',
      ";color:var(--green);margin-bottom:30px;margin-left:-5px;svg{width:40px;height:40px;}}.post__title{margin:0 0 10px;color:var(--lightest-slate);font-size:var(--fz-xxl);a{position:static;&:before{content:'';display:block;position:absolute;z-index:0;width:100%;height:100%;top:0;left:0;}}}.post__desc{color:var(--light-slate);font-size:17px;}.post__date{color:var(--light-slate);font-family:var(--font-mono);font-size:var(--fz-xxs);text-transform:uppercase;}ul.post__tags{display:flex;align-items:flex-end;flex-wrap:wrap;padding:0;margin:0;list-style:none;li{color:var(--green);font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1.75;&:not(:last-of-type){margin-right:15px;}}}",
    ],
    ({ theme: t }) => t.mixins.boxShadow,
    ({ theme: t }) => t.mixins.flexBetween,
    ({ theme: t }) => t.mixins.flexBetween,
  ),
  w = ({ posts: t }) =>
    e.jsx(f, {
      pathname: '/pensieve',
      children: e.jsxs(v, {
        children: [
          e.jsxs('header', {
            children: [
              e.jsx('h1', { className: 'big-heading', children: 'Pensieve' }),
              e.jsx('p', {
                className: 'subtitle',
                children: e.jsx('a', {
                  href: 'https://www.wizardingworld.com/writing-by-jk-rowling/pensieve',
                  children: 'a collection of memories',
                }),
              }),
            ],
          }),
          e.jsx(_, {
            children:
              t.length > 0 &&
              t.map((a, n) => {
                const { title: o, description: r, slug: l, date: p, tags: d } = a,
                  m = new Date(p).toLocaleDateString();
                return e.jsx(
                  u,
                  {
                    children: e.jsxs('div', {
                      className: 'post__inner',
                      children: [
                        e.jsxs('header', {
                          children: [
                            e.jsx('div', { className: 'post__icon', children: e.jsx(g, {}) }),
                            e.jsx('h5', {
                              className: 'post__title',
                              children: e.jsx('a', { href: l, children: o }),
                            }),
                            e.jsx('p', { className: 'post__desc', children: r }),
                          ],
                        }),
                        e.jsxs('footer', {
                          children: [
                            e.jsx('span', { className: 'post__date', children: m }),
                            e.jsx('ul', {
                              className: 'post__tags',
                              children: d.map((s, c) =>
                                e.jsx(
                                  'li',
                                  {
                                    children: e.jsxs('a', {
                                      href: `/pensieve/tags/${h(s)}/`,
                                      className: 'inline-link',
                                      children: ['#', s],
                                    }),
                                  },
                                  c,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  n,
                );
              }),
          }),
        ],
      }),
    });
w.propTypes = { posts: x.array.isRequired };
export { w as default };
