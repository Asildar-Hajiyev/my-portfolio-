import Navbar from "../components/Navbar";
import About from "./About";
import Background from "./Background";
import ClickBubbles from "./Clickbubbles";
import Contact from "./Contact";
import Projects from "./Project";
import Skills from "./Skills";

function Main() {
  return (
    <div className="relative">
      <Background />
      <ClickBubbles/>
      <Navbar/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Main;
