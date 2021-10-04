import styled from "styled-components";
import { mqSm, mqMd, mqLg } from "@/theme/styleVars";


export const StyledH2 = styled.h2`
    font-weight: 300;
    
   
    @media ${mqLg} {
        font-size: 2.5rem;
    }

    @media ${mqMd} {
        font-size: 2.3rem;
    }


    @media ${mqLg}, ${mqMd} {
        line-height: 2.65rem;
        margin-bottom: 1rem;
    }

    @media ${mqSm} {
        font-size: 1.275rem;
    }
`;