(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  22016,
  (e, r, t) => {
    "use strict";
    e.i(47167), Object.defineProperty(t, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return m;
      },
      useLinkStatus: function () {
        return x;
      },
    };
    for (var a in n) Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
    let o = e.r(90809),
      i = e.r(43476),
      s = o._(e.r(71645)),
      l = e.r(95057),
      d = e.r(8372),
      c = e.r(18581),
      u = e.r(18967),
      f = e.r(5550),
      p = e.r(88540),
      v = e.r(91949),
      h = e.r(73668),
      g = e.r(9396);
    function m(r) {
      var t;
      let n,
        a,
        o,
        [m, x] = (0, s.useOptimistic)(v.IDLE_LINK_STATUS),
        b = (0, s.useRef)(null),
        {
          href: k,
          as: j,
          children: S,
          prefetch: w = null,
          passHref: C,
          replace: P,
          shallow: T,
          scroll: F,
          onClick: z,
          onMouseEnter: I,
          onTouchStart: R,
          legacyBehavior: E = !1,
          onNavigate: $,
          transitionTypes: _,
          ref: M,
          unstable_dynamicOnHover: L,
          ...N
        } = r;
      (n = S),
        E &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, i.jsx)("a", { children: n }));
      let O = s.default.useContext(d.AppRouterContext),
        W = !1 !== w,
        A = !1 === w ? "none" : !0 === w ? "full" : "auto",
        B =
          "none" !== A
            ? "auto" === A
              ? g.FetchStrategy.PPR
              : g.FetchStrategy.Full
            : g.FetchStrategy.PPR,
        D = "string" == typeof (t = j || k) ? t : (0, l.formatUrl)(t);
      if (E) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        a = s.default.Children.only(n);
      }
      let U = E ? a && "object" == typeof a && a.ref : M,
        H,
        Y = s.default.useCallback(
          (e) => (
            null !== O &&
              (b.current = (0, v.mountLinkInstance)(e, D, O, B, W, x, H)),
            () => {
              b.current &&
                ((0, v.unmountLinkForCurrentNavigation)(b.current),
                (b.current = null)),
                (0, v.unmountPrefetchableInstance)(e);
            }
          ),
          [W, D, O, B, x, H]
        ),
        X = {
          ref: (0, c.useMergedRef)(Y, U),
          onClick(r) {
            E || "function" != typeof z || z(r),
              E &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(r),
              !O ||
                r.defaultPrevented ||
                (function (r, t, n, a, o, i, l, d = "none") {
                  if ("u" > typeof window) {
                    let c,
                      { nodeName: u } = r.currentTarget;
                    if (
                      ("A" === u.toUpperCase() &&
                        (((c = r.currentTarget.getAttribute("target")) &&
                          "_self" !== c) ||
                          r.metaKey ||
                          r.ctrlKey ||
                          r.shiftKey ||
                          r.altKey ||
                          (r.nativeEvent && 2 === r.nativeEvent.which))) ||
                      r.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, h.isLocalURL)(t)) {
                      a && (r.preventDefault(), location.replace(t));
                      return;
                    }
                    if ((r.preventDefault(), i)) {
                      let e = !1;
                      if (
                        (i({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(99781);
                    s.default.startTransition(() => {
                      f(
                        t,
                        a ? "replace" : "push",
                        !1 === o
                          ? p.ScrollBehavior.NoScroll
                          : p.ScrollBehavior.Default,
                        n.current,
                        l,
                        d
                      );
                    });
                  }
                })(r, D, b, P, F, $, _, A);
          },
          onMouseEnter(e) {
            E || "function" != typeof I || I(e),
              E &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              O && W && (0, v.onNavigationIntent)(e.currentTarget, !0 === L);
          },
          onTouchStart: function (e) {
            E || "function" != typeof R || R(e),
              E &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              O && W && (0, v.onNavigationIntent)(e.currentTarget, !0 === L);
          },
        };
      return (
        (0, u.isAbsoluteUrl)(D)
          ? (X.href = D)
          : (E && !C && ("a" !== a.type || "href" in a.props)) ||
            (X.href = (0, f.addBasePath)(D)),
        (o = E
          ? s.default.cloneElement(a, X)
          : (0, i.jsx)("a", { ...N, ...X, children: n })),
        (0, i.jsx)(y.Provider, { value: m, children: o })
      );
    }
    let y = (0, s.createContext)(v.IDLE_LINK_STATUS),
      x = () => (0, s.useContext)(y);
    ("function" == typeof t.default ||
      ("object" == typeof t.default && null !== t.default)) &&
      void 0 === t.default.__esModule &&
      (Object.defineProperty(t.default, "__esModule", { value: !0 }),
      Object.assign(t.default, t),
      (r.exports = t.default));
  },
  18581,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(71645);
    function a(e, r) {
      let t = (0, n.useRef)(null),
        a = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = t.current;
            e && ((t.current = null), e());
            let r = a.current;
            r && ((a.current = null), r());
          } else e && (t.current = o(e, n)), r && (a.current = o(r, n));
        },
        [e, r]
      );
    }
    function o(e, r) {
      if ("function" != typeof e)
        return (
          (e.current = r),
          () => {
            e.current = null;
          }
        );
      {
        let t = e(r);
        return "function" == typeof t ? t : () => e(null);
      }
    }
    ("function" == typeof t.default ||
      ("object" == typeof t.default && null !== t.default)) &&
      void 0 === t.default.__esModule &&
      (Object.defineProperty(t.default, "__esModule", { value: !0 }),
      Object.assign(t.default, t),
      (r.exports = t.default));
  },
  18967,
  (e, r, t) => {
    "use strict";
    e.i(47167), Object.defineProperty(t, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return m;
      },
      MiddlewareNotFoundError: function () {
        return k;
      },
      MissingStaticPage: function () {
        return b;
      },
      NormalizeError: function () {
        return y;
      },
      PageNotFoundError: function () {
        return x;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return g;
      },
      WEB_VITALS: function () {
        return o;
      },
      execOnce: function () {
        return i;
      },
      getDisplayName: function () {
        return u;
      },
      getLocationOrigin: function () {
        return d;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return v;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return j;
      },
    };
    for (var a in n) Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
    let o = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function i(e) {
      let r,
        t = !1;
      return (...n) => (t || ((t = !0), (r = e(...n))), r);
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => {
        let r = e.charCodeAt(0);
        return !!((r >= 65 && r <= 90) || (r >= 97 && r <= 122)) && s.test(e);
      };
    function d() {
      let { protocol: e, hostname: r, port: t } = window.location;
      return `${e}//${r}${t ? ":" + t : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        r = d();
      return e.substring(r.length);
    }
    function u(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function f(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let r = e.split("?");
      return (
        r[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (r[1] ? `?${r.slice(1).join("?")}` : "")
      );
    }
    async function v(e, r) {
      let t = r.res || (r.ctx && r.ctx.res);
      if (!e.getInitialProps)
        return r.ctx && r.Component
          ? { pageProps: await v(r.Component, r.ctx) }
          : {};
      let n = await e.getInitialProps(r);
      if (t && f(t)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${u(
              e
            )}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E1025", enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let h = "u" > typeof performance,
      g =
        h &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class m extends Error {}
    class y extends Error {}
    class x extends Error {
      constructor(e) {
        super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`);
      }
    }
    class b extends Error {
      constructor(e, r) {
        super(),
          (this.message = `Failed to load static file for page: ${e} ${r}`);
      }
    }
    class k extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function j(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(18967),
      a = e.r(52817);
    function o(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let r = (0, n.getLocationOrigin)(),
          t = new URL(e, r);
        return t.origin === r && (0, a.hasBasePath)(t.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  98183,
  (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return o;
      },
      urlQueryToSearchParams: function () {
        return s;
      },
    };
    for (var a in n) Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
    function o(e) {
      let r = {};
      for (let [t, n] of e.entries()) {
        let e = r[t];
        void 0 === e
          ? (r[t] = n)
          : Array.isArray(e)
          ? e.push(n)
          : (r[t] = [e, n]);
      }
      return r;
    }
    function i(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
        ? ""
        : String(e);
    }
    function s(e) {
      let r = new URLSearchParams();
      for (let [t, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) r.append(t, i(e));
        else r.set(t, i(n));
      return r;
    }
    function l(e, ...r) {
      for (let t of r) {
        for (let r of t.keys()) e.delete(r);
        for (let [r, n] of t.entries()) e.append(r, n);
      }
      return e;
    }
  },
  95057,
  (e, r, t) => {
    "use strict";
    e.i(47167), Object.defineProperty(t, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return s;
      },
      formatWithValidation: function () {
        return d;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var a in n) Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
    let o = e.r(90809)._(e.r(98183)),
      i = /https?|ftp|gopher|file/;
    function s(e) {
      let { auth: r, hostname: t } = e,
        n = e.protocol || "",
        a = e.pathname || "",
        s = e.hash || "",
        l = e.query || "",
        d = !1;
      (r = r ? encodeURIComponent(r).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (d = r + e.host)
          : t &&
            ((d = r + (~t.indexOf(":") ? `[${t}]` : t)),
            e.port && (d += ":" + e.port)),
        l && "object" == typeof l && (l = String(o.urlQueryToSearchParams(l)));
      let c = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || i.test(n)) && !1 !== d)
          ? ((d = "//" + (d || "")), a && "/" !== a[0] && (a = "/" + a))
          : d || (d = ""),
        s && "#" !== s[0] && (s = "#" + s),
        c && "?" !== c[0] && (c = "?" + c),
        (a = a.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${d}${a}${c}${s}`
      );
    }
    let l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function d(e) {
      return s(e);
    }
  },
  18566,
  (e, r, t) => {
    r.exports = e.r(76562);
  },
  63837,
  92768,
  (e) => {
    "use strict";
    var r = e.i(43476),
      t = e.i(71645);
    function n({
      name: e,
      size: t = 20,
      color: a = "var(--ink-900)",
      style: o,
      ...i
    }) {
      let s = `url("https://unpkg.com/lucide-static@0.428.0/icons/${e}.svg")`;
      return (0, r.jsx)("span", {
        "aria-hidden": "true",
        ...i,
        style: {
          display: "inline-block",
          width: t,
          height: t,
          flex: "0 0 auto",
          background: a,
          WebkitMaskImage: s,
          maskImage: s,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          ...o,
        },
      });
    }
    let a = {
        primary: {
          background: "var(--gold-300)",
          color: "var(--ink-900)",
          hover: "var(--gold-200)",
        },
        secondary: {
          background: "var(--white)",
          color: "var(--ink-900)",
          hover: "var(--cream-100)",
        },
        blush: {
          background: "var(--blush-300)",
          color: "var(--ink-900)",
          hover: "var(--blush-200)",
        },
        ink: {
          background: "var(--ink-900)",
          color: "var(--cream-100)",
          hover: "var(--ink-700)",
        },
        ghost: {
          background: "transparent",
          color: "var(--ink-900)",
          hover: "var(--cream-200)",
        },
      },
      o = {
        sm: { fontSize: "var(--fs-small)", padding: "8px 16px" },
        md: { fontSize: "var(--fs-body)", padding: "12px 24px" },
        lg: { fontSize: "var(--fs-body-l)", padding: "16px 34px" },
      };
    function i({
      variant: e = "primary",
      size: n = "md",
      disabled: s = !1,
      fullWidth: l = !1,
      children: d,
      style: c,
      ...u
    }) {
      let [f, p] = t.default.useState(!1),
        [v, h] = t.default.useState(!1),
        g = a[e] || a.primary,
        m = "ghost" === e;
      return (0, r.jsx)("button", {
        disabled: s,
        ...u,
        onMouseEnter: () => p(!0),
        onMouseLeave: () => {
          p(!1), h(!1);
        },
        onMouseDown: () => h(!0),
        onMouseUp: () => h(!1),
        style: {
          font: "inherit",
          fontFamily: "var(--font-body)",
          fontWeight: "var(--fw-strong)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--sp-2)",
          width: l ? "100%" : "auto",
          borderRadius: "var(--r-pill)",
          cursor: s ? "not-allowed" : "pointer",
          border: m ? "3px solid transparent" : "var(--outline)",
          background: s ? "var(--cream-200)" : f && !v ? g.hover : g.background,
          color: s ? "var(--ink-300)" : g.color,
          boxShadow:
            s || m
              ? "none"
              : v
              ? "var(--shadow-sticker-press)"
              : f
              ? "var(--shadow-sticker-lg)"
              : "var(--shadow-sticker)",
          transform:
            s || m
              ? "none"
              : v
              ? "var(--press-sink)"
              : f
              ? "var(--hover-lift)"
              : "none",
          transition:
            "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
          ...o[n],
          ...c,
        },
        children: d,
      });
    }
    let s = { sm: 32, md: 40, lg: 48 };
    function l({
      name: e,
      label: a,
      size: o = "md",
      variant: i = "secondary",
      disabled: d = !1,
      style: c,
      ...u
    }) {
      let [f, p] = t.default.useState(!1),
        [v, h] = t.default.useState(!1),
        g = s[o] || s.md;
      return (0, r.jsx)("button", {
        "aria-label": a,
        disabled: d,
        ...u,
        onMouseEnter: () => p(!0),
        onMouseLeave: () => {
          p(!1), h(!1);
        },
        onMouseDown: () => h(!0),
        onMouseUp: () => h(!1),
        style: {
          width: g,
          height: g,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--r-pill)",
          border: "var(--outline)",
          background: d
            ? "var(--cream-200)"
            : "primary" === i
            ? "var(--gold-300)"
            : "blush" === i
            ? "var(--blush-300)"
            : "var(--white)",
          cursor: d ? "not-allowed" : "pointer",
          padding: 0,
          boxShadow: d
            ? "none"
            : v
            ? "var(--shadow-sticker-press)"
            : f
            ? "var(--shadow-sticker-lg)"
            : "var(--shadow-sticker)",
          transform: d
            ? "none"
            : v
            ? "var(--press-sink)"
            : f
            ? "var(--hover-lift)"
            : "none",
          transition: "all var(--dur-fast) var(--ease-out)",
          ...c,
        },
        children: (0, r.jsx)(n, {
          name: e,
          size: Math.round(0.5 * g),
          color: d ? "var(--ink-300)" : "var(--ink-900)",
        }),
      });
    }
    let d = {
        paper: "var(--white)",
        cream: "var(--cream-200)",
        gold: "var(--gold-300)",
        blush: "var(--blush-200)",
        ink: "var(--ink-900)",
      },
      c = {
        gold: ["var(--gold-300)", "var(--ink-900)"],
        burn: ["var(--burn-soft)", "var(--ink-900)"],
        good: ["var(--good-soft)", "var(--ink-900)"],
        blush: ["var(--blush-300)", "var(--ink-900)"],
        ink: ["var(--ink-900)", "var(--cream-100)"],
        paper: ["var(--white)", "var(--ink-900)"],
      },
      u = {
        cream: "var(--cream-200)",
        sky: "var(--sky-300)",
        mint: "var(--mint-300)",
        lilac: "var(--lilac-300)",
        blush: "var(--blush-300)",
        gold: "var(--gold-200)",
      },
      f = "https://schiffy.gold/art";
    function p({
      size: e = 200,
      wag: t = !0,
      src: n = `${f}/schiffy-mascot.png`,
      alt: a = "$SCHIFFY, holding the bar",
      style: o,
      ...i
    }) {
      return (0, r.jsxs)("span", {
        ...i,
        style: { display: "inline-block", lineHeight: 0, ...o },
        children: [
          (0, r.jsx)("style", {
            children:
              "@keyframes schiffy-wag{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}",
          }),
          (0, r.jsx)("img", {
            src: n,
            alt: a,
            style: {
              width: e,
              height: "auto",
              display: "block",
              transformOrigin: "50% 85%",
              animation: t ? "schiffy-wag 3s var(--ease-out) infinite" : "none",
            },
          }),
        ],
      });
    }
    function v({
      open: e = !0,
      title: t,
      onClose: n,
      footer: a,
      width: o = 460,
      children: i,
      style: s,
      ...d
    }) {
      return e
        ? (0, r.jsx)("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": t,
            style: {
              position: "fixed",
              inset: 0,
              display: "grid",
              placeItems: "center",
              padding: "var(--sp-5)",
              background: "rgba(50,42,39,.45)",
              zIndex: 50,
            },
            children: (0, r.jsxs)("div", {
              ...d,
              style: {
                width: "100%",
                maxWidth: o,
                background: "var(--white)",
                border: "var(--outline-thick)",
                borderRadius: "var(--r-xl)",
                boxShadow: "var(--shadow-sticker-lg)",
                padding: "var(--sp-6)",
                fontFamily: "var(--font-body)",
                ...s,
              },
              children: [
                (0, r.jsxs)("div", {
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--sp-4)",
                    marginBottom: "var(--sp-4)",
                  },
                  children: [
                    (0, r.jsx)("h2", {
                      style: {
                        margin: 0,
                        flex: 1,
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--fs-title)",
                        lineHeight: "var(--lh-title)",
                        color: "var(--ink-900)",
                      },
                      children: t,
                    }),
                    n &&
                      (0, r.jsx)(l, {
                        name: "x",
                        label: "Close",
                        size: "sm",
                        onClick: n,
                      }),
                  ],
                }),
                (0, r.jsx)("div", {
                  style: {
                    fontSize: "var(--fs-body)",
                    lineHeight: "var(--lh-body)",
                    color: "var(--ink-900)",
                  },
                  children: i,
                }),
                a &&
                  (0, r.jsx)("div", {
                    style: {
                      display: "flex",
                      gap: "var(--sp-3)",
                      justifyContent: "flex-end",
                      marginTop: "var(--sp-6)",
                    },
                    children: a,
                  }),
              ],
            }),
          })
        : null;
    }
    e.s(
      [
        "ART_BASE",
        0,
        f,
        "Badge",
        0,
        function ({
          tone: e = "gold",
          dot: t = !1,
          children: n,
          style: a,
          ...o
        }) {
          let [i, s] = c[e] || c.gold;
          return (0, r.jsxs)("span", {
            ...o,
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: i,
              color: s,
              border: "var(--outline)",
              borderRadius: "var(--r-pill)",
              padding: "4px 12px",
              fontFamily: "var(--font-body)",
              fontWeight: "var(--fw-heavy)",
              fontSize: "var(--fs-caption)",
              letterSpacing: "var(--ls-caps)",
              textTransform: "uppercase",
              lineHeight: 1.6,
              ...a,
            },
            children: [
              t &&
                (0, r.jsx)("span", {
                  style: {
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: s,
                    flex: "0 0 auto",
                  },
                }),
              n,
            ],
          });
        },
        "Button",
        0,
        i,
        "Card",
        0,
        function ({
          tone: e = "paper",
          radius: n = "var(--r-lg)",
          padding: a = "var(--sp-5)",
          hoverable: o = !1,
          children: i,
          style: s,
          className: l,
          ...c
        }) {
          let [u, f] = t.default.useState(!1);
          return (0, r.jsx)("div", {
            ...c,
            className: l,
            onMouseEnter: () => o && f(!0),
            onMouseLeave: () => f(!1),
            style: {
              background: d[e] || d.paper,
              color: "ink" === e ? "var(--cream-100)" : "var(--ink-900)",
              border: "var(--outline)",
              borderRadius: n,
              padding: a,
              boxShadow: u
                ? "var(--shadow-sticker-lg)"
                : "var(--shadow-sticker)",
              transform: u ? "var(--hover-lift)" : "none",
              transition: "all var(--dur-base) var(--ease-boing)",
              fontFamily: "var(--font-body)",
              ...s,
            },
            children: i,
          });
        },
        "Dialog",
        0,
        v,
        "Icon",
        0,
        n,
        "IconButton",
        0,
        l,
        "Mascot",
        0,
        p,
        "Stat",
        0,
        function ({
          label: e,
          value: t,
          unit: n,
          sub: a,
          tone: o = "ink",
          align: i = "left",
          size: s = "md",
          style: l,
          ...d
        }) {
          let c =
            "gold" === o
              ? "var(--gold-700)"
              : "burn" === o
              ? "var(--burn)"
              : "inverse" === o
              ? "var(--cream-100)"
              : "var(--ink-900)";
          return (0, r.jsxs)("div", {
            ...d,
            style: { textAlign: i, fontFamily: "var(--font-body)", ...l },
            children: [
              (0, r.jsx)("div", {
                style: {
                  fontSize: "var(--fs-caption)",
                  fontWeight: "var(--fw-heavy)",
                  letterSpacing: "var(--ls-caps)",
                  textTransform: "uppercase",
                  color:
                    "inverse" === o ? "var(--cream-300)" : "var(--ink-500)",
                  marginBottom: "var(--sp-2)",
                },
                children: e,
              }),
              (0, r.jsxs)("div", {
                style: {
                  display: "flex",
                  alignItems: "baseline",
                  gap: 6,
                  justifyContent:
                    "center" === i
                      ? "center"
                      : "right" === i
                      ? "flex-end"
                      : "flex-start",
                },
                children: [
                  (0, r.jsx)("span", {
                    style: {
                      fontFamily: "var(--font-mono)",
                      fontSize:
                        "lg" === s
                          ? "var(--fs-display-m)"
                          : "sm" === s
                          ? "var(--fs-heading)"
                          : "var(--fs-title)",
                      fontWeight: 500,
                      letterSpacing: "var(--ls-mono)",
                      lineHeight: 1.05,
                      color: c,
                    },
                    children: t,
                  }),
                  n &&
                    (0, r.jsx)("span", {
                      style: {
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--fs-body)",
                        color: c,
                      },
                      children: n,
                    }),
                ],
              }),
              a &&
                (0, r.jsx)("div", {
                  style: {
                    marginTop: "var(--sp-2)",
                    fontSize: "var(--fs-small)",
                    color:
                      "inverse" === o ? "var(--cream-300)" : "var(--ink-500)",
                  },
                  children: a,
                }),
            ],
          });
        },
        "Tag",
        0,
        function ({
          tone: e = "cream",
          onRemove: t,
          selected: a = !1,
          children: o,
          style: i,
          ...s
        }) {
          return (0, r.jsxs)("span", {
            ...s,
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--sp-2)",
              background: a ? "var(--ink-900)" : u[e] || u.cream,
              color: a ? "var(--cream-100)" : "var(--ink-900)",
              border: "var(--outline)",
              borderRadius: "var(--r-md)",
              padding: "6px 12px",
              fontFamily: "var(--font-body)",
              fontWeight: "var(--fw-strong)",
              fontSize: "var(--fs-small)",
              ...i,
            },
            children: [
              o,
              t &&
                (0, r.jsx)("button", {
                  onClick: t,
                  "aria-label": "Remove",
                  style: { all: "unset", cursor: "pointer", display: "flex" },
                  children: (0, r.jsx)(n, {
                    name: "x",
                    size: 13,
                    color: a ? "var(--cream-100)" : "var(--ink-900)",
                  }),
                }),
            ],
          });
        },
      ],
      92768
    );
    let h = {
        fontSize: "var(--fs-caption)",
        fontWeight: "var(--fw-heavy)",
        letterSpacing: "var(--ls-caps)",
        textTransform: "uppercase",
        color: "var(--ink-500)",
      },
      g = {
        fontFamily: "var(--font-display)",
        lineHeight: "var(--lh-display)",
        color: "var(--ink-900)",
        margin: 0,
      },
      m = `${f}/schiffy-mascot.png`,
      y = t.default.createContext(null),
      x = t.default.createContext(!1),
      b = () => t.default.useContext(x),
      k = () => t.default.useContext(y);
    function j(e, n) {
      return e
        .split("$")
        .map((e, a) =>
          (0, r.jsxs)(
            t.default.Fragment,
            {
              children: [
                a > 0 &&
                  (0, r.jsx)("span", {
                    style: { fontFamily: "var(--font-body)", fontWeight: 900 },
                    children: "$",
                  }),
                e,
              ],
            },
            n + "-" + a
          )
        );
    }
    function S({ children: e }) {
      return (0, r.jsx)(r.Fragment, {
        children: t.default.Children.toArray(e).map((e, n) =>
          "string" == typeof e
            ? j(e, n)
            : t.default.isValidElement(e) && "string" == typeof e.props.children
            ? t.default.cloneElement(e, { key: n }, j(e.props.children, n))
            : (0, r.jsx)(t.default.Fragment, { children: e }, n)
        ),
      });
    }
    let w = {
        width: 12,
        background:
          "repeating-linear-gradient(180deg,var(--gold-400) 0 8px,var(--cream-200) 8px 16px)",
        backgroundSize: "100% 16px",
        borderLeft: "2px solid var(--ink-900)",
        borderRight: "2px solid var(--ink-900)",
        animation: "pipeY 1.1s linear infinite",
      },
      C = {
        height: 12,
        background:
          "repeating-linear-gradient(90deg,var(--gold-400) 0 8px,var(--cream-200) 8px 16px)",
        backgroundSize: "16px 100%",
        borderTop: "2px solid var(--ink-900)",
        borderBottom: "2px solid var(--ink-900)",
        animation: "pipeX 1.1s linear infinite",
      };
    function P({
      size: e = "md",
      variant: n = "primary",
      fullWidth: a = !1,
      children: o = "Trade $SCHIFFY",
    }) {
      return (0, r.jsx)(i, {
        size: e,
        variant: n,
        fullWidth: a,
        onClick: () =>
          window.open(
            "https://app.uniswap.org/swap?chain=robinhood&outputCurrency=TBA",
            "_blank",
            "noopener,noreferrer"
          ),
        children: (0, r.jsx)(S, { children: o }),
      });
    }
    e.s(
      [
        "BarPile",
        0,
        function ({ count: e = 12 }) {
          return (0, r.jsxs)("div", {
            style: {
              position: "relative",
              display: "flex",
              flexWrap: "wrap-reverse",
              gap: 5,
              width: 206,
              alignContent: "flex-start",
            },
            children: [
              Array.from({ length: e }).map((e, t) =>
                (0, r.jsx)(
                  "span",
                  {
                    style: {
                      width: 46,
                      height: 17,
                      borderRadius: 4,
                      background: "var(--gradient-gold)",
                      border: "2px solid var(--ink-900)",
                      boxShadow: "var(--shadow-inner-gold)",
                      animation: `barIn 5s var(--ease-boing) ${
                        0.38 * t
                      }s infinite`,
                    },
                  },
                  t
                )
              ),
              [
                [14, -16, 0],
                [120, -20, 1.6],
              ].map(([e, t, n], a) =>
                (0, r.jsx)(
                  "span",
                  {
                    style: {
                      position: "absolute",
                      left: e,
                      top: t,
                      fontSize: 19,
                      color: "var(--gold-200)",
                      animation: `sparklePop 3.2s var(--ease-out) ${n}s infinite`,
                    },
                    children: "✦",
                  },
                  "s" + a
                )
              ),
            ],
          });
        },
        "BurnPuff",
        0,
        function () {
          return (0, r.jsx)("span", {
            style: {
              position: "absolute",
              right: 14,
              bottom: 16,
              width: 30,
              height: 30,
              pointerEvents: "none",
            },
            children: [0, 0.7, 1.4].map((e, t) =>
              (0, r.jsx)(
                "span",
                {
                  style: {
                    position: "absolute",
                    left: 8 + 5 * t,
                    bottom: 0,
                    width: 11 + 3 * t,
                    height: 11 + 3 * t,
                    borderRadius: "50%",
                    background: "var(--cream-100)",
                    border: "2px solid var(--ink-300)",
                    animation: `puff 2.1s var(--ease-out) ${e}s infinite`,
                  },
                },
                t
              )
            ),
          });
        },
        "CAPS",
        0,
        h,
        "CTABand",
        0,
        function () {
          let e = k(),
            t = b();
          return (0, r.jsx)("section", {
            style: {
              background: "var(--gradient-gold)",
              borderTop: "var(--outline)",
              borderBottom: "var(--outline)",
            },
            children: (0, r.jsxs)("div", {
              className: "max",
              style: {
                padding: t
                  ? "var(--sp-6) var(--sp-4)"
                  : "var(--sp-8) var(--sp-5)",
                display: "flex",
                flexDirection: t ? "column" : "row",
                alignItems: "center",
                justifyContent: "center",
                gap: t ? "var(--sp-4)" : "var(--sp-7)",
                textAlign: t ? "center" : "left",
                flexWrap: "wrap",
              },
              children: [
                (0, r.jsx)(p, { size: t ? 110 : 150, src: m }),
                (0, r.jsxs)("div", {
                  style: { minWidth: 260, width: t ? "100%" : "auto" },
                  children: [
                    (0, r.jsxs)("h2", {
                      style: {
                        ...g,
                        fontSize: t ? "var(--fs-title)" : "var(--fs-display-m)",
                      },
                      children: [
                        "Good boy. Hard money.",
                        (0, r.jsx)("br", {}),
                        "Ride with the dog.",
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: t ? "column" : "row",
                        gap: "var(--sp-3)",
                        marginTop: "var(--sp-5)",
                        flexWrap: "wrap",
                      },
                      children: [
                        (0, r.jsx)(P, {
                          size: t ? "md" : "lg",
                          variant: "ink",
                          fullWidth: t,
                        }),
                        e?.links?.x &&
                          (0, r.jsx)("a", {
                            href: e.links.x,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                              textDecoration: "none",
                              width: t ? "100%" : "auto",
                            },
                            children: (0, r.jsx)(i, {
                              variant: "secondary",
                              size: t ? "md" : "lg",
                              fullWidth: t,
                              children: "Follow on X →",
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        "CopyChip",
        0,
        function ({ label: e, name: a, address: o, full: i }) {
          let [s, l] = t.default.useState(!1);
          return (0, r.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "var(--sp-3)",
              background: "var(--white)",
              border: "var(--outline)",
              borderRadius: "var(--r-pill)",
              padding: "6px 6px 6px 16px",
              boxShadow: "var(--shadow-sticker)",
              flexWrap: "wrap",
              maxWidth: "100%",
            },
            children: [
              (0, r.jsx)("span", {
                style: { ...h, color: "var(--ink-900)" },
                children: e,
              }),
              a &&
                (0, r.jsx)("span", {
                  style: {
                    fontSize: "var(--fs-small)",
                    color: "var(--ink-500)",
                  },
                  children: a,
                }),
              (0, r.jsx)("code", {
                style: {
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--fs-small)",
                  color: "var(--ink-900)",
                },
                children: o,
              }),
              (0, r.jsxs)("button", {
                onClick: () => {
                  i && navigator.clipboard?.writeText(i).catch(() => {}),
                    l(!0),
                    setTimeout(() => l(!1), 1200);
                },
                disabled: !i,
                style: {
                  all: "unset",
                  cursor: i ? "pointer" : "not-allowed",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: s ? "var(--good-soft)" : "var(--cream-200)",
                  border: "2px solid var(--ink-900)",
                  borderRadius: "var(--r-pill)",
                  padding: "4px 12px",
                  fontSize: "var(--fs-caption)",
                  fontWeight: "var(--fw-heavy)",
                },
                children: [
                  (0, r.jsx)(n, { name: s ? "check" : "copy", size: 13 }),
                  s ? "Copied" : "Copy",
                ],
              }),
            ],
          });
        },
        "DISPLAY",
        0,
        g,
        "Fork",
        0,
        function ({ count: e = 2 }) {
          let t = Array.from({ length: e }, (r, t) => ((t + 0.5) / e) * 100),
            n = t[0],
            a = t[e - 1];
          return (0, r.jsxs)("div", {
            style: {
              position: "relative",
              height: 76,
              margin: "var(--sp-2) 0 -2px",
            },
            children: [
              (0, r.jsx)("div", {
                style: {
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: 0,
                  height: 28,
                  ...w,
                },
              }),
              (0, r.jsx)("div", {
                style: {
                  position: "absolute",
                  left: `${n}%`,
                  width: `${50 - n}%`,
                  top: 28,
                  ...C,
                  animationDirection: "reverse",
                },
              }),
              (0, r.jsx)("div", {
                style: {
                  position: "absolute",
                  left: "50%",
                  width: `${a - 50}%`,
                  top: 28,
                  ...C,
                },
              }),
              t.map((e) =>
                (0, r.jsx)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      left: `${e}%`,
                      transform: "translateX(-50%)",
                      top: 38,
                      height: 40,
                      ...w,
                    },
                  },
                  "p" + e
                )
              ),
              [...new Set([50, ...t])].map((e, t) =>
                (0, r.jsx)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      left: `${e}%`,
                      top: 34,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      background: "var(--gradient-gold)",
                      border: "2px solid var(--ink-900)",
                      transform: "translate(-50%,-50%)",
                      animation: `nodePulse 1.6s var(--ease-boing) ${
                        0.18 * t
                      }s infinite`,
                    },
                  },
                  "n" + e
                )
              ),
            ],
          });
        },
        "Money",
        0,
        S,
        "MotionStyles",
        0,
        function () {
          return (0, r.jsx)("style", {
            children: `
@keyframes pipeY{to{background-position:0 16px}}
@keyframes pipeX{to{background-position:16px 0}}
@keyframes puff{0%{opacity:0;transform:translate(0,0) scale(.45)}18%{opacity:.85}100%{opacity:0;transform:translate(-7px,-28px) scale(1.6)}}
@keyframes barIn{0%{opacity:0;transform:translateY(-22px) rotate(-6deg)}9%{opacity:1;transform:translateY(0) rotate(0)}100%{opacity:1;transform:translateY(0) rotate(0)}}
@keyframes sparklePop{0%,68%{opacity:0;transform:scale(.3)}80%{opacity:1;transform:scale(1.15)}100%{opacity:0;transform:scale(.5)}}
@keyframes nodePulse{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.18)}}
`,
          });
        },
        "NarrowProvider",
        0,
        function ({ children: e }) {
          let n = t.default.useRef(null),
            [a, o] = t.default.useState(!1);
          return (
            t.default.useEffect(() => {
              let e = n.current;
              if (!e) return;
              let r = new ResizeObserver(([e]) => o(e.contentRect.width < 760));
              return r.observe(e), () => r.disconnect();
            }, []),
            (0, r.jsx)("div", {
              ref: n,
              children: (0, r.jsx)(x.Provider, { value: a, children: e }),
            })
          );
        },
        "SRC",
        0,
        m,
        "SectionHead",
        0,
        function ({ eyebrow: e, title: t, sub: n, children: a }) {
          let o = b();
          return (0, r.jsxs)("div", {
            style: { maxWidth: "var(--container-narrow)" },
            children: [
              e &&
                (0, r.jsx)("div", {
                  style: { ...h, marginBottom: "var(--sp-3)" },
                  children: e,
                }),
              (0, r.jsx)("h2", {
                style: {
                  ...g,
                  fontSize: o ? "var(--fs-display-m)" : "var(--fs-display-l)",
                },
                children: t,
              }),
              n &&
                (0, r.jsx)("p", {
                  style: {
                    marginTop: "var(--sp-4)",
                    marginBottom: 0,
                    fontSize: o ? "var(--fs-body)" : "var(--fs-body-l)",
                    lineHeight: "var(--lh-body)",
                  },
                  children: n,
                }),
              a,
            ],
          });
        },
        "StatsProvider",
        0,
        function ({ children: e }) {
          let [n, a] = t.default.useState(null);
          return (
            t.default.useEffect(() => {
              let e = !0,
                r = () =>
                  fetch("/api/stats")
                    .then((e) => e.json())
                    .then((r) => e && a(r))
                    .catch(() => {});
              r();
              let t = setInterval(r, 6e4);
              return () => {
                (e = !1), clearInterval(t);
              };
            }, []),
            (0, r.jsx)(y.Provider, { value: n, children: e })
          );
        },
        "Ticker",
        0,
        function ({ text: e }) {
          return (0, r.jsxs)("div", {
            style: {
              borderTop: "var(--outline)",
              borderBottom: "var(--outline)",
              background: "var(--ink-900)",
              overflow: "hidden",
              padding: "12px 0",
            },
            children: [
              (0, r.jsx)("style", {
                children:
                  "@keyframes marq{from{transform:translateX(0)}to{transform:translateX(-50%)}}",
              }), 
              (0, r.jsx)("div", {
                style: {
                  display: "flex",
                  width: "max-content",
                  animation: "marq 26s linear infinite",
                },
                children: [0, 1].map((t) =>
                  (0, r.jsx)(
                    "div",
                    {
                      style: {
                        display: "flex",
                        gap: "var(--sp-6)",
                        paddingRight: "var(--sp-6)",
                        fontFamily: "var(--font-display)",
                        fontSize: 22,
                        color: "var(--gold-300)",
                        whiteSpace: "nowrap",
                      },
                      children: e.map((e, t) =>
                        (0, r.jsxs)(
                          "span",
                          {
                            style: { display: "flex", gap: "var(--sp-6)" },
                            children: [
                              (0, r.jsx)(S, { children: e }),
                              (0, r.jsx)("span", {
                                style: { color: "var(--cream-500)" },
                                children: "✦",
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    },
                    t
                  )
                ),
              }),
            ],
          });
        },
        "TradeButton",
        0,
        P,
        "fmtNum",
        0,
        (e, r = 2) =>
          null == e
            ? "—"
            : e.toLocaleString("en-US", { maximumFractionDigits: r }),
        "fmtPct",
        0,
        (e) => (null == e ? "—" : e.toFixed(2) + "%"),
        "fmtUsd",
        0,
        (e, r = 0) =>
          null == e
            ? "—"
            : "$" + e.toLocaleString("en-US", { maximumFractionDigits: r }),
        "shortAddr",
        0,
        (e) => (e ? e.slice(0, 8) + "…" + e.slice(-6) : "TBA"),
        "useNarrow",
        0,
        b,
        "useStats",
        0,
        k,
      ],
      63837
    );
  },
  51e3,
  (e) => {
    "use strict";
    var r = e.i(43476),
      t = e.i(63837),
      n = e.i(47167);
    e.i(71645);
    var a = e.i(22016),
      o = e.i(18566),
      i = e.i(92768);
    let s = "1" === n.default.env.NEXT_PUBLIC_VOTE_LIVE;
    function l() {
      let e = (0, t.useStats)(),
        n = e?.addresses,
        o = {
          color: "var(--text-link)",
          textDecoration: "none",
          fontWeight: "var(--fw-strong)",
          fontSize: "var(--fs-small)",
        };
      return (0, r.jsx)("footer", {
        style: {
          borderTop: "var(--outline)",
          backgroundImage: "var(--pattern-dot)",
          backgroundSize: "var(--pattern-dot-size)",
          backgroundColor: "var(--cream-200)",
        },
        children: (0, r.jsxs)("div", {
          className: "max",
          style: { padding: "var(--sp-7) var(--sp-5)" },
          children: [
            (0, r.jsxs)("div", {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--sp-3)",
                justifyContent: "center",
              },
              children: [
                (0, r.jsx)(t.CopyChip, {
                  label: "$SCHIFFY",
                  name: "Token",
                  address: (0, t.shortAddr)(n?.schiffy),
                  full: n?.schiffy || "TBA",
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "var(--sp-5)",
                marginTop: "var(--sp-6)",
                paddingTop: "var(--sp-5)",
                borderTop: "3px solid var(--ink-100)",
                flexWrap: "wrap",
              },
              children: [
                (0, r.jsx)(i.Mascot, {
                  size: 40,
                  wag: !1,
                  src: "/art/nav-icon.png",
                  alt: "$SCHIFFY",
                }),
                (0, r.jsx)("span", {
                  style: {
                    fontSize: "var(--fs-small)",
                    color: "var(--ink-500)",
                  },
                  children: "© 2026 $SCHIFFY",
                }),
                (0, r.jsx)(a.default, {
                  href: "/vault",
                  style: o,
                  children: "Vault",
                }),
                (0, r.jsx)(a.default, {
                  href: "/how",
                  style: o,
                  children: "How it works",
                }),
                (0, r.jsx)(a.default, {
                  href: "/memes",
                  style: o,
                  children: "Memes",
                }),
                s &&
                  (0, r.jsx)(a.default, {
                    href: "/vote",
                    style: o,
                    children: "Vote",
                  }),
                e?.links?.pair &&
                  (0, r.jsx)("a", {
                    href: e.links.pair,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: o,
                    children: "DexScreener",
                  }),
              ],
            }),
            (0, r.jsx)("p", {
              style: {
                marginTop: "var(--sp-5)",
                marginBottom: 0,
                maxWidth: 760,
                fontSize: "var(--fs-small)",
                lineHeight: "var(--lh-body)",
                color: "var(--ink-500)",
              },
              children:
                "$SCHIFFY is a memecoin paired with tokenized $GLD on Robinhood Chain. It does not represent ownership of gold, and holders cannot redeem assets from the treasury. Not an investment product, not financial advice. There is no roadmap; the fee split is a fixed on-chain mechanism, not a promise of profit, and distributions depend entirely on trading volume, which may be zero. Unaffiliated parody; not associated with Peter Schiff, Euro Pacific, SPDR, State Street, or Robinhood.",
            }),
          ],
        }),
      });
    }
    function d() {
      let e = (0, t.useStats)(),
        n = (0, t.useNarrow)(),
        l = (0, o.usePathname)(),
        u = (e, t) => {
          let n = l === e;
          return (0, r.jsx)(
            a.default,
            {
              href: e,
              style: {
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontWeight: "var(--fw-strong)",
                fontSize: "var(--fs-small)",
                whiteSpace: "nowrap",
                color: n ? "var(--ink-900)" : "var(--ink-500)",
                borderBottom: n
                  ? "3px solid var(--gold-400)"
                  : "3px solid transparent",
                padding: "3px 0",
              },
              children: t,
            },
            e
          );
        };
      return (0, r.jsxs)("header", {
        style: {
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "var(--cream-100)",
          borderBottom: "var(--outline)",
        },
        children: [
          (0, r.jsxs)("div", {
            className: "max",
            style: {
              maxWidth: 1280,
              padding: n ? "8px var(--sp-4)" : "10px var(--sp-5)",
              display: "flex",
              alignItems: "center",
              gap: n ? "var(--sp-3)" : "var(--sp-4)",
              flexWrap: "nowrap",
            },
            children: [
              (0, r.jsxs)(a.default, {
                href: "/",
                style: {
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flex: "0 0 auto",
                },
                children: [
                  (0, r.jsx)(i.Mascot, {
                    size: 44,
                    wag: !1,
                    src: "/art/nav-icon.png",
                    alt: "$SCHIFFY",
                  }),
                  (0, r.jsxs)("span", {
                    style: { display: "grid" },
                    children: [
                      (0, r.jsxs)("span", {
                        style: {
                          fontFamily: "var(--font-display)",
                          fontSize: 24,
                          lineHeight: 1,
                          color: "var(--ink-900)",
                        },
                        children: [
                          (0, r.jsx)("span", {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontWeight: 900,
                            },
                            children: "$",
                          }),
                          "SCHIFFY",
                        ],
                      }),
                      (0, r.jsx)("span", {
                        style: {
                          fontSize: 11,
                          fontWeight: "var(--fw-strong)",
                          color: "var(--ink-500)",
                        },
                        children: "Long gold",
                      }),
                    ],
                  }),
                ],
              }),
              !n &&
                (0, r.jsxs)("nav", {
                  style: {
                    display: "flex",
                    gap: "var(--sp-4)",
                    marginLeft: "var(--sp-3)",
                  },
                  children: [
                    u("/", "Home"),
                    u("/vault", "Vault"),
                    u("/how", "How it works"),
                    u("/memes", "Memes"),
                    s && u("/vote", "Vote"),
                  ],
                }),
              (0, r.jsx)("div", { style: { flex: 1 } }),
              !n &&
                (0, r.jsxs)("span", {
                  className: "nav-extras",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--sp-3)",
                  },
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://dexscreener.com/robinhood/TBA",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      style: {
                        textDecoration: "none",
                        fontFamily: "var(--font-body)",
                        fontWeight: "var(--fw-strong)",
                        fontSize: "var(--fs-small)",
                        whiteSpace: "nowrap",
                        color: "var(--ink-900)",
                        borderBottom: "3px solid transparent",
                        padding: "3px 0",
                      },
                      children: "Chart",
                    }),
                    e &&
                      (e.sealed
                        ? (0, r.jsx)(i.Badge, {
                            tone: "paper",
                            dot: !0,
                            children: "Pre-launch",
                          })
                        : (0, r.jsx)(i.Badge, {
                            tone: "good",
                            dot: !0,
                            children: "Live",
                          })),
                  ],
                }),
              (0, r.jsx)(t.TradeButton, {
                size: "sm",
                children: n ? "Trade" : "Trade $SCHIFFY",
              }),
            ],
          }),
          n &&
            (0, r.jsxs)("div", {
              className: "noscroll",
              style: {
                display: "flex",
                alignItems: "center",
                gap: "var(--sp-4)",
                padding: "0 var(--sp-4) 8px",
                overflowX: "auto",
              },
              children: [
                u("/", "Home"),
                u("/vault", "Vault"),
                u("/how", "How it works"),
                u("/memes", "Memes"),
                s && u("/vote", "Vote"),
                (0, r.jsx)("a", {
                  href: "https://dexscreener.com/robinhood/TBA",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: {
                    flex: "0 0 auto",
                    marginLeft: "auto",
                    textDecoration: "none",
                    fontFamily: "var(--font-body)",
                    fontWeight: "var(--fw-strong)",
                    fontSize: "var(--fs-small)",
                    whiteSpace: "nowrap",
                    color: "var(--ink-900)",
                    borderBottom: "3px solid transparent",
                    padding: "3px 0",
                  },
                  children: "Chart",
                }),
              ],
            }),
        ],
      });
    }
    e.s(
      [
        "default",
        0,
        function ({ children: e }) {
          return (0, r.jsx)(t.StatsProvider, {
            children: (0, r.jsxs)(t.NarrowProvider, {
              children: [(0, r.jsx)(d, {}), e, (0, r.jsx)(l, {})],
            }),
          });
        },
      ],
      51e3
    );
  },
]);
