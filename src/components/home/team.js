import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Team(props) {

    return (
        <div id="team">
            <Container>
                <Row>
                    <Col className="section-title">
                        <h2>Meet the team</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec</p>
                    </Col>
                </Row>
                <Row>
                    {props.members.map((member) => (
                        <Col key={member.Name}>
                            <div className="thumbnail">
                                <img src={member.Image} alt="" className="team-img" />
                                <div className="caption">
                                    <h4>{member.Name}</h4>
                                    <p>{member.Role}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}