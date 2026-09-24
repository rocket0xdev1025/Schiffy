(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  52683,
  (e) => {
    "use strict";
    var a = e.i(43476),
      s = e.i(22016),
      r = e.i(92768),
      t = e.i(71645),
      i = e.i(63837);
    function l({ background: e = !1 }) {
      let [s, r] = (0, t.useState)(!1),
        d = (0, i.useNarrow)();
      if (
        ((0, t.useEffect)(() => {
          r(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
        }, []),
        e)
      ) {
        if (d) return null;
        let e = {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            s
              ? (0, a.jsx)("img", {
                  src: "/art/ritual-poster.jpg",
                  alt: "",
                  "aria-hidden": !0,
                  style: e,
                })
              : (0, a.jsx)("video", {
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  "aria-hidden": !0,
                  poster: "/art/ritual-poster.jpg",
                  src: "/art/ritual.mp4",
                  style: e,
                }),
            (0, a.jsx)("div", {
              "aria-hidden": !0,
              style: {
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, var(--cream-100) 32%, rgba(255,246,230,.88) 50%, rgba(255,246,230,.35) 72%, rgba(255,246,230,.05) 100%)",
              },
            }),
          ],
        });
      }
      let o = {
        width: "100%",
        maxWidth: 340,
        aspectRatio: "16 / 9",
        objectFit: "cover",
        display: "block",
        borderRadius: "var(--r-lg)",
        border: "var(--outline-thick)",
        boxShadow: "var(--shadow-sticker-lg)",
        background: "var(--cream-200)",
      };
      return s
        ? (0, a.jsx)("img", {
            src: "/art/ritual-poster.jpg",
            alt: "$SCHIFFY carrying the gold bar",
            style: o,
          })
        : (0, a.jsx)("video", {
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            poster: "/art/ritual-poster.jpg",
            src: "/art/ritual.mp4",
            "aria-label": "$SCHIFFY carrying the gold bar",
            style: o,
          });
    }
    let d = [
      [
        "01",
        "",
        "Not a USD pair. The dog trades directly against gold, on-chain, so $SCHIFFY moves with the hardest money there is.",
        "gold",
      ],
      [
        "02",
        "Gold fees pay $SCHIFFY holders",
        "90% of the $GLD fees the machine collects goes back to holders, claimable on-chain. The other 10% is buried in the vault. Volume compounds it.",
        "cream",
      ],
      [
        "03",
        "Every $SCHIFFY fee goes to the vault",
        "Fees collected in $SCHIFFY are stacked in the vault, not dumped on the market: a war chest for new partners and liquidity support as the dog grows.",
        "blush",
      ],
    ];
    e.s(
      [
        "default",
        0,
        function () {
          let e = (0, i.useStats)(),
            t = (0, i.useNarrow)(),
            o = e?.sealed ?? !0,
            n = e?.vault,
            c = e?.token;
          return (0, a.jsxs)("main", {
            children: [
              (0, a.jsxs)("section", {
                style: {
                  position: "relative",
                  overflow: "hidden",
                  backgroundImage: t ? "var(--pattern-dot)" : "none",
                  backgroundSize: "var(--pattern-dot-size)",
                  backgroundColor: "var(--cream-100)",
                  borderBottom: "var(--outline)",
                },
                children: [
                  (0, a.jsx)(l, { background: !0 }),
                  (0, a.jsxs)("div", {
                    className: "max",
                    style: {
                      position: "relative",
                      paddingTop: t ? "var(--sp-6)" : "var(--sp-9)",
                      paddingBottom: t ? "var(--sp-6)" : "var(--sp-9)",
                    },
                    children: [
                      t &&
                        (0, a.jsx)("div", {
                          style: {
                            display: "grid",
                            placeItems: "center",
                            marginBottom: "var(--sp-5)",
                          },
                          children: (0, a.jsx)(l, {}),
                        }),
                      (0, a.jsxs)("div", {
                        style: { minWidth: 0, maxWidth: t ? "none" : 620 },
                        children: [
                          (0, a.jsxs)("div", {
                            style: {
                              display: "flex",
                              gap: "var(--sp-2)",
                              marginBottom: "var(--sp-4)",
                              flexWrap: "wrap",
                            },
                            children: [
                              (0, a.jsx)(r.Tag, {
                                tone: "sky",
                                children: "Robinhood Chain",
                              }),
                            ],
                          }),
                          (0, a.jsx)("h1", {
                            style: {
                              ...i.DISPLAY,
                              fontSize: t
                                ? "var(--fs-display-m)"
                                : "var(--fs-display-l)",
                            },
                            children: "He doesn't fetch. He accumulates.",
                          }),
                          (0, a.jsx)("p", {
                            style: {
                              maxWidth: 520,
                              marginTop: "var(--sp-5)",
                              fontSize: t
                                ? "var(--fs-body)"
                                : "var(--fs-body-l)",
                              lineHeight: "var(--lh-body)",
                            },
                            children: (0, a.jsx)(i.Money, {
                              children:
                                "Every trade stacks $SCHIFFY in the vault and pays gold back to holders, on-chain. Good boy. Hard money.",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            style: {
                              display: "flex",
                              flexDirection: t ? "column" : "row",
                              gap: "var(--sp-3)",
                              marginTop: "var(--sp-6)",
                              flexWrap: "wrap",
                            },
                            children: [
                              (0, a.jsx)(i.TradeButton, {
                                size: t ? "md" : "lg",
                                fullWidth: t,
                              }),
                              (0, a.jsx)(s.default, {
                                href: "/how",
                                style: {
                                  textDecoration: "none",
                                  width: t ? "100%" : "auto",
                                },
                                children: (0, a.jsx)(r.Button, {
                                  size: t ? "md" : "lg",
                                  variant: "secondary",
                                  fullWidth: t,
                                  children: "How it works",
                                }),
                              }),
                              !t &&
                                (0, a.jsx)(s.default, {
                                  href: "/memes",
                                  style: { textDecoration: "none" },
                                  children: (0, a.jsx)(r.Button, {
                                    size: "lg",
                                    variant: "ghost",
                                    children: "Memes →",
                                  }),
                                }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            style: {
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "var(--sp-3)",
                              marginTop: "var(--sp-6)",
                            },
                            children: [
                              (0, a.jsx)(i.CopyChip, {
                                label: "CA",
                                address: (0, i.shortAddr)(
                                  e?.addresses?.schiffy
                                ),
                                full: e?.addresses?.schiffy || "0x3c934eee3fd33be89d0c0a5d073dcf2ea3b3dc26",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(i.Ticker, {
                text: [
                  "$SCHIFFY × $GLD",
                  "Gold back to holders",
                  "100% of $SCHIFFY fees to the vault",
                  "Good boy. Hard money.",
                ],
              }),
              (0, a.jsxs)("section", {
                className: "max",
                style: {
                  paddingTop: "var(--sp-8)",
                  paddingBottom: "var(--sp-8)",
                },
                children: [
                  (0, a.jsxs)("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--sp-3)",
                      marginBottom: "var(--sp-4)",
                    },
                    children: [
                      (0, a.jsx)("div", {
                        style: { ...i.CAPS },
                        children: (0, a.jsx)(i.Money, {
                          children: "Live · $GLD holdings",
                        }),
                      }),
                      o &&
                        (0, a.jsx)(r.Badge, {
                          tone: "paper",
                          children: "Awaiting launch",
                        }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "grid-holdings",
                    children: [
                      (0, a.jsxs)(r.Card, {
                        tone: "gold",
                        radius: "var(--r-bean)",
                        children: [
                          (0, a.jsx)(r.Stat, {
                            label: "Total treasury value",
                            value: (0, i.fmtUsd)(e?.totalValueUsd),
                            size: "lg",
                          }),
                          (0, a.jsx)("div", {
                            style: {
                              marginTop: "var(--sp-3)",
                              fontFamily: "var(--font-mono)",
                              fontSize: "var(--fs-small)",
                              color: "var(--ink-700)",
                            },
                            children:
                              n?.gld != null
                                ? `${(0, i.fmtNum)(n.gld, 4)} $GLD buried`
                                : "— $GLD buried · figures go live with the contract",
                          }),
                        ],
                      }),
                      (0, a.jsx)(r.Card, {
                        children: (0, a.jsx)(r.Stat, {
                          label: "Treasury gold",
                          value: (0, i.fmtNum)(n?.gld, 4),
                          unit: "$GLD",
                          sub: (0, i.fmtUsd)(n?.gldUsd),
                          tone: "gold",
                        }),
                      }),
                      (0, a.jsx)(r.Card, {
                        children: (0, a.jsx)(r.Stat, {
                          label: "Treasury $SCHIFFY",
                          value: (0, i.fmtNum)(n?.schiffy, 0),
                          unit: "$SCHIFFY",
                          sub:
                            n?.schiffyUsd != null
                              ? `${(0, i.fmtUsd)(
                                  n.schiffyUsd
                                )} \xb7 100% of collected fees`
                              : "100% of collected fees",
                        }),
                      }),
                      (0, a.jsx)(r.Card, {
                        children: (0, a.jsx)(r.Stat, {
                          label: "Pool liquidity",
                          value: (0, i.fmtUsd)(c?.liquidityUsd),
                          sub:
                            c?.poolGld != null
                              ? `${(0, i.fmtNum)(
                                  c.poolGld,
                                  2
                                )} $GLD in the pair`
                              : "—",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("section", {
                style: {
                  background: "var(--white)",
                  borderTop: "var(--outline)",
                  borderBottom: "var(--outline)",
                },
                children: (0, a.jsxs)("div", {
                  className: "max grid-underlying",
                  style: {
                    paddingTop: "var(--sp-9)",
                    paddingBottom: "var(--sp-9)",
                  },
                  children: [
                    (0, a.jsx)(i.SectionHead, {
                      eyebrow: "The underlying",
                      title: "Every ounce minted is his chart.",
                      sub: "$GLD isn't a mascot here: it's the other side of the pair. Tokenized gold, settled on-chain, sits underneath $SCHIFFY's price. When the world wants hard money, the dog eats.",
                    }),
                    (0, a.jsxs)("div", {
                      style: { display: "grid", gap: "var(--sp-3)" },
                      children: [
                        (0, a.jsxs)("div", {
                          className: "grid-3",
                          children: [
                            (0, a.jsx)(r.Card, {
                              tone: "cream",
                              padding: "var(--sp-4)",
                              children: (0, a.jsx)(r.Stat, {
                                label: "Pair side",
                                value: "$GLD",
                                size: "sm",
                              }),
                            }),
                            (0, a.jsx)(r.Card, {
                              tone: "cream",
                              padding: "var(--sp-4)",
                              children: (0, a.jsx)(r.Stat, {
                                label: "In treasury",
                                value: (0, i.fmtNum)(n?.gld, 4),
                                size: "sm",
                              }),
                            }),
                            (0, a.jsx)(r.Card, {
                              tone: "cream",
                              padding: "var(--sp-4)",
                              children: (0, a.jsx)(r.Stat, {
                                label: "Settlement",
                                value: "On-chain",
                                size: "sm",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(r.Card, {
                          tone: "ink",
                          children: (0, a.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "var(--sp-4)",
                            },
                            children: [
                              (0, a.jsx)("div", {
                                style: { flex: 1 },
                                children: (0, a.jsx)(r.Stat, {
                                  label: "$GLD · tokenized gold",
                                  value: (0, i.fmtUsd)(e?.gld?.priceUsd, 2),
                                  tone: "inverse",
                                  sub: "SPDR Gold Trust (NYSE Arca) · live ETF quote",
                                }),
                              }),
                              (0, a.jsx)(r.Badge, {
                                tone: "gold",
                                dot: !0,
                                children: "Live",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("section", {
                className: "max",
                style: {
                  paddingTop: "var(--sp-9)",
                  paddingBottom: "var(--sp-6)",
                },
                children: [
                  (0, a.jsx)(i.SectionHead, {
                    eyebrow: "The ritual",
                    title: "A quiet day of accumulation.",
                    sub: "He digs. He buries. He plants the flag. He remembers where every single one is.",
                  }),
                  (0, a.jsx)(r.Card, {
                    padding: "var(--sp-3)",
                    style: { marginTop: "var(--sp-6)", overflow: "hidden" },
                    children: (0, a.jsx)("video", {
                      controls: !0,
                      playsInline: !0,
                      preload: "metadata",
                      poster: "/art/ritual-poster.jpg",
                      style: {
                        width: "100%",
                        display: "block",
                        borderRadius: "var(--r-md)",
                        border: "3px solid var(--ink-900)",
                      },
                      children: (0, a.jsx)("source", {
                        src: "/art/ritual.mp4",
                        type: "video/mp4",
                      }),
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("section", {
                className: "max",
                style: {
                  paddingTop: "var(--sp-6)",
                  paddingBottom: "var(--sp-9)",
                },
                children: [
                  (0, a.jsx)(i.SectionHead, {
                    eyebrow: "How it works",
                    title: "Three things, then you're caught up.",
                  }),
                  (0, a.jsx)("div", {
                    style: {
                      ...i.CAPS,
                      marginTop: "var(--sp-4)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "var(--ls-mono)",
                      textTransform: "none",
                    },
                    children: "01 · pair / 02 · payout / 03 · vault",
                  }),
                  (0, a.jsx)("div", {
                    className: "grid-3",
                    style: { marginTop: "var(--sp-6)" },
                    children: d.map(([e, s, t, l]) =>
                      (0, a.jsxs)(
                        r.Card,
                        {
                          tone: l,
                          hoverable: !0,
                          children: [
                            (0, a.jsx)("div", {
                              style: {
                                fontFamily: "var(--font-mono)",
                                fontSize: "var(--fs-display-m)",
                                lineHeight: 1,
                                color:
                                  "gold" === l
                                    ? "var(--ink-900)"
                                    : "var(--ink-300)",
                              },
                              children: e,
                            }),
                            s &&
                              (0, a.jsx)("h3", {
                                style: {
                                  ...i.DISPLAY,
                                  fontSize: "var(--fs-heading)",
                                  marginTop: "var(--sp-4)",
                                  lineHeight: "var(--lh-title)",
                                },
                                children: (0, a.jsx)(i.Money, { children: s }),
                              }),
                            (0, a.jsx)("p", {
                              style: {
                                marginTop: "var(--sp-3)",
                                marginBottom: 0,
                                fontSize: "var(--fs-small)",
                                lineHeight: "var(--lh-body)",
                                color:
                                  "gold" === l
                                    ? "var(--ink-700)"
                                    : "var(--ink-500)",
                              },
                              children: (0, a.jsx)(i.Money, { children: t }),
                            }),
                          ],
                        },
                        e
                      )
                    ),
                  }),
                ],
              }),
              (0, a.jsx)(i.CTABand, {}),
            ],
          });
        },
      ],
      52683
    );
  },
]);
