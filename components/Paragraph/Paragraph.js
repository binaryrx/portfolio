import React from "react";
import { StyledParagraph } from "./StyledElements";

const Paragraph = ({children, classes}) => <StyledParagraph className={classes}>{children}</StyledParagraph>

export default Paragraph;