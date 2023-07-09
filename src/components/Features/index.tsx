import { ScrollTrigger, Tween } from "react-gsap";
import {
  feature,
  section,
  title as title_style,
  description as description_style,
} from "./style.css";

const features = [
  {
    title: "Light-weight",
    description: (
      <>
        CDS is intangible, it costs around{" "}
        <strong>5KB plus 2KB per component</strong> in your bundle.
      </>
    ),
  },
  {
    title: "Accessible",
    description:
      "CDS components are handcrafted with Semantic HTML and ARIA standards.",
  },
  {
    title: "Futuristic",
    description: "CDS is not from the past but strives to spark the future.",
  },
  {
    title: "Performant",
    description:
      "CDS employs Lazy loading, tree-shaking and many more technologies for browsers to focus more on the site specific features.",
  },
  {
    title: "Customizable",
    description:
      "CDS components are built using atomic design tokens making them highly customizable.",
  },
  {
    title: "Framework Agnostic",
    description:
      "Whether it is React, Vue, Svelte or barebone vanilla, CDS thrives everywhere out-of-the-box.",
  },
  {
    title: "Max Browser Compatibility",
    description:
      "No polyfill, ponyfill or prollyfill, CDS is completely native using Custom elements and Shadow DOM, so supports most of the browsers.",
  },
  {
    title: "Developer Experience",
    description:
      "CDS is built with developer experience in mind, you get auto-completions, type checking, annotations and many more features in your IDE.",
  },
  {
    title: "Open Source",
    description:
      "CDS is completely open source, so you can contribute to make it better.",
  },
  {
    title: "What's next?",
    description: (
      <>
        Request a new feature{" "}
        <a href="https://github.com/cds-design/continuum/issues/new">
          here
        </a>
        . It may land in next major release.
      </>
    ),
  },
];

export default function Features() {
  return (
    <ScrollTrigger start="top bottom" end="bottom center" scrub={0.5}>
      <section className={section}>
        {features.map(({ title, description }, index) => {
          return (
            <Tween
              from={{
                transform: "translateX(100%) skewY(-20deg)",
              }}
              to={{
                transform: "translate(0%) skewY(0deg)",
              }}
              key={index}
            >
              <div
                className={feature}
                key={index}
                style={
                  {
                    // borderTop: !index ? "1px solid rgba(255, 255, 255, 0.75)" : "none"
                  }
                }
              >
                <h3 className={title_style}>{title}</h3>
                <p className={description_style}>{description}</p>
              </div>
            </Tween>
          );
        })}
      </section>
    </ScrollTrigger>
  );
}
