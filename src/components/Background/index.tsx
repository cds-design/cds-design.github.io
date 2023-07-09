import type { AnimationAction } from "three";
import { Canvas } from "@react-three/fiber";

import Infinity from "./infinity";
import Stars from "./stars";

type ActionName = "Initial" | "Overview" | "Features";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export type AnimationActions = {
  [x in ActionName]: AnimationAction;
};

export type ModelProps = JSX.IntrinsicElements["group"] & {
  /** Shows the View */
  showView: (value: boolean) => void;
  viewVisible: boolean;
  letsStart: boolean;
};

export default function Background({ showView, viewVisible, letsStart }: ModelProps) {
  return (
    <Canvas
      gl={{
        antialias: false,
        precision: "lowp",
        powerPreference: "high-performance",
      }}
      performance={{
        debounce: 0.4e3,
      }}
      camera={{
        position: [0, 25, 0],
        rotation: [-Math.PI / 2, 0, 0],
        fov: 25,
        near: 0.1,
        far: 150,
      }}
    >
      <Infinity showView={showView} viewVisible={viewVisible} letsStart={letsStart} />
      <Stars visibility={viewVisible} />
    </Canvas>
  );
}
