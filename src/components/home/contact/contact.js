import React from "react";
import { ContactBox, Header, ContactInfo } from "../../";
import { Container, Row, Col } from "react-bootstrap";
import { StyledContact } from "./styles";

export default function Contact() {

    return (
        <StyledContact>
            <Container>
                <Row className="title">
                    <Col>
                        <Header
                            title="Get in touch"
                            description="Please fill out the form below to send us an email and we will get back to you as soon as possible"
                            theme="light"
                            align="left"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <ContactBox />
                    </Col>
                    <Col md={{ span: 4, offset: 1 }}>
                        <ContactInfo
                            address="4321 California St, San Francisco, CA 12345"
                            phone="+1 123 456 1234"
                            email="info@company.com"
                         />
                    </Col>
                </Row>
            </Container>
        </StyledContact>
    )
}