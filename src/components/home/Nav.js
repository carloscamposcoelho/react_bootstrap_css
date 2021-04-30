
export default function Nav () {
    return (
        <>
        <nav id="menu" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Navbar</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#features">Features</a>
                        <a className="nav-link" href="#about">About</a>
                        <a className="nav-link" href="#services">Services</a>
                        <a className="nav-link" href="#gallery">Gallery</a>
                        <a className="nav-link" href="#testimonials">Testimonials</a>
                        <a className="nav-link" href="#team">Team</a>
                        <a className="nav-link" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
        <div id="about" style={{height:"100vh"}}>
            <h1> About</h1>

        </div>
        <div id="services" style={{height:"100vh"}}>
            <h1> Services</h1>

        </div>
        </>
    )
}