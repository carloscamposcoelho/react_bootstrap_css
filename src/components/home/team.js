import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../";

export default function Team(props) {

    return (
        <div id="team">
            <Container>
                <Row>
                    <Col>
                        <Header title="Meet the team" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec" />
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