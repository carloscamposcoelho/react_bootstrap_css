import React from "react";
import { ContactBox, Header, ContactInfo } from "../../";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export default function Contact() {
    function getContacts() {
        let contactTypes = [
            { 
                label: "Address",
                value: "4321 California St, San Francisco, CA 12345",
                icon: "map-marker-alt"
            },
            { 
                label: "Phone",
                value: "+1 123 456 1234",
                icon: "phone"
            },
            { 
                label: "Email",
                value: "info@company.com",
                icon: "phone"
            }
        ]

        return contactTypes;
    }

    return (
        <div className="contact">
            <Container>
                <Row>
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
                        <ContactInfo contactTypes={getContacts()}
                         />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}