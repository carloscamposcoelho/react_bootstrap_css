import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function Intro () {
    return (
        <div className="intro">
            <div className="overlay">
                <Container>
                    <Row>
                        <Col md={{ span: 8, offset: 2}} className="intro-text">
                            <h1>We are a landing page</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum</p>
                            <Button variant="primary" href="#features">Learn More</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}