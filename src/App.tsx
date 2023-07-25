import "./App.css";

import { load } from "cds-design";
import useFullscreen from "ahooks/lib/useFullscreen";
import useBoolean from "ahooks/lib/useBoolean";

import Background from "./components/Background";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Features from "./components/Features";
import Comparison from "./components/Comparison";
import Components from "./components/Components";
import Footer from "./components/Footer";
import { isPortrait } from "./helpers";
import NavBar from "./components/NavBar";

load("button", "alert", "input", "toggle", "check", "slider");

function App() {
  const [viewVisible, { set: showView }] = useBoolean(isPortrait());
  const [letsStart, { setTrue: getStarted }] = useBoolean();

  const [isFullscreen, { enterFullscreen }] = useFullscreen(
    document.documentElement,
  );

  return (
    <main>
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          padding: 0,
        }}
      >
        <Background showView={showView} viewVisible={viewVisible} letsStart={letsStart} />
      </div>
      {isPortrait()
        ? (
          <>
            <NavBar />
            <Overview />
            <Features />
            <Components />
            <Footer />
          </>
        )
        : (viewVisible &&
          (
        <>
          <Header getStarted={getStarted} />
          <Overview />
          <Features />
          <Components />
          <Comparison />
          <Footer />
        </>
          ))
      }
      <img
        src="./bg.svg"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -100,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
        alt=""
      />
    </main>
  );
}

export default App;
