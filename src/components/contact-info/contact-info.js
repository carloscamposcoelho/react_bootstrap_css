import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactInfo({ contactTypes }) {

    return (
        <>
            <Row>
                <Col><h3>Contact Info</h3></Col>
            </Row>

            {contactTypes.map((contact) => (
                <div className="item">
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
        </>
    );
}