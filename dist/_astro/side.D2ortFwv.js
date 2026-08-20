import { j as t, q as m, A as E, P as h, L as z, t as T, G as A } from './GlobalStyle.Bb7mjjE7.js';
import { r as a } from './index.B8NUFlbB.js';
import { n as v, a as L, e as C } from './config.8JBl_d4u.js';
import { u as O, C as y } from './index.DF2av5RA.js';
import { K as S } from './jobs.CbeqI7LU.js';
import { T as j } from './projects.C1ZTG5l-.js';
import B from './footer.23J8IVI4.js';
import { b as F, I as Y } from './twitter.BDuDRxDo.js';
const H = () =>
    t.jsxs('svg', {
      id: 'hex',
      xmlns: 'http://www.w3.org/2000/svg',
      role: 'img',
      viewBox: '0 0 84 96',
      children: [
        t.jsx('title', { children: 'Hexagon' }),
        t.jsx('g', {
          transform: 'translate(-8.000000, -2.000000)',
          children: t.jsx('g', {
            transform: 'translate(11.000000, 5.000000)',
            children: t.jsx('polygon', {
              stroke: 'currentColor',
              strokeWidth: '5',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              points: '39 0 0 22 0 67 39 90 78 68 78 23',
              fill: 'currentColor',
            }),
          }),
        }),
      ],
    }),
  q = (e, n) => {
    a.useEffect(() => {
      const i = s => {
        !e.current || e.current.contains(s.target) || n(s);
      };
      return (
        document.addEventListener('mousedown', i),
        document.addEventListener('touchstart', i),
        () => {
          (document.removeEventListener('mousedown', i),
            document.removeEventListener('touchstart', i));
        }
      );
    }, [e, n]);
  },
  P = 'up',
  W = 'down',
  K = ({ initialDirection: e, thresholdPixels: n, off: i } = {}) => {
    const [s, l] = a.useState(e);
    return (
      a.useEffect(() => {
        const o = n || 0;
        let d = window.pageYOffset,
          c = !1;
        const u = () => {
            const p = window.pageYOffset;
            if (Math.abs(p - d) < o) {
              c = !1;
              return;
            }
            (l(p > d ? W : P), (d = p > 0 ? p : 0), (c = !1));
          },
          f = () => {
            c || (window.requestAnimationFrame(u), (c = !0));
          };
        return (
          i ? l(e) : window.addEventListener('scroll', f),
          () => window.removeEventListener('scroll', f)
        );
      }, [e, n, i]),
      s
    );
  },
  G = m.header.withConfig({ displayName: 'nav__StyledHeader', componentId: 'sc-1op7e11-0' })(
    [
      '',
      ';position:fixed;top:0;z-index:11;padding:0px 50px;width:100%;height:var(--nav-height);background-color:rgba(26,27,38,0.88);filter:none !important;pointer-events:auto !important;user-select:auto !important;backdrop-filter:blur(10px);transition:var(--transition);@media (max-width:1080px){padding:0 40px;}@media (max-width:768px){padding:0 25px;}@media (prefers-reduced-motion:no-preference){',
      ';',
      ';}',
    ],
    ({ theme: e }) => e.mixins.flexBetween,
    e =>
      e.scrollDirection === 'up' &&
      !e.scrolledToTop &&
      E([
        'height:var(--nav-scroll-height);transform:translateY(0px);background-color:rgba(26,27,38,0.88);box-shadow:0 10px 30px -10px var(--navy-shadow);',
      ]),
    e =>
      e.scrollDirection === 'down' &&
      !e.scrolledToTop &&
      E([
        'height:var(--nav-scroll-height);transform:translateY(calc(var(--nav-scroll-height) * -1));box-shadow:0 10px 30px -10px var(--navy-shadow);',
      ]),
  ),
  $ = m.nav.withConfig({ displayName: 'nav__StyledNav', componentId: 'sc-1op7e11-1' })(
    [
      '',
      ';position:relative;width:100%;color:var(--lightest-slate);font-family:var(--font-mono);counter-reset:item 0;z-index:12;.logo{',
      ';a{color:var(--green);width:42px;height:42px;position:relative;z-index:1;.hex-container{position:absolute;top:0;left:0;z-index:-1;@media (prefers-reduced-motion:no-preference){transition:var(--transition);}}.logo-container{position:relative;z-index:1;svg{fill:none;user-select:none;@media (prefers-reduced-motion:no-preference){transition:var(--transition);}polygon{fill:var(--navy);}}}&:hover,&:focus{outline:0;transform:translate(-4px,-4px);.hex-container{transform:translate(4px,3px);}}}}',
    ],
    ({ theme: e }) => e.mixins.flexBetween,
    ({ theme: e }) => e.mixins.flexCenter,
  ),
  N = m.div.withConfig({ displayName: 'nav__StyledLinks', componentId: 'sc-1op7e11-2' })(
    [
      'display:flex;align-items:center;@media (max-width:768px){display:none;}ol{',
      ";padding:0;margin:0;list-style:none;li{margin:0 5px;position:relative;counter-increment:item 1;font-size:var(--fz-xs);a{padding:10px;&:before{content:'0' counter(item) '.';margin-right:5px;color:var(--green);font-size:var(--fz-xxs);text-align:right;}}}}.resume-button{",
      ';margin-left:15px;font-size:var(--fz-xs);}',
    ],
    ({ theme: e }) => e.mixins.flexBetween,
    ({ theme: e }) => e.mixins.smallButton,
  ),
  I = ({ isHome: e }) => {
    const [n, i] = a.useState(!e),
      s = K('down'),
      [l, o] = a.useState(!0),
      d = O(),
      c = () => {
        o(window.pageYOffset < 50);
      };
    a.useEffect(() => {
      if (d) return;
      const x = setTimeout(() => {
        i(!0);
      }, 100);
      return (
        window.addEventListener('scroll', c),
        () => {
          (clearTimeout(x), window.removeEventListener('scroll', c));
        }
      );
    }, []);
    const u = 0,
      f = '',
      p = '',
      w = t.jsx('div', {
        className: 'logo',
        tabIndex: '-1',
        children: t.jsxs('a', {
          href: '/',
          'aria-label': 'home',
          children: [
            t.jsx('div', { className: 'hex-container', children: t.jsx(H, {}) }),
            t.jsx('div', { className: 'logo-container', children: t.jsx(F, {}) }),
          ],
        }),
      }),
      b = t.jsx('a', {
        className: 'resume-button',
        href: '/resume.pdf',
        target: '_blank',
        rel: 'noopener noreferrer',
        children: 'Resume',
      });
    return t.jsx(z, {
      theme: T,
      children: t.jsx(G, {
        scrollDirection: s,
        scrolledToTop: l,
        children: t.jsx($, {
          children: d
            ? t.jsxs(t.Fragment, {
                children: [
                  w,
                  t.jsxs(N, {
                    children: [
                      t.jsx('ol', {
                        children:
                          v &&
                          v.map(({ url: x, name: r }, g) =>
                            t.jsx('li', { children: t.jsx('a', { href: x, children: r }) }, g),
                          ),
                      }),
                      t.jsx('div', { children: b }),
                    ],
                  }),
                  t.jsx(_, {}),
                ],
              })
            : t.jsxs(t.Fragment, {
                children: [
                  t.jsx(j, {
                    component: null,
                    children:
                      n &&
                      t.jsx(y, {
                        classNames: f,
                        timeout: u,
                        children: t.jsx(t.Fragment, { children: w }),
                      }),
                  }),
                  t.jsxs(N, {
                    children: [
                      t.jsx('ol', {
                        children: t.jsx(j, {
                          component: null,
                          children:
                            n &&
                            v &&
                            v.map(({ url: x, name: r }, g) =>
                              t.jsx(
                                y,
                                {
                                  classNames: p,
                                  timeout: u,
                                  children: t.jsx(
                                    'li',
                                    {
                                      style: { transitionDelay: `${e ? g * 100 : 0}ms` },
                                      children: t.jsx('a', { href: x, children: r }),
                                    },
                                    g,
                                  ),
                                },
                                g,
                              ),
                            ),
                        }),
                      }),
                      t.jsx(j, {
                        component: null,
                        children:
                          n &&
                          t.jsx(y, {
                            classNames: p,
                            timeout: u,
                            children: t.jsx('div', {
                              style: { transitionDelay: `${e ? v.length * 100 : 0}ms` },
                              children: b,
                            }),
                          }),
                      }),
                    ],
                  }),
                  t.jsx(j, {
                    component: null,
                    children: n && t.jsx(y, { classNames: f, timeout: u, children: t.jsx(_, {}) }),
                  }),
                ],
              }),
        }),
      }),
    });
  };
