import About from "./components/About";
import Splash from "./components/Splash";
import ProjectCard from "./components/ProjectCard";

import { projects } from "./projects";


function App() {
   console.log(projects)

  return (
    <div className="App" grid>
      <Splash />
      <About />

      < ProjectCard
        imagePath="./img/react-restaurant.jpg"
        title="Restaurant Menu"
        description="Used React.js to complete this."
        repoLink="https://github.com/alexGalvan0/react-restaurant"
      />

      <ProjectCard
        imagePath="./img/tic-tac-toe.jpg"
        title="Tic-Tac-Toe"
        description="Used React.js to complete this."
        repoLink="https://github.com/alexGalvan0/tic-tac-toe"
      />
    </div>
  );
}

export default App;
