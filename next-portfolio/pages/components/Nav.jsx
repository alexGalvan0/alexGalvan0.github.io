import Link from 'next/link'
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="/">AG</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" href="/about">About</Link>
                    <Link className="nav-link" href="/blog">Blog</Link>
                    <Link className="nav-link" href="/projects">Projects</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;