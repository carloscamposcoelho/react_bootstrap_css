import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledContactInfo } from "./styles";

export default function ContactInfo({ address, phone, email }) {

    function prepareContacts() {
        let contactTypes = [
            {
                label: "Address",
                value: address,
                icon: ["fas", "map-marker-alt"]
            },
            {
                label: "Phone",
                value: phone,
                icon: ["fas", "phone"]
            },
            {
                label: "Email",
                value: email,
                icon: ["far", "envelope"]
            }
        ]

        return contactTypes;
    }

    return (
        <StyledContactInfo>
            <div className="contact-box">
                {prepareContacts().map((contact) => (
                    <div className="contact-item">
                        <Row>
                            <Col>
                                <FontAwesomeIcon icon={contact.icon} />
                                {' '}{contact.label}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {contact.value}
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        </StyledContactInfo>
    );
}