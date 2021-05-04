import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Features () {

    return (
        <div id="features">
            <Container>
                <Row>
                    <Col>
                        <div className="section-title">
                            <h2>Features</h2>
                        </div>
                    </Col>
                </Row>
                <Row>                        
                    <Col md={3}>
                        <FontAwesomeIcon icon={["far", "comments"]} />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                    </Col>
                    <Col md={3}>
                        <FontAwesomeIcon icon="bullhorn" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                    </Col>
                    <Col md={3}>
                        <FontAwesomeIcon icon="users" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                    </Col>
                    <Col md={3}>
                        <FontAwesomeIcon icon="magic" />
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                    </Col>                        
                </Row>
            </Container>
        </div>
    )
}