import { q as C, P as _, j as a, L as k, t as z } from './GlobalStyle.Bb7mjjE7.js';
import { r as f, R as g } from './index.B8NUFlbB.js';
import { s as v } from './config.8JBl_d4u.js';
import { s as j } from './sr.BrDI4Z8O.js';
import { I as b } from './twitter.BDuDRxDo.js';
import { _ as L, D as F, F as I, T as M, u as V, C as D, M as G } from './index.DF2av5RA.js';
function O(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function E(e, i) {
  var s = function (r) {
      return i && f.isValidElement(r) ? i(r) : r;
    },
    l = Object.create(null);
  return (
    e &&
      f.Children.map(e, function (t) {
        return t;
      }).forEach(function (t) {
        l[t.key] = s(t);
      }),
    l
  );
}
function q(e, i) {
  ((e = e || {}), (i = i || {}));
  function s(u) {
    return u in i ? i[u] : e[u];
  }
  var l = Object.create(null),
    t = [];
  for (var r in e) r in i ? t.length && ((l[r] = t), (t = [])) : t.push(r);
  var n,
    o = {};
  for (var c in i) {
    if (l[c])
      for (n = 0; n < l[c].length; n++) {
        var d = l[c][n];
        o[l[c][n]] = s(d);
      }
    o[c] = s(c);
  }
  for (n = 0; n < t.length; n++) o[t[n]] = s(t[n]);
  return o;
}
function m(e, i, s) {
  return s[i] != null ? s[i] : e.props[i];
}
function W(e, i) {
  return E(e.children, function (s) {
    return f.cloneElement(s, {
      onExited: i.bind(null, s),
      in: !0,
      appear: m(s, 'appear', e),
      enter: m(s, 'enter', e),
      exit: m(s, 'exit', e),
    });
  });
}
function B(e, i, s) {
  var l = E(e.children),
    t = q(i, l);
  return (
    Object.keys(t).forEach(function (r) {
      var n = t[r];
      if (f.isValidElement(n)) {
        var o = r in i,
          c = r in l,
          d = i[r],
          u = f.isValidElement(d) && !d.props.in;
        c && (!o || u)
          ? (t[r] = f.cloneElement(n, {
              onExited: s.bind(null, n),
              in: !0,
              exit: m(n, 'exit', e),
              enter: m(n, 'enter', e),
            }))
          : !c && o && !u
            ? (t[r] = f.cloneElement(n, { in: !1 }))
            : c &&
              o &&
              f.isValidElement(d) &&
              (t[r] = f.cloneElement(n, {
                onExited: s.bind(null, n),
                in: d.props.in,
                exit: m(n, 'exit', e),
                enter: m(n, 'enter', e),
              }));
      }
    }),
    t
  );
}
var H =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (i) {
        return e[i];
      });
    },
  U = {
    component: 'div',
    childFactory: function (i) {
      return i;
    },
  },
  w = (function (e) {
    L(i, e);
    function i(l, t) {
      var r;
      r = e.call(this, l, t) || this;
      var n = r.handleExited.bind(O(r));
      return (
        (r.state = { contextValue: { isMounting: !0 }, handleExited: n, firstRender: !0 }),
        r
      );
    }
    var s = i.prototype;
    return (
      (s.componentDidMount = function () {
        ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
      }),
      (s.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (i.getDerivedStateFromProps = function (t, r) {
        var n = r.children,
          o = r.handleExited,
          c = r.firstRender;
        return { children: c ? W(t, o) : B(t, n, o), firstRender: !1 };
      }),
      (s.handleExited = function (t, r) {
        var n = E(this.props.children);
        t.key in n ||
          (t.props.onExited && t.props.onExited(r),
          this.mounted &&
            this.setState(function (o) {
              var c = F({}, o.children);
              return (delete c[t.key], { children: c });
            }));
      }),
      (s.render = function () {
        var t = this.props,
          r = t.component,
          n = t.childFactory,
          o = I(t, ['component', 'childFactory']),
          c = this.state.contextValue,
          d = H(this.state.children).map(n);
        return (
          delete o.appear,
          delete o.enter,
          delete o.exit,
          r === null
            ? g.createElement(M.Provider, { value: c }, d)
            : g.createElement(M.Provider, { value: c }, g.createElement(r, o, d))
        );
      }),
      i
    );
  })(g.Component);
w.propTypes = {};
w.defaultProps = U;
const A = C.section.withConfig({
    displayName: 'projects__StyledProjectsSection',
    componentId: 'sc-b7qf02-0',
  })(
    [
      'display:flex;flex-direction:column;align-items:center;padding:0;h2{font-size:clamp(24px,5vw,var(--fz-heading));}.archive-link{font-family:var(--font-mono);font-size:var(--fz-sm);margin-top:0;align-self:flex-end;&:after{bottom:0.1em;}}.projects-grid{',
      ';display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;margin-top:0;@media (max-width:1080px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));}}.more-button{',
      ';margin:80px auto 0;}',
    ],
    ({ theme: e }) => e.mixins.resetList,
    ({ theme: e }) => e.mixins.button,
  ),
  S = C.li.withConfig({ displayName: 'projects__StyledProject', componentId: 'sc-b7qf02-1' })(
    [
      'position:relative;cursor:default;transition:var(--transition);@media (prefers-reduced-motion:no-preference){&:hover,&:focus-within{.project-inner{transform:translateY(-7px);}}}a{position:relative;z-index:1;}.project-inner{',
      ';',
      ';flex-direction:column;align-items:flex-start;position:relative;height:100%;padding:2rem 1.75rem;border-radius:var(--border-radius);background-color:var(--light-navy);transition:var(--transition);overflow:auto;}.project-top{',
      ';margin-bottom:35px;.folder{color:var(--green);svg{width:40px;height:40px;}}.project-links{display:flex;align-items:center;margin-right:-10px;color:var(--light-slate);a{',
      ";padding:5px 7px;&.external{svg{width:22px;height:22px;margin-top:-4px;}}svg{width:20px;height:20px;}}}}.project-title{margin:0 0 10px;color:var(--lightest-slate);font-size:var(--fz-xxl);a{position:static;&:before{content:'';display:block;position:absolute;z-index:0;width:100%;height:100%;top:0;left:0;}}}.project-description{color:var(--light-slate);font-size:17px;p{margin:0;}a{",
      ';}}.project-tech-list{display:flex;align-items:flex-end;flex-grow:1;flex-wrap:wrap;padding:0;margin:20px 0 0 0;list-style:none;li{font-family:var(--font-mono);font-size:var(--fz-xxs);line-height:1.75;&:not(:last-of-type){margin-right:15px;}}}',
    ],
    ({ theme: e }) => e.mixins.boxShadow,
    ({ theme: e }) => e.mixins.flexBetween,
    ({ theme: e }) => e.mixins.flexBetween,
    ({ theme: e }) => e.mixins.flexCenter,
    ({ theme: e }) => e.mixins.inlineLink,
  ),
  Y = ({ projects: e = [] }) => {
    const [i, s] = f.useState(!1),
      l = f.useRef(null),
      t = f.useRef(null),
      r = f.useRef([]),
      n = V();
    f.useEffect(() => {
      n ||
        (j.reveal(l.current, v()),
        j.reveal(t.current, v()),
        r.current.forEach((h, p) => j.reveal(h, v(p * 100))));
    }, []);
    const o = 6,
      c = e.slice(0, o),
      d = i ? e : c,
      u = h => {
        const { github: p, external: x, title: N, tech: y, body: P } = h;
        return a.jsxs('div', {
          className: 'project-inner',
          children: [
            a.jsxs('header', {
              children: [
                a.jsxs('div', {
                  className: 'project-top',
                  children: [
                    a.jsx('div', { className: 'folder', children: a.jsx(b, { name: 'Folder' }) }),
                    a.jsxs('div', {
                      className: 'project-links',
                      children: [
                        p &&
                          a.jsx('a', {
                            href: p,
                            'aria-label': 'GitHub Link',
                            target: '_blank',
                            rel: 'noreferrer',
                            children: a.jsx(b, { name: 'GitHub' }),
                          }),
                        x &&
                          a.jsx('a', {
                            href: x,
                            'aria-label': 'External Link',
                            className: 'external',
                            target: '_blank',
                            rel: 'noreferrer',
                            children: a.jsx(b, { name: 'External' }),
                          }),
                      ],
                    }),
                  ],
                }),
                a.jsx('h3', {
                  className: 'project-title',
                  children: a.jsx('a', {
                    href: x,
                    target: '_blank',
                    rel: 'noreferrer',
                    children: N,
                  }),
                }),
                a.jsx('div', {
                  className: 'project-description',
                  children: a.jsx(G, { children: P }),
                }),
              ],
            }),
            a.jsx('footer', {
              children:
                y &&
                a.jsx('ul', {
                  className: 'project-tech-list',
                  children: y.map((R, T) => a.jsx('li', { children: R }, T)),
                }),
            }),
          ],
        });
      };
    return a.jsx(k, {
      theme: z,
      children: a.jsxs(A, {
        children: [
          a.jsx('ul', {
            className: 'projects-grid',
            children: n
              ? a.jsx(a.Fragment, {
                  children: d && d.map((h, p) => a.jsx(S, { children: u(h) }, p)),
                })
              : a.jsx(w, {
                  component: null,
                  children:
                    d &&
                    d.map((h, p) =>
                      a.jsx(
                        D,
                        {
                          classNames: 'fadeup',
                          timeout: p >= o ? (p - o) * 300 : 300,
                          exit: !1,
                          children: a.jsx(
                            S,
                            {
                              ref: x => (r.current[p] = x),
                              style: { transitionDelay: `${p >= o ? (p - o) * 100 : 0}ms` },
                              children: u(h),
                            },
                            p,
                          ),
                        },
                        p,
                      ),
                    ),
                }),
          }),
          a.jsx('a', {
            className: 'inline-link archive-link',
            href: '/archive',
            ref: t,
            children: 'show all projects',
          }),
        ],
      }),
    });
  };
Y.propTypes = { projects: _.array };
export { Y as P, w as T };
