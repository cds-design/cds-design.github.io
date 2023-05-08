import { type ComplexStyleRule, style } from "@vanilla-extract/css";

const section = style({
  position: "relative",
  marginInline: 100,
});

const img = style({
  width: "100%",
  height: "100%",
  maxHeight: "75vh",
  paddingBlock: 100,
  objectFit: "contain",
});

const before_img = style({
  position: "absolute",
  inset: 0,
});

const indications: ComplexStyleRule = {
  position: "absolute",
  writingMode: "vertical-rl",
  height: "100%",
  maxHeight: "75vh",
  top: 0,
  fontFamily: `"Dela Gothic One", sans-serif`,
  fontSize: "5em",
};

const before = style({
  ...indications,
  transform: "scale(-1, -1)",
  left: 0,
});

const after = style({
  ...indications,
  right: 0,
  opacity: 0,
});

const gradient_text = style({
  WebkitBackgroundClip: "text !important",
  backgroundClip: "text !important",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  background:
    "linear-gradient(352deg, rgb(92 72 163) 0%, rgb(158 83 117) 30%, rgb(245 110 88) 100%);",
});

export { section, img, before_img, before, after, gradient_text };
