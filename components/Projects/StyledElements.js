import styled from "styled-components";
import { mqSm, mqMd, mqLg } from "@/theme/styleVars";


export const StyledProjects = styled.ul`
    font-weight:300;

    display:flex;
    flex-flow: row wrap;
    justify-content:space-between;


    @media ${mqLg}, ${mqMd} {

    }   

    @media ${mqSm} {

    }
    
`;