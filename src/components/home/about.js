import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AboutImg from "../../assets/img/about.jpg";
import { Header } from "./"


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
                <Col md={12} lg={6}>
                    <img src={AboutImg} alt="" />
                </Col>
                <Col md={12} lg={6} className="about-text">
                    <Header title="About us" align="left" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
                    <Row>
                        <Col md={12}>
                            <h3>Why Choose Us?</h3>
                        </Col>
                        <Col xs={12} sm={6}>
                            {styleList([
                                {id:1, text:"Lorem ipsum dolor"},
                                {id:2, text:"Tempor incididunt"},
                                {id:3, text:"Lorem ipsum dolor"},
                                {id:4, text:"Incididunt ut labore"}
                            ])}
                        </Col>
                        <Col xs={12} sm={6}>
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