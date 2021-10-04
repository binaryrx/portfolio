import React from "react";
import { StyledProject } from "./StyledElements"

const Project = ({children}) => <StyledProject>{children}</StyledProject>;

export default React.memo(
    Project,
    (prevProps, nextProps) => prevProps.activeTag === nextProps.activeTag,    
);