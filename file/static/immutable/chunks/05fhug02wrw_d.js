(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  69309,
  (e) => {
    "use strict";
    var s = e.i(43476),
      r = e.i(92768),
      a = e.i(63837);
    function t({
      pct: e,
      title: r,
      sub: l,
      note: i,
      big: o,
      tone: n,
      burn: d,
      compact: c,
    }) {
      let h =
        "burn" === n
          ? "var(--burn)"
          : "gold" === n
          ? "var(--gold-700)"
          : "var(--ink-900)";
      return (0, s.jsxs)("div", {
        style: {
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          background:
            "burn" === n
              ? "var(--burn-soft)"
              : "gold" === n
              ? "var(--gold-200)"
              : "var(--cream-200)",
          border: "var(--outline)",
          borderRadius: "var(--r-md)",
          padding: "var(--sp-4)",
        },
        children: [
          (0, s.jsx)("div", {
            style: {
              fontFamily: "var(--font-mono)",
              fontSize: "var(--fs-title)",
              lineHeight: 1,
              color: h,
            },
            children: e,
          }),
          (0, s.jsx)("div", {
            style: {
              fontWeight: "var(--fw-heavy)",
              fontSize: "var(--fs-body)",
              marginTop: "var(--sp-3)",
            },
            children: r,
          }),
          !c &&
            (0, s.jsx)("div", {
              style: {
                fontSize: "var(--fs-small)",
                color: "var(--ink-500)",
                marginTop: 2,
                lineHeight: "var(--lh-body)",
              },
              children: l,
            }),
          i &&
            (0, s.jsx)("div", {
              style: {
                fontFamily: "var(--font-mono)",
                fontSize: o ? "var(--fs-heading)" : "var(--fs-small)",
                fontWeight: o ? "var(--fw-heavy)" : void 0,
                lineHeight: "var(--lh-title)",
                color: h,
                marginTop: "auto",
                paddingTop: "var(--sp-3)",
              },
              children: i,
            }),
          d && (0, s.jsx)(a.BurnPuff, {}),
        ],
      });
    }
    function l({ side: e, currency: i, split: o, branches: n }) {
      let d = (0, a.useNarrow)();
      return (0, s.jsxs)(r.Card, {
        hoverable: !0,
        style: { display: "flex", flexDirection: "column" },
        children: [
          (0, s.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "var(--sp-3)",
            },
            children: [
              (0, s.jsx)(r.Badge, {
                tone: "The WETH side" === e ? "gold" : "blush",
                children: e,
              }),
              (0, s.jsxs)("span", {
                style: { fontSize: "var(--fs-small)", color: "var(--ink-500)" },
                children: ["fees collected in ", i],
              }),
              (0, s.jsx)("div", { style: { flex: 1 } }),
              (0, s.jsx)("span", {
                style: {
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--fs-small)",
                },
                children: o,
              }),
            ],
          }),
          (0, s.jsx)("div", {
            style: { marginTop: "var(--sp-4)", textAlign: "center" },
            children: (0, s.jsx)("span", {
              style: {
                display: "inline-block",
                background: "var(--ink-900)",
                color: "var(--cream-100)",
                borderRadius: "var(--r-pill)",
                padding: "6px 18px",
                fontSize: "var(--fs-caption)",
                fontWeight: "var(--fw-heavy)",
                letterSpacing: "var(--ls-caps)",
                textTransform: "uppercase",
              },
              children: "Trades come in",
            }),
          }),
          (0, s.jsx)(a.Fork, { count: n.length }),
          (0, s.jsx)("div", {
            style: {
              flex: 1,
              display: "grid",
              gridTemplateColumns: `repeat(${n.length}, 1fr)`,
              gap: "var(--sp-3)",
            },
            children: n.map((e) =>
              (0, s.jsx)(t, { ...e, compact: d }, e.title)
            ),
          }),
        ],
      });
    }
    e.s([
      "default",
      0,
      function () {
        let e = (0, a.useStats)(),
          t = (0, a.useNarrow)(),
          i = e?.vault,
          o = e?.burned;
        return (0, s.jsxs)("main", {
          children: [
            (0, s.jsx)(a.MotionStyles, {}),
            (0, s.jsx)("section", {
              style: {
                backgroundImage: "var(--pattern-dot)",
                backgroundSize: "var(--pattern-dot-size)",
                backgroundColor: "var(--cream-100)",
                borderBottom: "var(--outline)",
              },
              children: (0, s.jsxs)("div", {
                className: "max",
                style: {
                  paddingTop: t ? "var(--sp-6)" : "var(--sp-8)",
                  paddingBottom: t ? "var(--sp-6)" : "var(--sp-8)",
                  display: "flex",
                  flexDirection: t ? "column" : "row",
                  alignItems: "center",
                  gap: t ? "var(--sp-5)" : "var(--sp-7)",
                },
                children: [
                  (0, s.jsxs)("div", {
                    style: {
                      flex: 1,
                      minWidth: 0,
                      maxWidth: "var(--container-narrow)",
                    },
                    children: [
                      (0, s.jsx)("div", {
                        style: { ...a.CAPS, marginBottom: "var(--sp-3)" },
                        children: "The mechanics",
                      }),
                      (0, s.jsx)("h1", {
                        style: {
                          ...a.DISPLAY,
                          fontSize: t
                            ? "var(--fs-display-m)"
                            : "var(--fs-display-l)",
                        },
                        children: "How it works",
                      }),
                      (0, s.jsx)("p", {
                        style: {
                          marginTop: "var(--sp-4)",
                          fontSize: t ? "var(--fs-body)" : "var(--fs-body-l)",
                          lineHeight: "var(--lh-body)",
                        },
                        children: (0, s.jsx)(a.Money, {
                          children:
                            "$SCHIFFY trades against WETH on Robinhood Chain, in a Uniswap v4 pool. Trading fees accrue on both sides of the pair, and every fee the machine collects splits the same way, every time. No promises, no roadmap theatrics — just the split.",
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(r.Mascot, { size: t ? 140 : 220, src: a.SRC }),
                ],
              }),
            }),
            (0, s.jsxs)("section", {
              className: "max",
              style: {
                paddingTop: "var(--sp-8)",
                paddingBottom: "var(--sp-8)",
              },
              children: [
                (0, s.jsx)(a.SectionHead, {
                  title: "Where the fees go",
                  sub: "Two currencies come in. SCHIFFY goes to the vault in full; WETH splits 90/10, holders / vault. The collect crank is permissionless — anyone triggers it, and the split settles on-chain automatically. Holder rewards are then published from a verifiable snapshot, and anyone can execute the claims.",
                }),
                (0, s.jsxs)("div", {
                  className: "grid-2",
                  style: { marginTop: "var(--sp-6)" },
                  children: [
                    (0, s.jsx)(l, {
                      side: "The WETH side",
                      currency: "WETH",
                      split: "90 / 10",
                      branches: [
                        {
                          pct: "90%",
                          title: "Paid to holders",
                          sub: "WETH, claimable on-chain by $SCHIFFY holders",
                          note:
                            i?.gldToHolders != null
                              ? `${(0, a.fmtNum)(
                                  i.gldToHolders,
                                  2
                                )} WETH distributed`
                              : null,
                          tone: "gold",
                        },
                        {
                          pct: "10%",
                          title: "Buried in the vault",
                          sub: "Buried in the Yard. Not Sold.",
                          note:
                            i?.gld != null
                              ? `${(0, a.fmtNum)(i.gld, 4)} WETH held`
                              : null,
                          big: !0,
                        },
                      ],
                    }),
                    (0, s.jsx)(l, {
                      side: "The dog side",
                      currency: "$SCHIFFY",
                      split: "100",
                      branches: [
                        {
                          pct: "100%",
                          title: "Stacked in the vault",
                          sub: "Every $SCHIFFY fee is held in the vault — ammo for new partners and liquidity support, not dumped on the market",
                          note:
                            i?.schiffy != null
                              ? `${(0, a.fmtNum)(i.schiffy, 0)} $SCHIFFY held`
                              : "goes live with the contract",
                          big: !0,
                        },
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(r.Card, {
                  tone: "ink",
                  hoverable: !0,
                  style: { marginTop: "var(--sp-4)" },
                  children: (0, s.jsxs)("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--sp-6)",
                      flexWrap: "wrap",
                    },
                    children: [
                      (0, s.jsxs)("div", {
                        style: { flex: 1, minWidth: 280 },
                        children: [
                          (0, s.jsx)("div", {
                            style: {
                              ...a.CAPS,
                              color: "var(--cream-300)",
                              marginBottom: "var(--sp-3)",
                            },
                            children: "Net effect",
                          }),
                          (0, s.jsxs)("div", {
                            style: {
                              fontFamily: "var(--font-body)",
                              fontWeight: "var(--fw-heavy)",
                              fontSize: "var(--fs-title)",
                              lineHeight: "var(--lh-title)",
                            },
                            children: [
                              (0, s.jsx)("span", {
                                style: {
                                  fontFamily: "var(--font-mono)",
                                  color: "var(--blush-300)",
                                },
                                children: "100%",
                              }),
                              " of $SCHIFFY to the vault. ",
                              (0, s.jsx)("span", {
                                style: {
                                  fontFamily: "var(--font-mono)",
                                  color: "var(--gold-300)",
                                },
                                children: "90%",
                              }),
                              " of WETH to holders, ",
                              (0, s.jsx)("span", {
                                style: { fontFamily: "var(--font-mono)" },
                                children: "10%",
                              }),
                              " to the vault.",
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            style: {
                              marginTop: "var(--sp-3)",
                              fontSize: "var(--fs-small)",
                              color: "var(--cream-300)",
                              lineHeight: "var(--lh-body)",
                              maxWidth: 460,
                            },
                            children: [
                              (0, s.jsx)(a.Money, {
                                children:
                                  "WETH pays out and the vault fills on both sides. Volume is the engine. The split runs on-chain, not on trust.",
                              }),
                              o &&
                                (0, s.jsxs)("span", {
                                  style: { fontFamily: "var(--font-mono)" },
                                  children: [
                                    " ",
                                    (0, a.fmtPct)(o.pct),
                                    " of supply",
                                    null != o.usd
                                      ? ` (${(0, a.fmtUsd)(o.usd)})`
                                      : "",
                                    " burned before the switch to the vault.",
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(a.BarPile, {}),
                    ],
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className: "max",
              style: { paddingBottom: "var(--sp-9)" },
              children: [
                (0, s.jsx)(a.SectionHead, {
                  title: "Contracts",
                  sub: "Verify before you trade. Always check the address.",
                }),
                (0, s.jsxs)("div", {
                  style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "var(--sp-3)",
                    marginTop: "var(--sp-5)",
                  },
                  children: [
                    (0, s.jsx)(a.CopyChip, {
                      label: "$SCHIFFY",
                      name: "Token",
                      address: (0, a.shortAddr)(e?.addresses?.schiffy),
                      full: e?.addresses?.schiffy,
                    }),
                    e?.addresses?.treasury &&
                      (0, s.jsx)(a.CopyChip, {
                        label: "Vault",
                        address: (0, a.shortAddr)(e.addresses.treasury),
                        full: e.addresses.treasury,
                      }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(a.CTABand, {}),
          ],
        });
      },
    ]);
  },
]);
