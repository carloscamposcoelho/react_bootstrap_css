import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Section } from "./section";

const StyledLightSection = styled(Section)`
    background: ${props => props.theme.background.color.light};
    color: ${props => props.theme.text.color.dark};
`;

export default function SectionDark(props) {

    return (
        <StyledLightSection>
            <Container>
                {props.children}
            </Container>
        </StyledLightSection>
    )
}