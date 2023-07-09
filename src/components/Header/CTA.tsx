import { ctButton } from "./style.css";

export default function CTA({ getStarted }: { getStarted: () => void }) {
    const celebrate = () => {
        getStarted();
    }
    return (
        <>
            <cds-button className={ctButton} onClick={celebrate}>Get Started</cds-button>
        </>
    )
}