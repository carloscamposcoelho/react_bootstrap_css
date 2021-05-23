import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledRow = styled(Row)`
    margin-bottom: 10px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
`;

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
        <>
            {prepareContacts().map((contact) => (
                <ContactItem key={contact.label}>
                    <StyledRow>
                        <Col>
                            <FontAwesomeIcon icon={contact.icon} />
                            {' '}{contact.label}
                        </Col>
                    </StyledRow>
                    <StyledRow>
                        <Col>
                            {contact.value}
                        </Col>
                    </StyledRow>
                </ContactItem>
            ))}
        </>
    );
}