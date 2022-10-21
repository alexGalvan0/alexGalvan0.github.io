import About from "./components/About";
import Splash from "./components/Splash";
import ProjectCard from "./components/ProjectCard";


function App() {
  return (
    <div className="App">
      <Splash />
      <About />

        <ProjectCard
          image='./img/react-restaurant.jpg'
          title='Restaurant Menu'
          description='Used React.js to complete this.'
        />

        </div>

  );
}

export default App;