I.propTypes = { isHome: h.bool };
const U = m.ul.withConfig({ displayName: 'social__StyledSocialList', componentId: 'sc-1jlvck7-0' })(
    [
      "display:flex;flex-direction:column;align-items:center;margin:0;padding:0;list-style:none;&:after{content:'';display:block;width:1px;height:90px;margin:0 auto;background-color:var(--light-slate);}li{&:last-of-type{margin-bottom:20px;}a{padding:10px;&:hover,&:focus{transform:translateY(-3px);}svg{width:20px;height:20px;}}}",
    ],
  ),
  R = ({ isHome: e }) =>
    t.jsx(k, {
      isHome: e,
      orientation: 'left',
      children: t.jsx(U, {
        children:
          L &&
          L.map(({ url: n, name: i }, s) =>
            t.jsx(
              'li',
              {
                children: t.jsx('a', {
                  href: n,
                  'aria-label': i,
                  target: '_blank',
                  rel: 'noreferrer',
                  children: t.jsx(Y, { name: i }),
                }),
              },
              s,
            ),
          ),
      }),
    });
R.propTypes = { isHome: h.bool };
const V = m.div.withConfig({
    displayName: 'email__StyledLinkWrapper',
    componentId: 'sc-1rdrdu8-0',
  })([
    "display:flex;flex-direction:column;align-items:center;position:relative;&:after{content:'';display:block;width:1px;height:90px;margin:0 auto;background-color:var(--light-slate);}a{margin:20px auto;padding:10px;font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:var(--fz-lg);letter-spacing:0.1em;writing-mode:vertical-rl;&:hover,&:focus{transform:translateY(-3px);}}",
  ]),
  M = ({ isHome: e }) =>
    t.jsx(k, {
      isHome: e,
      orientation: 'right',
      children: t.jsx(V, { children: t.jsx('a', { href: `mailto:${C}`, children: C }) }),
    });
