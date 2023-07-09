import type { RootState } from "@react-three/fiber";
import { Quaternion, Euler, Vector3, type AnimationAction } from "three";

const LERP_SPEED = 0.1;

let prevPercent = 0;

function scrollPercent() {
  const scroll = document.documentElement.scrollTop;

  const totalScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  return scroll / totalScroll;
}

const position = new Vector3(0, 0, 0);
const rotation = new Euler(0, 0, 0);

const quaternion = new Quaternion();

const initialCamera = {
  position: new Vector3(0, 0, 0),
  rotation: new Euler(0, 0, 0),
}

export function animation(renderer: RootState) {
  if (rotation.x === 0 && rotation.y === 0 && rotation.z === 0) {
    rotation.setFromRotationMatrix(renderer.camera.matrix);
    initialCamera.rotation.copy(renderer.camera.rotation);
    initialCamera.position.copy(renderer.camera.position);
  }

  let percent = scrollPercent();

  if (prevPercent === percent) return;

  if (+percent.toFixed(5) === 0) {
    rotation.y = 0;
    position.set(0, 0, 0);
  } else if (percent > 0.9) {
    position.set(percent, percent, percent);
    rotation.y = (percent * -25 * Math.PI) / 180;
    rotation.z = (percent * -25 * Math.PI) / 180;
  } else {
    rotation.y = (percent * Math.PI) / 2;
    rotation.z = 0;
    position.set(
      percent * 100,
      percent * 100 + 25,
      percent > 0.1 ? percent * 10 - 10 : 0,
    );
  }

  renderer.camera.position.lerp(position, LERP_SPEED);

  renderer.camera.quaternion.slerp(
    quaternion.setFromEuler(rotation),
    LERP_SPEED,
  );

  prevPercent = percent;
}

type Coord = Vector3 | Euler;

type Coords = [Coord, Coord];

function calculateTimeToLerp(...coordsArray: Coords[]) {
  let maxDistance = 0;

  coordsArray.forEach(([coord1, coord2]) => {
    if (coord1 instanceof Euler && coord2 instanceof Euler) {
      const distance = new Vector3().setFromEuler(coord1).distanceTo(new Vector3().setFromEuler(coord2));

      if (distance > maxDistance) maxDistance = distance;
    } else {
      const distance = (coord1 as Vector3).distanceTo(coord2 as Vector3);

      if (distance > maxDistance) maxDistance = distance;
    }
  });

  return maxDistance / LERP_SPEED;

}

export function getStartedAnimation(renderer: RootState) {

  const time = calculateTimeToLerp(
    [renderer.camera.position, initialCamera.position],
    [renderer.camera.rotation, initialCamera.rotation],
    [renderer.scene.scale, new Vector3(0.1, 0.1, 0.1)],
  );

  if (time < 1) {
    window.location.href = "/docs/getting-started"
  }

  renderer.scene.scale.lerp(new Vector3(0.1, 0.1, 0.1), LERP_SPEED);

  renderer.camera.position.lerp(initialCamera.position, LERP_SPEED);

  renderer.camera.quaternion.slerp(
    quaternion.setFromEuler(initialCamera.rotation),
    LERP_SPEED,
  );

}