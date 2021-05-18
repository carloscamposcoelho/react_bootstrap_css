import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../";
import PicRobert from "../../assets/img/testimonials/01.jpg";
import PicDiego from "../../assets/img/testimonials/02.jpg";
import PicKevin from "../../assets/img/testimonials/03.jpg";
import PicBetty from "../../assets/img/testimonials/04.jpg";
import PicSteven from "../../assets/img/testimonials/05.jpg";
import PicMaggie from "../../assets/img/testimonials/06.jpg";

export default function Testimonials() {

    return (
        <div id="testimonials">
            <Container>
                <Row>
                    <Col>
                        <Header title="What our clients say" />
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="testimonial">
                        <div className="testimonial-image">
                            <img src={PicRobert} alt="" />
                        </div>
                        <div className="testimonial-content">
                            <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                            <div className="testimonial-meta">
                                - Robert Doe
                        </div>
                        </div>
                    </Col>
                    <Col md={4} className="testimonial">
                        <div className="testimonial-image">
                            <img src={PicDiego} alt="" />
                        </div>
                        <div className="testimonial-content">
                            <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                            <div className="testimonial-meta">
                                - Diego Doe
                        </div>
                        </div>
                    </Col>
                    <Col md={4} className="testimonial">
                        <div className="testimonial-image">
                            <img src={PicKevin} alt="" />
                        </div>
                        <div className="testimonial-content">
                            <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                            <div className="testimonial-meta">
                                - Kevin Doe
                        </div>
                        </div>
                    </Col>
                    <Col md={4} className="testimonial">
                        <div className="testimonial-image">
                            <img src={PicBetty} alt="" />
                        </div>
                        <div className="testimonial-content">
                            <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                            <div className="testimonial-meta">
                                - Betty Doe
                        </div>
                        </div>
                    </Col>
                    <Col md={4} className="testimonial">
                        <div className="testimonial-image">
                            <img src={PicSteven} alt="" />
                        </div>
                        <div className="testimonial-content">
                            <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                            <div className="testimonial-meta">
                                - Steven Doe
                        </div>
                        </div>
                    </Col>
                    <Col md={4} className="testimonial">
                        <div className="testimonial-image">
                            <img src={PicMaggie} alt="" />
                        </div>
                        <div className="testimonial-content">
                            <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                            <div className="testimonial-meta">
                                - Maggie Doe
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}