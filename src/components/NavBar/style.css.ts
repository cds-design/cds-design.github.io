import { style } from "@vanilla-extract/css";

const nav = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1em 2em",

    position: "fixed",
    inset: "0 0 auto 0",
    zIndex: 1000,

    backdropFilter: "blur(10px)",
})

const title = style({
    lineHeight: 1.1,
    fontFamily: `"Dela Gothic One", sans-serif`,
});

const ctButton = style({
    vars: {
        "--ct-bg-rgb": "var(--custom-accent-rgb)",
    },
});

export { nav, title, ctButton };