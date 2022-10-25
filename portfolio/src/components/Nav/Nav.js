import './Nav.css'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand link-light" href="#">
          AG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" >
            <a className="nav-link link-light" href="#projects">
              Projects
            </a>
            <a className="nav-link link-light" href="#projects">
              Blog
            </a>
            <a className="nav-link link-light" href="#contact-card">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;