import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutImg from "../../assets/img/about.jpg";


export default function About() {

    const styleList = (listTexts) => {
        const listStyleTexts = listTexts.map((item) =>
            <li key={item.id}>
                <FontAwesomeIcon icon="check"/>{' '}
                {item.text}
            </li>
        );

        return (
            <ul>
                {listStyleTexts}
            </ul>
        );
    };

    return (
        <Container id="about">
            <Row>
                <Col>
                    <img src={AboutImg} alt="" />
                </Col>
                <Col className="about-text">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Row>
                        <Col md="12">
                            <h3>Why Choose Us?</h3>
                        </Col>
                        <Col>
                            {styleList([
                                {id:1, text:"Lorem ipsum dolor"},
                                {id:2, text:"Tempor incididunt"},
                                {id:3, text:"Lorem ipsum dolor"},
                                {id:4, text:"Incididunt ut labore"}
                            ])}
                        </Col>
                        <Col>
                            {styleList([
                                {id:5, text:"Aliquip ex ea commodo"},
                                {id:6, text:"Lorem ipsum dolor"},
                                {id:7, text:"Exercitation ullamco"},
                                {id:8, text:"Lorem ipsum dolor"}
                            ])}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}