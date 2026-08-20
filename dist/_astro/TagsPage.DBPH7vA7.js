import { q as r, P as s, j as e } from './GlobalStyle.Bb7mjjE7.js';
import './index.B8NUFlbB.js';
import { k as l } from './kebabCase.DfQ4QkSZ.js';
import { L as n } from './side.D2ortFwv.js';
import './footer.23J8IVI4.js';
import './jobs.CbeqI7LU.js';
import './projects.C1ZTG5l-.js';
const o = r.main.withConfig({
    displayName: 'TagsPage__StyledTagsContainer',
    componentId: 'sc-16mntlm-0',
  })([
    'max-width:1000px;h1{margin-bottom:50px;}ul{color:var(--light-slate);li{font-size:var(--fz-xxl);a{color:var(--light-slate);.count{color:var(--slate);font-family:var(--font-mono);font-size:var(--fz-md);}}}}',
  ]),
  t = ({ tags: i }) =>
    e.jsx(n, {
      pathname: '/pensieve/tags',
      children: e.jsxs(o, {
        children: [
          e.jsxs('span', {
            className: 'breadcrumb',
            children: [
              e.jsx('span', { className: 'arrow', children: '←' }),
              e.jsx('a', { href: '/pensieve', children: 'All memories' }),
            ],
          }),
          e.jsx('h1', { children: 'Tags' }),
          e.jsx('ul', {
            className: 'fancy-list',
            children: i.map(a =>
              e.jsx(
                'li',
                {
                  children: e.jsxs('a', {
                    href: `/pensieve/tags/${l(a.fieldValue)}/`,
                    className: 'inline-link',
                    children: [
                      a.fieldValue,
                      ' ',
                      e.jsxs('span', { className: 'count', children: ['(', a.totalCount, ')'] }),
                    ],
                  }),
                },
                a.fieldValue,
              ),
            ),
          }),
        ],
      }),
    });
t.propTypes = {
  tags: s.arrayOf(s.shape({ fieldValue: s.string.isRequired, totalCount: s.number.isRequired }))
    .isRequired,
};
export { t as default };
