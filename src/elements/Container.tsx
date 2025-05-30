import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";

export const TContainer = (props) => {
return (
   <Container {...props}>{props.children}</Container>
)
}