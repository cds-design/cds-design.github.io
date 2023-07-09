import { Tween, ScrollTrigger } from "react-gsap";
import { header, h1, ctButton, span, card } from "./style.css";
import CTA from "./CTA";

const { random, round } = Math;

const text = "Continuum Design System".split("").map((char, index) => {
  if ("CDS ".includes(char)) {
    return (
      <span key={index} className={span} aria-hidden>
        {char}
      </span>
    );
  }

  return (
    <Tween
      to={{
        x: () => random() * 1000 * (-1) ** round(random()),
        y: () => random() * 1000,
        rotation: () => random() * 720 - 360,
        fontSize: 0,
      }}
      key={index}
    >
      <span key={index} className={span} aria-hidden>
        {char}
      </span>
    </Tween>
  );
});

type HeaderProps = {
  getStarted: () => void;
}

export default function Header({ getStarted }: HeaderProps) {
  return (
    <ScrollTrigger start="bottom center" end="bottom+=300px center" scrub={0.5}>
      <header className={header}>
        <Tween
          to={{
            top: 10,
            left: 50,
            fontSize: "1.5rem",
            transform: "translate(0, 0)",
          }}
          force3D
        >
          <h1 className={h1} aria-label="Continuum Design System">
            {text}
          </h1>
        </Tween>
        <Tween
          from={{
            x: "50%",
            y: "50%",
          }}
          to={{
            position: "fixed",
            top: 10,
            right: 50,
            transform: "translate(0, 0)",
            x: "0%",
            y: "0%",
            marginTop: 0,
            fontSize: "0.5rem",
          }}
        >
          <div className={card}>
            {/* <cds-button className={ctButton}>Get Started</cds-button> */}
            <CTA getStarted={getStarted} />
          </div>
        </Tween>
      </header>
    </ScrollTrigger>
  );
}
