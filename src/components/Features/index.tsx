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
    description:
      "CDS weighs around 5KB plus 2KB per component. Learn more at https://bundlephobia.com/package/ct-ds@0.0.1",
  },
  {
    title: "Accessible",
    description:
      "Each of the components is handcrafted with Semantic HTML and ARIA standards",
  },
  {
    title: "Futuristic",
    description:
      "The design system is not from the past but strives to spark the future",
  },
  {
    title: "Performant",
    description:
      "Lazy loading, tree-shaking and many more technologies for browsers to focus more on the site specific features.",
  },
  {
    title: "Customizable",
    description:
      "CDS components are made of atomic design tokens making them highly customizable",
  },
  {
    title: "Framework Agnostic",
    description:
      "Whether it is React , Vue , Svelte or barebone vanilla , CDS thrives everywhere out-of-the-box",
  },
  {
    title: "Max Browser Compatibility",
    description:
      "No polyfill, ponyfill or prollyfill, CDS is completely native using Custom elements and Shadow DOM, so supports most of the browsers.",
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
