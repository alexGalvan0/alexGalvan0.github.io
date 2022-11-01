import './Splash.css'
function Splash() {
    return (
<>
<div className="d-flex text-bg-dark splash" style={{height:'80vh'}}>
    
<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header className="mb-auto">
    <div>
      <nav className="nav nav-masthead justify-content-center float-md-end">
        {/* <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
        <a className="nav-link fw-bold py-1 px-0" href="#">Features</a>
        <a className="nav-link fw-bold py-1 px-0" href="#">Contact</a> */}
      </nav>
    </div>
  </header>

  <main className="px-3 d-flex justify-content-center align-items-center flex-column text-dark" style={{height:'80vh'}}>
    <h1>ALEX GALVAN</h1>
    <p className="lead">Full Stack Developer</p>
    <p className="lead">
      <a href="#about" className="btn btn-lg btn-secondary fw-bold border-white bg-dark">About Me</a>
    </p> 
  </main>
</div>


    
  

</div>
</>
    )
}

export default Splash;