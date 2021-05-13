import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default function Navigation() {
    return (
        <Navbar id="menu" bg="light" expand="lg" sticky="top">
            <Container>
                <div className="d-flex justify-content-center align-items-center">
                    <Navbar.Brand>
                        React Landing Page
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Link activeClass="active" to="features" spy={true} smooth={true} duration={500}>
                                Features
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                                About
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500}>
                                Services
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-70} duration={500}>
                                Gallery
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={-70} duration={500}>
                                Testimonials
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link activeClass="active" to="team" spy={true} smooth={true} offset={-70} duration={500}>
                                Team
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}