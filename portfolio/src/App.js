//Componentes
import About from "./components/About";
import Splash from "./components/Splash/Splash";
import ProjectCard from "./components/ProjectCard";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";

import Typography from "@mui/material/Typography";

//Data
import { projects } from "./projects";

function App() {
  return (
    <div className="App mb-5">
      <Nav />
      <Splash />
      <About />

      <Typography
        className="text-center mb-3 pt-4 bg-light"
        style={{ color: "black", height: "5rem" }}
        varient="h2"
        mt={2}
      >
        PROJECTS
      </Typography>

      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-around flex-wrap gap-4">
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  imagePath={project.imagePath}
                  repoLink={project.repoLink}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
