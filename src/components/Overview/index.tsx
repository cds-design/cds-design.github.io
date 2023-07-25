import { Tween, ScrollTrigger } from "react-gsap";

import { section, h2, span, gradient } from "./style.css";
import { Animate } from "../../helpers";

export default function () {
  const rollUp = {
    from: {
      opacity: 0,
      transform: "rotateX(90deg)",
    },
    to: {
      opacity: 1,
      transform: "rotate(0deg)",
    },
  };

  return (
    <section className={section}>
      <h2 className={h2}>
        <ScrollTrigger start="-200px center" end="200px center" scrub={0.5}>
          <Animate {...rollUp}>
            <span className={span}>The</span>
          </Animate>
          <Animate {...rollUp}>
            <span className={[gradient, span].join(" ")}>Design system</span>
          </Animate>
          <Animate {...rollUp}>
            <span className={span}>from the</span>
          </Animate>
          <Animate {...rollUp}>
            <span className={[gradient, span].join(" ")}>future</span>
          </Animate>
          <Animate {...rollUp}>
            <span className={span}>into your</span>
          </Animate>
          <Animate {...rollUp}>
            <span className={span}>hands</span>
          </Animate>
        </ScrollTrigger>
      </h2>
    </section>
  );
}
