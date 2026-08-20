import { q as o, j as t } from './GlobalStyle.Bb7mjjE7.js';
import { r as s } from './index.B8NUFlbB.js';
import { n as d } from './jobs.CbeqI7LU.js';
import { L as m } from './side.D2ortFwv.js';
import './footer.23J8IVI4.js';
import { T as l } from './projects.C1ZTG5l-.js';
import { u as c, C as u } from './index.DF2av5RA.js';
const p = o.main.withConfig({
    displayName: 'NotFoundPage__StyledMainContainer',
    componentId: 'sc-16xqjdg-0',
  })(['', ';flex-direction:column;'], ({ theme: e }) => e.mixins.flexCenter),
  f = o.h1.withConfig({ displayName: 'NotFoundPage__StyledTitle', componentId: 'sc-16xqjdg-1' })([
    'color:var(--green);font-family:var(--font-mono);font-size:clamp(100px,25vw,200px);line-height:1;',
  ]),
  x = o.h2.withConfig({ displayName: 'NotFoundPage__StyledSubtitle', componentId: 'sc-16xqjdg-2' })(
    ['font-size:clamp(30px,5vw,50px);font-weight:400;'],
  ),
  g = o.a.withConfig({
    displayName: 'NotFoundPage__StyledHomeButton',
    componentId: 'sc-16xqjdg-3',
  })(['', ';margin-top:40px;'], ({ theme: e }) => e.mixins.bigButton),
  w = () => {
    const [e, a] = s.useState(!1),
      n = c();
    s.useEffect(() => {
      if (n) return;
      const r = setTimeout(() => a(!0), d);
      return () => clearTimeout(r);
    }, []);
    const i = t.jsxs(p, {
      className: 'fillHeight',
      children: [
        t.jsx(f, { children: '404' }),
        t.jsx(x, { children: 'Page Not Found' }),
        t.jsx(g, { href: '/', children: 'Go Home' }),
      ],
    });
    return t.jsx(m, {
      pathname: '/404',
      children: n
        ? t.jsx(t.Fragment, { children: i })
        : t.jsx(l, {
            component: null,
            children: e && t.jsx(u, { timeout: 500, classNames: 'fadeup', children: i }),
          }),
    });
  };
export { w as default };
