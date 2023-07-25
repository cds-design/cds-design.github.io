import { ctButton, nav, title } from "./style.css";

export default function NavBar() {
    return (
        <nav className={nav}>
            <h2 className={title}>CDS</h2>
            <cds-button className={ctButton}>Get Started</cds-button>
        </nav>
    )
}