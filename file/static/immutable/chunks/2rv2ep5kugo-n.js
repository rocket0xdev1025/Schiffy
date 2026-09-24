(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  80169,
  (e) => {
    "use strict";
    var t = e.i(43476),
      i = e.i(71645),
      l = e.i(92768),
      a = e.i(63837);
    let s = [
        { slug: "salute", title: "The Salute", id: "fSmenEWxC0XnHDFgwC" },
        { slug: "table-flip", title: "Table Flip", id: "FALtcp7d577ss9lynl" },
        { slug: "lmao", title: "LMAO", id: "FvWgq3pxSZRIvwSRkT" },
        { slug: "zoomies", title: "Zoomies", id: "Ai9hi4i1oVkGS86viA" },
        { slug: "rug-pull", title: "Rug Pull", id: "wLpHeo62f3FMkTubrr" },
        { slug: "beg", title: "Beg", id: "MTu8Y4QIJfvEZ2pPyQ" },
        { slug: "chefs-kiss", title: "Chef's Kiss", id: "k14KE7rn2eFTN2m7Wu" },
        { slug: "gigachad", title: "Gigachad", id: "Nq69haBqXkVtPsabcb" },
        { slug: "sip-tea", title: "Sip Tea", id: "iVjQGA6LIDgGldHQS5" },
        { slug: "king", title: "King", id: "RncyK985xUijsd7Cn2" },
        { slug: "to-the-moon", title: "To The Moon", id: "M6TEZYNgP6GkDTJhf7" },
        { slug: "pump-it", title: "Pump It", id: "0dGaQHJkysRVRpZ7Tj" },
        { slug: "trading", title: "Trading", id: "Oij2K4vAxUeNU07Psv" },
        { slug: "angry", title: "Angry", id: "hQP28oribmJOnlfdpO" },
        { slug: "thumbs-up", title: "Thumbs Up", id: "9cmF4rsfJQnHu3O8wU" },
        { slug: "mind-blown", title: "Mind Blown", id: "UjJHVzQ5009GD0pqis" },
        { slug: "clown", title: "Clown", id: "2JTRC6yqwA8qvLzmuN" },
        { slug: "omg", title: "OMG", id: "eP1m8OfGuEYuSXRlyY" },
        { slug: "popcorn", title: "Popcorn", id: "eFyIcbeb5ZAugPgncG" },
        { slug: "panic-sell", title: "Panic Sell", id: "uYrUTaBE1epcNJ39c6" },
      ],
      r = (e) => ({
        title: e.title,
        kind: "gif",
        src: `/art/memes/${e.slug}.mp4`,
        download: `/api/meme/${e.slug}`,
        dlName: `schiffy-${e.slug}.gif`,
      }),
      d = ["clown", "trading", "to-the-moon"],
      n = [
        ...d.map((e) => r(s.find((t) => t.slug === e))),
        ...s.filter((e) => !d.includes(e.slug)).map(r),
        {
          title: "The Ritual",
          kind: "video",
          src: "/art/ritual.mp4",
          poster: "/art/ritual-poster.jpg",
          download: "/art/ritual.mp4",
        },
        {
          title: "The Grip",
          kind: "image",
          src: "/art/sticker-grip.png",
          download: "/art/sticker-grip.png",
        },
        {
          title: "Yes He Is",
          kind: "image",
          src: "/art/sticker-wink.png",
          download: "/art/sticker-wink.png",
        },
        {
          title: "The Bar Stays",
          kind: "image",
          src: "/art/sticker-zzz.png",
          download: "/art/sticker-zzz.png",
        },
        {
          title: "Nah / Yeah",
          kind: "template",
          src: "/art/memes/templates/drake.jpg",
          download: "/art/memes/templates/drake.jpg",
          dlName: "schiffy-template-nah-yeah.jpg",
        },
        {
          title: "Trade Offer",
          kind: "template",
          src: "/art/memes/templates/trade-offer.jpg",
          download: "/art/memes/templates/trade-offer.jpg",
          dlName: "schiffy-template-trade-offer.jpg",
        },
        {
          title: "Not Smart",
          kind: "template",
          src: "/art/memes/templates/not-smart.jpg",
          download: "/art/memes/templates/not-smart.jpg",
          dlName: "schiffy-template-not-smart.jpg",
        },
      ],
      o = ["All", "GIFs", "Stickers", "Templates", "Film"];
    e.s(
      [
        "default",
        0,
        function () {
          let e = (0, a.useNarrow)(),
            [s, r] = i.default.useState("All"),
            d = n.filter(
              (e) =>
                "All" === s ||
                ("GIFs" === s
                  ? "gif" === e.kind
                  : "Stickers" === s
                  ? "image" === e.kind
                  : "Templates" === s
                  ? "template" === e.kind
                  : "video" === e.kind)
            );
          return (0, t.jsxs)("main", {
            children: [
              (0, t.jsx)("section", {
                style: {
                  backgroundImage: "var(--pattern-dot)",
                  backgroundSize: "var(--pattern-dot-size)",
                  backgroundColor: "var(--cream-100)",
                  borderBottom: "var(--outline)",
                },
                children: (0, t.jsxs)("div", {
                  className: "max",
                  style: {
                    paddingTop: "var(--sp-8)",
                    paddingBottom: "var(--sp-8)",
                  },
                  children: [
                    (0, t.jsx)("h1", {
                      style: {
                        ...a.DISPLAY,
                        fontSize: e
                          ? "var(--fs-display-m)"
                          : "var(--fs-display-l)",
                      },
                      children: "Good boy memes",
                    }),
                    (0, t.jsx)("p", {
                      style: {
                        maxWidth: 520,
                        marginTop: "var(--sp-4)",
                        fontSize: "var(--fs-body-l)",
                        lineHeight: "var(--lh-body)",
                      },
                      children:
                        "Stickers, GIFs, films and blank templates, straight from the vault. Download, caption, post, repeat. The dog trades against WETH.",
                    }),
                    (0, t.jsxs)("div", {
                      style: {
                        display: "flex",
                        gap: "var(--sp-2)",
                        marginTop: "var(--sp-5)",
                        flexWrap: "wrap",
                      },
                      children: [
                        o.map((e) =>
                          (0, t.jsx)(
                            "span",
                            {
                              onClick: () => r(e),
                              style: { cursor: "pointer" },
                              children: (0, t.jsx)(l.Tag, {
                                selected: s === e,
                                tone: "cream",
                                children: e,
                              }),
                            },
                            e
                          )
                        ),
                        (0, t.jsx)("a", {
                          href: "https://giphy.com/channel/SchiffyGld",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          style: { textDecoration: "none" },
                          children: (0, t.jsx)(l.Tag, {
                            tone: "gold",
                            children: "GIPHY channel →",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("section", {
                className: "max",
                style: {
                  paddingTop: "var(--sp-7)",
                  paddingBottom: "var(--sp-8)",
                },
                children: (0, t.jsx)("div", {
                  className: "grid-4",
                  children: d.map((e) =>
                    (0, t.jsxs)(
                      l.Card,
                      {
                        hoverable: !0,
                        padding: "var(--sp-3)",
                        children: [
                          (0, t.jsxs)("div", {
                            style: {
                              position: "relative",
                              aspectRatio: "1 / 1",
                              borderRadius: "var(--r-md)",
                              border: "3px solid var(--ink-900)",
                              background: "var(--cream-200)",
                              display: "grid",
                              placeItems: "center",
                              overflow: "hidden",
                            },
                            children: [
                              "video" === e.kind &&
                                (0, t.jsx)("video", {
                                  controls: !0,
                                  playsInline: !0,
                                  preload: "none",
                                  poster: e.poster,
                                  style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  },
                                  children: (0, t.jsx)("source", {
                                    src: e.src,
                                    type: "video/mp4",
                                  }),
                                }),
                              "gif" === e.kind &&
                                (0, t.jsx)("video", {
                                  autoPlay: !0,
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  preload: "metadata",
                                  style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  },
                                  children: (0, t.jsx)("source", {
                                    src: e.src,
                                    type: "video/mp4",
                                  }),
                                }),
                              "image" === e.kind &&
                                (0, t.jsx)("img", {
                                  src: e.src,
                                  alt: e.title,
                                  loading: "lazy",
                                  style: { width: "82%", height: "auto" },
                                }),
                              "template" === e.kind &&
                                (0, t.jsx)("img", {
                                  src: e.src,
                                  alt: e.title,
                                  loading: "lazy",
                                  style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                  },
                                }),
                              "image" !== e.kind &&
                                (0, t.jsx)("span", {
                                  style: {
                                    position: "absolute",
                                    top: 8,
                                    left: 8,
                                    pointerEvents: "none",
                                  },
                                  children: (0, t.jsx)(l.Badge, {
                                    tone: "paper",
                                    children:
                                      "video" === e.kind
                                        ? "Film"
                                        : "template" === e.kind
                                        ? "Template"
                                        : "GIF",
                                  }),
                                }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "var(--sp-2)",
                              marginTop: "var(--sp-3)",
                            },
                            children: [
                              (0, t.jsx)("span", {
                                style: {
                                  flex: 1,
                                  fontWeight: "var(--fw-heavy)",
                                  fontSize: "var(--fs-small)",
                                },
                                children: e.title,
                              }),
                              (0, t.jsx)("a", {
                                href: e.download,
                                download: e.dlName ?? !0,
                                style: { lineHeight: 0 },
                                children: (0, t.jsx)(l.IconButton, {
                                  name: "download",
                                  label: "Download " + e.title,
                                  size: "sm",
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      e.title
                    )
                  ),
                }),
              }),
              (0, t.jsx)(a.CTABand, {}),
            ],
          });
        },
      ],
      80169
    );
  },
]);
