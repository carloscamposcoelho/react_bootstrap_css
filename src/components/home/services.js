import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {

    return (
        <div  id="services">
            <Container>
                <Row>
                    <Col>
                        <h2>Our Services</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FontAwesomeIcon icon={["fab", "wordpress"]} />
                        <div className="service-desc">
                            <h3>Lorem ipsum dolor</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon="cart-arrow-down" />
                        <div className="service-desc">
                            <h3>Consectetur adipiscing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon="cloud-download-alt" />
                        <div className="service-desc">
                            <h3>Lorem ipsum dolor</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FontAwesomeIcon icon="language" />
                        <div className="service-desc">
                            <h3>Consectetur adipiscing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon="plane" />
                        <div className="service-desc">
                            <h3>Lorem ipsum dolor</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <FontAwesomeIcon icon="chart-pie" />
                        <div className="service-desc">
                            <h3>Consectetur adipiscing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}