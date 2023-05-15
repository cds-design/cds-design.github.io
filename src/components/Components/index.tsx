import { useRef, useState } from "react";
import { section, div, component } from "./style.css";

import { ScrollTrigger } from "react-gsap";

import Nav from "./Nav";
import useDebounce from "ahooks/lib/useDebounce";
import useEventListener from "ahooks/lib/useEventListener";

const { abs, random } = Math;

const components = [
  {
    name: "button",
    jsx: ({ className }: { className: string }) => (
      <cds-button className={className}>Button</cds-button>
    ),
  },
  {
    name: "slider",
    jsx: ({ className }: { className: string }) => (
      <cds-slider className={className}></cds-slider>
    ),
  },
  {
    name: "input",
    jsx: ({ className }: { className: string }) => (
      <cds-input className={className} placeholder="placeholder">
        PlaceHolder
      </cds-input>
    ),
  },
  {
    name: "checkbox",
    jsx: ({ className }: { className: string }) => (
      <cds-check className={className}></cds-check>
    ),
  },
  {
    name: "alert",
    jsx: ({ className }: { className: string }) => (
      <cds-alert type="warn" className={className}>
        This is Alert
      </cds-alert>
    ),
  },
  {
    name: "toggle",
    jsx: ({ className }: { className: string }) => (
      <cds-toggle className={className}></cds-toggle>
    ),
  },
];

export default function Components() {
  const [_activeComponent, setActiveComponent] = useState(
    ~~(random() * components.length)
  );

  const activeComponent = useDebounce(_activeComponent, { wait: 0.4e3 });

  const divRef = useRef<HTMLDivElement>(null);

  useEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      // event.stopPropagation();

      if (abs(event.deltaX) < 10) return;

      let next = activeComponent;

      if (abs(event.deltaX) > 0) next++;
      else next--;

      if (next < 0) next = components.length - 1;
      if (next >= components.length) next = 0;

      setActiveComponent(next);
    },
    {
      target: divRef.current,
      capture: true,
      passive: false,
    }
  );

  const Component = components[activeComponent].jsx;

  return (
    <ScrollTrigger start="top bottom" end="bottom top" scrub={0.5}>
      <section className={section}>
        <div ref={divRef} className={div}>
          <Component className={component} />
          <Nav
            setComponent={setActiveComponent}
            activeComponent={activeComponent}
          />
        </div>
      </section>
    </ScrollTrigger>
  );
}
