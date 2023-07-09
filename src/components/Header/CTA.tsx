import { SyntheticEvent } from "react";
import { ctButton } from "./style.css";

export default function CTA({ getStarted }: { getStarted: () => void }) {
    const celebrate = (event: SyntheticEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        getStarted();
    }
    return (
        <a onClick={celebrate} href="/docs/getting-started">
            <cds-button className={ctButton}>Get Started</cds-button>
        </a>
    )
}