M.propTypes = { isHome: h.bool };
const X = m.div.withConfig({ displayName: 'layout__StyledContent', componentId: 'sc-fmvuum-0' })([
    'display:flex;flex-direction:column;min-height:100vh;',
  ]),
  J = ({ children: e, pathname: n = '/' }) => {
    const i = n === '/',
      s = () => {
        const l = Array.from(document.querySelectorAll('a'));
        l.length > 0 &&
          l.forEach(o => {
            o.host !== window.location.host &&
              (o.setAttribute('rel', 'noopener noreferrer'), o.setAttribute('target', '_blank'));
          });
      };
    return (
      a.useEffect(() => {
        if (typeof window < 'u' && window.location.hash) {
          const l = window.location.hash.substring(1);
          setTimeout(() => {
            const o = document.getElementById(l);
            o && (o.scrollIntoView(), o.focus());
          }, 0);
        }
        s();
      }, []),
      t.jsx('div', {
        id: 'root',
        children: t.jsxs(z, {
          theme: T,
          children: [
            t.jsx(A, {}),
            t.jsx('a', {
              className: 'skip-to-content',
              href: '#content',
              children: 'Skip to Content',
            }),
            t.jsxs(X, {
              children: [
                t.jsx(I, { isHome: i }),
                t.jsx(R, { isHome: i }),
                t.jsx(M, { isHome: i }),
                t.jsxs('div', { id: 'content', children: [e, t.jsx(B, {})] }),
              ],
            }),
          ],
        }),
      })
    );
  };
