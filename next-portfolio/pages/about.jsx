import { useState } from "react";
import Nav from "./components/Nav";

function About() {
  const [page, setPage] = useState("page1");

  const handleClick = () => {
    if (page == "page1") {
      setPage("page2");
    } else {
      setPage("page1");
    }
  };

  return (
    <>

        <Nav />
        <button onClick={handleClick}>Get new page</button>
        <div className="row">
          <div className="col">
            {page == "page1" ? <h2>Hello World</h2> : <h2>Goodbye World</h2>}
          </div>
        </div>
  
    </>
  );
}

export default About;
