import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp/NavbarComp";
import TextEditorCard from "./Components/TextEditorCard/TextEditorCard";
import AboutComp from "./Components/AboutComp/AboutComp";
import ProjectsGrid from "./Components/Projects/ProjectsGrid";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavbarComp />

      <div class="title-page" id="home">
        <TextEditorCard
          title="[Kanishk Chinna]"
          subtitle="//Aspiring Software Engineer"
        />
      </div>

      <h2 id="about-me">//about me</h2>
      <AboutComp />

      <h2 id="projects">//projects</h2>
      <ProjectsGrid />

      {/* <h2 id="resume">//resume</h2> */}

      <h2 id="contact"></h2>
      <Footer id="contact" />
    </div>
  );
}

export default App;
