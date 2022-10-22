import About from "./components/About";
import Splash from "./components/Splash";
import ProjectCard from "./components/ProjectCard";

import Grid from "@mui/material/Grid";

import { projects } from "./projects";

function App() {
  console.log(projects.length);

  return (
    <div className="App" grid>
      <Splash />
      <About />
      <Grid className="container-fluid d-flex justify-content-around gap-2">
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
      </Grid>
    </div>
  );
}

export default App;
