import React from "react";
import { StyledH1 } from "./StyledElements"

const TitleH1 = ({children, classes}) => <StyledH1 className={classes}>{children}</StyledH1>;

export default TitleH1;