J.propTypes = { children: h.node.isRequired, pathname: h.string };
const Q = m.div.withConfig({ displayName: 'menu__StyledMenu', componentId: 'sc-1b407hv-0' })([
    'display:none;@media (max-width:768px){display:block;}',
  ]),
  Z = m.button.withConfig({
    displayName: 'menu__StyledHamburgerButton',
    componentId: 'sc-1b407hv-1',
  })(
    [
      'display:none;@media (max-width:768px){',
      ';position:relative;z-index:10;margin-right:-15px;padding:15px;border:0;background-color:transparent;color:inherit;text-transform:none;transition-timing-function:linear;transition-duration:0.15s;transition-property:opacity,filter;}.ham-box{display:inline-block;position:relative;width:var(--hamburger-width);height:24px;}.ham-box-inner{position:absolute;top:50%;right:0;width:var(--hamburger-width);height:2px;border-radius:var(--border-radius);background-color:var(--green);transition-duration:0.22s;transition-property:transform;transition-delay:',
      ';transform:rotate(',
      ');transition-timing-function:cubic-bezier( ',
      " );&:before,&:after{content:'';display:block;position:absolute;left:auto;right:0;width:var(--hamburger-width);height:2px;border-radius:4px;background-color:var(--green);transition-timing-function:ease;transition-duration:0.15s;transition-property:transform;}&:before{width:",
      ';top:',
      ';opacity:',
      ';transition:',
      ';}&:after{width:',
      ';bottom:',
      ';transform:rotate(',
      ');transition:',
      ';}}',
    ],
    ({ theme: e }) => e.mixins.flexCenter,
    e => (e.menuOpen ? '0.12s' : '0s'),
    e => (e.menuOpen ? '225deg' : '0deg'),
    e => (e.menuOpen ? '0.215, 0.61, 0.355, 1' : '0.55, 0.055, 0.675, 0.19'),
    e => (e.menuOpen ? '100%' : '120%'),
    e => (e.menuOpen ? '0' : '-10px'),
    e => (e.menuOpen ? 0 : 1),
    ({ menuOpen: e }) => (e ? 'var(--ham-before-active)' : 'var(--ham-before)'),
    e => (e.menuOpen ? '100%' : '80%'),
    e => (e.menuOpen ? '0' : '-10px'),
    e => (e.menuOpen ? '-90deg' : '0'),
    ({ menuOpen: e }) => (e ? 'var(--ham-after-active)' : 'var(--ham-after)'),
  ),
  ee = m.aside.withConfig({ displayName: 'menu__StyledSidebar', componentId: 'sc-1b407hv-2' })(
    [
      'display:none;@media (max-width:768px){',
      ';position:fixed;top:0;bottom:0;right:0;padding:50px 10px;width:min(75vw,400px);height:100vh;outline:0;background-color:var(--light-navy);box-shadow:-10px 0px 30px -15px var(--navy-shadow);z-index:9;transform:translateX(',
      'vw);visibility:',
      ';transition:var(--transition);}nav{',
      ";width:100%;flex-direction:column;color:var(--lightest-slate);font-family:var(--font-mono);text-align:center;}ol{padding:0;margin:0;list-style:none;width:100%;li{position:relative;margin:0 auto 20px;counter-increment:item 1;font-size:clamp(var(--fz-sm),4vw,var(--fz-lg));@media (max-width:600px){margin:0 auto 10px;}&:before{content:'0' counter(item) '.';display:block;margin-bottom:5px;color:var(--green);font-size:var(--fz-sm);}}a{",
      ';width:100%;padding:3px 20px 20px;}}.resume-link{',
      ';padding:18px 50px;margin:10% auto 0;width:max-content;}',
    ],
    ({ theme: e }) => e.mixins.flexCenter,
    e => (e.menuOpen ? 0 : 100),
    e => (e.menuOpen ? 'visible' : 'hidden'),
    ({ theme: e }) => e.mixins.flexBetween,
    ({ theme: e }) => e.mixins.link,
    ({ theme: e }) => e.mixins.bigButton,
  ),
  _ = () => {
    const [e, n] = a.useState(!1),
      i = () => n(!e),
      s = a.useRef(null),
      l = a.useRef(null);
    let o, d, c;
    const u = () => {
        ((o = [s.current, ...Array.from(l.current.querySelectorAll('a'))]),
          (d = o[0]),
          (c = o[o.length - 1]));
      },
      f = r => {
        document.activeElement === d && (r.preventDefault(), c.focus());
      },
      p = r => {
        document.activeElement === c && (r.preventDefault(), d.focus());
      },
      w = r => {
        switch (r.key) {
          case S.ESCAPE:
          case S.ESCAPE_IE11: {
            n(!1);
            break;
          }
          case S.TAB: {
            if (o && o.length === 1) {
              r.preventDefault();
              break;
            }
            r.shiftKey ? f(r) : p(r);
            break;
          }
        }
      },
      b = r => {
        r.currentTarget.innerWidth > 768 && n(!1);
      };
    (a.useEffect(
      () => (
        document.addEventListener('keydown', w),
        window.addEventListener('resize', b),
        u(),
        () => {
          (document.removeEventListener('keydown', w), window.removeEventListener('resize', b));
        }
      ),
      [],
    ),
      a.useEffect(
        () => (
          e ? document.body.classList.add('blur') : document.body.classList.remove('blur'),
          () => {
            document.body.classList.remove('blur');
          }
        ),
        [e],
      ));
    const x = a.useRef();
    return (
      q(x, () => n(!1)),
      t.jsx(Q, {
        children: t.jsxs('div', {
          ref: x,
          children: [
            t.jsx(Z, {
              onClick: i,
              menuOpen: e,
              ref: s,
              'aria-label': 'Menu',
              children: t.jsx('div', {
                className: 'ham-box',
                children: t.jsx('div', { className: 'ham-box-inner' }),
              }),
            }),
            t.jsx(ee, {
              menuOpen: e,
              'aria-hidden': !e,
              tabIndex: e ? 1 : -1,
              children: t.jsxs('nav', {
                ref: l,
                children: [
                  v &&
                    t.jsx('ol', {
                      children: v.map(({ url: r, name: g }, D) =>
                        t.jsx(
                          'li',
                          { children: t.jsx('a', { href: r, onClick: () => n(!1), children: g }) },
                          D,
                        ),
                      ),
                    }),
                  t.jsx('a', { href: '/resume.pdf', className: 'resume-link', children: 'Resume' }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  },
  te = m.div.withConfig({ displayName: 'side__StyledSideElement', componentId: 'sc-xf5dcn-0' })(
    [
      'width:40px;position:fixed;bottom:0;left:',
      ';right:',
      ';z-index:10;color:var(--light-slate);@media (max-width:1080px){left:',
      ';right:',
      ';}@media (max-width:768px){display:none;}',
    ],
    e => (e.orientation === 'left' ? '40px' : 'auto'),
    e => (e.orientation === 'left' ? 'auto' : '40px'),
    e => (e.orientation === 'left' ? '20px' : 'auto'),
    e => (e.orientation === 'left' ? 'auto' : '20px'),
  ),
  k = ({ children: e, isHome: n, orientation: i }) => {
    const [s, l] = a.useState(!n),
      o = O();
    return (
      a.useEffect(() => {
        if (!n || o) return;
        const d = setTimeout(() => l(!0), 0);
        return () => clearTimeout(d);
      }, []),
      t.jsx(te, {
        orientation: i,
        children: o
          ? t.jsx(t.Fragment, { children: e })
          : t.jsx(j, {
              component: null,
              children: s && t.jsx(y, { classNames: '', timeout: 0, children: e }),
            }),
      })
    );
  };
k.propTypes = { children: h.node.isRequired, isHome: h.bool, orientation: h.string };
export { J as L };
