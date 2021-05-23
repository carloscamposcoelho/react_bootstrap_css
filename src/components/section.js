import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { theme } from "../theme";

const StyledSection = styled.div`
    padding: ${theme.section.padding};
    background: ${theme.background.color.dark};
    color: ${theme.text.color.light};
`;

export default function Section(props) {

    return(
        <StyledSection>
            <Container>
                {props.children}
            </Container>
        </StyledSection>
    )
}