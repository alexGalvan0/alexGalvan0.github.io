//Componentes
import About from "./components/About";
import Splash from "./components/Splash/Splash";
import ProjectCard from "./components/ProjectCard";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import ContactCard from "./components/ContactCard";
import Blog from "./components/Blog";

import Typography from "@mui/material/Typography";

//Data
import { projects } from "./projects";
import { blogs } from "./Blogs";

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
                  liveDemo={project.liveDemo}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="col">
        <Typography
          className="text-center mb-3 pt-4 bg-light"
          style={{ color: "black", height: "5rem" }}
          varient="h2"
          mt={2}
        >
          CONTACT
        </Typography>
        <div className="col d-flex justify-content-center ">
          <ContactCard />
        </div>
        <Typography
          className="text-center mb-3 pt-4 bg-light"
          style={{ color: "black", height: "5rem" }}
          varient="h2"
          mt={2}
        >
          AWESOME INC WEB DEV BOOTCAMP BLOG
        </Typography>
        <div className="row-12">
          <div className="col d-flex justify-content-center flex-column p-5">
            {blogs.map((blog) => {
              return (
                <Blog
                  key={blog.id}
                  id={blog.id}
                  classSetting={blog.classSetting}
                  control={blog.control}
                  week={blog.week}
                  date={blog.date}
                  answer={blog.answer}
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
