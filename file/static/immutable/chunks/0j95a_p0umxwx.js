(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  44324,
  (e) => {
    "use strict";
    var s = e.i(43476),
      a = e.i(92768),
      l = e.i(63837);
    e.s([
      "default",
      0,
      function () {
        let e = (0, l.useStats)(),
          t = (0, l.useNarrow)(),
          r = e?.sealed ?? !0,
          n = e?.vault,
          i = e?.burned,
          d = e?.addresses,
          o = [
            {
              sym: "GLD",
              name: "Tokenized gold — the vault's 10% of collected fees",
              amount: (0, l.fmtNum)(n?.gld, 4),
              value: (0, l.fmtUsd)(n?.gldUsd),
              bg: "var(--gradient-gold)",
            },
            {
              sym: "SCHIFFY",
              name: "100% of collected $SCHIFFY fees — held for partners + liquidity",
              amount: (0, l.fmtNum)(n?.schiffy, 0),
              value: (0, l.fmtUsd)(n?.schiffyUsd),
              bg: "var(--blush-300)",
            },
            {
              sym: "ETH",
              name: "Native gas reserves the vault holds",
              amount: (0, l.fmtNum)(n?.eth, 4),
              value: (0, l.fmtUsd)(n?.ethUsd),
              bg: "var(--ink-900)",
            },
          ];
        return (0, s.jsxs)("main", {
          children: [
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
                  paddingTop: "var(--sp-8)",
                  paddingBottom: "var(--sp-8)",
                },
                children: [
                  r
                    ? (0, s.jsx)(a.Badge, {
                        tone: "paper",
                        dot: !0,
                        children: "Sealed · pre-launch",
                      })
                    : (0, s.jsx)(a.Badge, {
                        tone: "good",
                        dot: !0,
                        children: "Live · on-chain",
                      }),
                  (0, s.jsxs)("div", {
                    style: {
                      display: "flex",
                      flexDirection: t ? "column" : "row",
                      alignItems: t ? "center" : "flex-end",
                      gap: t ? "var(--sp-5)" : "var(--sp-6)",
                      marginTop: "var(--sp-4)",
                      flexWrap: "wrap",
                    },
                    children: [
                      (0, s.jsxs)("div", {
                        style: { flex: 1, minWidth: 280 },
                        children: [
                          (0, s.jsx)("h1", {
                            style: {
                              ...l.DISPLAY,
                              fontSize: t
                                ? "var(--fs-display-m)"
                                : "var(--fs-display-l)",
                            },
                            children: (0, s.jsx)(l.Money, {
                              children: "The $SCHIFFY vault.",
                            }),
                          }),
                          (0, s.jsx)("p", {
                            style: {
                              maxWidth: 560,
                              marginTop: "var(--sp-4)",
                              fontSize: "var(--fs-body-l)",
                              lineHeight: "var(--lh-body)",
                            },
                            children:
                              "10% of collected gold fees settles here — the other 90% goes back to holders — and every $SCHIFFY fee is stacked here too, ready for new partners and liquidity support. He buried it on-chain. He remembers where.",
                          }),
                          (0, s.jsx)("div", {
                            style: {
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "var(--sp-3)",
                              marginTop: "var(--sp-5)",
                              alignItems: "center",
                            },
                            children: r
                              ? (0, s.jsx)(a.Badge, {
                                  tone: "gold",
                                  children: "Vault address appears at launch",
                                })
                              : (0, s.jsx)(l.CopyChip, {
                                  label: "Vault",
                                  address: (0, l.shortAddr)(d?.treasury),
                                  full: d?.treasury,
                                }),
                          }),
                        ],
                      }),
                      (0, s.jsx)(a.Mascot, {
                        size: t ? 190 : 300,
                        src: "/art/vault.png",
                        alt: "The $SCHIFFY vault, ajar with gold inside",
                        wag: !1,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsxs)("section", {
              className: "max",
              style: {
                paddingTop: "var(--sp-7)",
                paddingBottom: "var(--sp-7)",
              },
              children: [
                (0, s.jsxs)("div", {
                  className: "grid-4",
                  children: [
                    (0, s.jsx)(a.Card, {
                      tone: "gold",
                      children: (0, s.jsx)(a.Stat, {
                        label: "Total value",
                        value: (0, l.fmtUsd)(e?.totalValueUsd),
                        size: t ? "sm" : "lg",
                      }),
                    }),
                    (0, s.jsx)(a.Card, {
                      children: (0, s.jsx)(a.Stat, {
                        label: "$GLD accumulated",
                        value: (0, l.fmtNum)(n?.gld, 4),
                        tone: "gold",
                        size: t ? "sm" : "lg",
                        sub:
                          n?.pendingToVault != null && n.pendingToVault >= 1e-4
                            ? `+${(0, l.fmtNum)(
                                n.pendingToVault,
                                4
                              )} on next crank`
                            : "In the vault",
                      }),
                    }),
                    (0, s.jsx)(a.Card, {
                      tone: "cream",
                      children: (0, s.jsx)(a.Stat, {
                        label: "$GLD distributed",
                        value: (0, l.fmtNum)(n?.gldToHolders, 4),
                        tone: "gold",
                        size: t ? "sm" : "lg",
                        sub: "To holders · 90% of fees",
                      }),
                    }),
                    (0, s.jsx)(a.Card, {
                      children: (0, s.jsx)(a.Stat, {
                        label: "$SCHIFFY in vault",
                        value: (0, l.fmtNum)(n?.schiffy, 0),
                        size: t ? "sm" : "lg",
                        sub:
                          i?.pct != null
                            ? `+ ${(0, l.fmtPct)(
                                i.pct
                              )} of supply burned pre-switch${
                                null != i.usd
                                  ? ` (${(0, l.fmtUsd)(i.usd)})`
                                  : ""
                              }`
                            : "100% of $SCHIFFY fees",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)(a.Card, {
                  style: { marginTop: "var(--sp-4)" },
                  children: [
                    (0, s.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "baseline",
                        gap: "var(--sp-3)",
                        marginBottom: "var(--sp-5)",
                      },
                      children: [
                        (0, s.jsx)("h2", {
                          style: {
                            ...l.DISPLAY,
                            fontSize: "var(--fs-heading)",
                          },
                          children: "Assets held",
                        }),
                        (0, s.jsx)("span", {
                          style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: "var(--fs-small)",
                            color: "var(--ink-500)",
                          },
                          children: o.length,
                        }),
                        r &&
                          (0, s.jsx)(a.Badge, {
                            tone: "paper",
                            children: "Figures go live with the contract",
                          }),
                      ],
                    }),
                    t
                      ? (0, s.jsx)("div", {
                          style: { display: "grid", gap: "var(--sp-3)" },
                          children: o.map((e) =>
                            (0, s.jsxs)(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "var(--sp-3)",
                                  paddingBottom: "var(--sp-3)",
                                  borderBottom: "1px solid var(--ink-100)",
                                },
                                children: [
                                  (0, s.jsx)("span", {
                                    style: {
                                      width: 30,
                                      height: 30,
                                      flex: "0 0 auto",
                                      borderRadius: "50%",
                                      border: "2px solid var(--ink-900)",
                                      background: e.bg,
                                    },
                                  }),
                                  (0, s.jsxs)("span", {
                                    style: { flex: 1, minWidth: 0 },
                                    children: [
                                      (0, s.jsx)("span", {
                                        style: {
                                          display: "block",
                                          fontFamily: "var(--font-mono)",
                                          fontWeight: "var(--fw-heavy)",
                                        },
                                        children: e.sym,
                                      }),
                                      (0, s.jsx)("span", {
                                        style: {
                                          display: "block",
                                          fontSize: "var(--fs-caption)",
                                          color: "var(--ink-500)",
                                          overflow: "hidden",
                                          textOverflow: "ellipsis",
                                          whiteSpace: "nowrap",
                                        },
                                        children: e.name,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("span", {
                                    style: {
                                      textAlign: "right",
                                      fontFamily: "var(--font-mono)",
                                    },
                                    children: [
                                      (0, s.jsx)("span", {
                                        style: { display: "block" },
                                        children: e.value,
                                      }),
                                      (0, s.jsx)("span", {
                                        style: {
                                          display: "block",
                                          fontSize: "var(--fs-caption)",
                                          color: "var(--ink-500)",
                                        },
                                        children: e.amount,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.sym
                            )
                          ),
                        })
                      : (0, s.jsx)("div", {
                          style: { overflowX: "auto" },
                          children: (0, s.jsxs)("table", {
                            style: {
                              width: "100%",
                              borderCollapse: "collapse",
                              fontSize: "var(--fs-body)",
                            },
                            children: [
                              (0, s.jsx)("thead", {
                                children: (0, s.jsx)("tr", {
                                  children: [
                                    "Asset",
                                    "",
                                    "Amount",
                                    "Value",
                                  ].map((e, a) =>
                                    (0, s.jsx)(
                                      "th",
                                      {
                                        style: {
                                          ...l.CAPS,
                                          textAlign: a > 1 ? "right" : "left",
                                          padding: "0 0 10px",
                                        },
                                        children: e,
                                      },
                                      a
                                    )
                                  ),
                                }),
                              }),
                              (0, s.jsx)("tbody", {
                                children: o.map((e) =>
                                  (0, s.jsxs)(
                                    "tr",
                                    {
                                      style: {
                                        borderTop: "1px solid var(--ink-100)",
                                      },
                                      children: [
                                        (0, s.jsx)("td", {
                                          style: {
                                            padding: "14px 0",
                                            fontWeight: "var(--fw-heavy)",
                                            fontFamily: "var(--font-mono)",
                                          },
                                          children: (0, s.jsxs)("span", {
                                            style: {
                                              display: "inline-flex",
                                              alignItems: "center",
                                              gap: 10,
                                            },
                                            children: [
                                              (0, s.jsx)("span", {
                                                style: {
                                                  width: 26,
                                                  height: 26,
                                                  borderRadius: "50%",
                                                  border:
                                                    "2px solid var(--ink-900)",
                                                  background: e.bg,
                                                },
                                              }),
                                              e.sym,
                                            ],
                                          }),
                                        }),
                                        (0, s.jsx)("td", {
                                          style: {
                                            padding: "14px 0",
                                            color: "var(--ink-500)",
                                            fontSize: "var(--fs-small)",
                                          },
                                          children: e.name,
                                        }),
                                        (0, s.jsx)("td", {
                                          style: {
                                            padding: "14px 0",
                                            textAlign: "right",
                                            fontFamily: "var(--font-mono)",
                                          },
                                          children: e.amount,
                                        }),
                                        (0, s.jsx)("td", {
                                          style: {
                                            padding: "14px 0",
                                            textAlign: "right",
                                            fontFamily: "var(--font-mono)",
                                            fontWeight: 500,
                                          },
                                          children: e.value,
                                        }),
                                      ],
                                    },
                                    e.sym
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                    (0, s.jsx)("p", {
                      style: {
                        marginTop: "var(--sp-5)",
                        marginBottom: 0,
                        fontSize: "var(--fs-small)",
                        color: "var(--ink-500)",
                        lineHeight: "var(--lh-body)",
                      },
                      children: (0, s.jsx)(l.Money, {
                        children:
                          "Balances read straight from Robinhood Chain and refresh every minute. $SCHIFFY does not represent ownership of gold and holders cannot redeem vault assets.",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(l.CTABand, {}),
          ],
        });
      },
    ]);
  },
]);
