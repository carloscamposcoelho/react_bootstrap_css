import React, { Component } from "react";

export default class Nav extends Component {
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span class="navbar-brand mb-0 h1">Navbar</span>
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
        )
    }
}