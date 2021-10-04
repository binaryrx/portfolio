import styled from "styled-components";
import { mqSm, mqMd, mqLg } from "@/theme/styleVars";


export const StyledH1 = styled.h1`
    font-weight:300;


    @media ${mqLg}, ${mqMd} {
        font-size: 3.75rem;

    }

    @media ${mqSm} {
        font-size: 2.15rem;
    }
    
    
`;