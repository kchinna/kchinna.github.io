import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp/NavbarComp";
import TextEditorCard from "./Components/TextEditorCard/TextEditorCard";
import AboutComp from "./Components/AboutComp/AboutComp";
import ProjectsGrid from "./Components/Projects/ProjectsGrid";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Experiences from "./Components/Experiences/Experiences";

function App() {
  return (
    <div className="App">
      <NavbarComp />

      <div class="title-page" id="home">
        <TextEditorCard
          title="[ Kanishk Chinna ]"
          subtitle="Aspiring Software Engineer"
        />
      </div>
      <AboutComp />
      <ProjectsGrid />
      <Skills />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
