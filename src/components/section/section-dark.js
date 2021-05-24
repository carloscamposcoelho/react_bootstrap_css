import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Section } from "./section";

const StyledDarkSection = styled(Section)`
    background: ${props => props.theme.background.color.dark};
    color: ${props => props.theme.text.color.light};
`;

export default function SectionDark(props) {

    return (
        <StyledDarkSection>
            <Container>
                {props.children}
            </Container>
        </StyledDarkSection>
    )
}