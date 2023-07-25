import { Tween } from "react-gsap"
import type { TweenProps } from "react-gsap/dist/Tween"
import { isPortrait } from "."

export function Animate(props: TweenProps) {
    if (isPortrait()) {
        return props.children as JSX.Element
    }

    return (
        <Tween
            {...props}
        >
            {props.children}
        </Tween >
    )

}