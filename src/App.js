import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp/NavbarComp";
import TextEditorCard from "./Components/TextEditorCard/TextEditorCard";
import AboutComp from "./Components/AboutComp/AboutComp";
import ProjectsGrid from "./Components/Projects/ProjectsGrid";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Experiences from "./Components/Experiences/Experiences";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp />
        <TextEditorCard
          title="[ Kanishk Chinna ]"
          subtitle="computer science student"
          subtitle2="aspiring software engineer"
          id="home"
        />
        <AboutComp id="about-me" />
        <ProjectsGrid />
        <Skills />
        <Experiences />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
