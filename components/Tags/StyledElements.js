import styled from "styled-components";
import { mqSm, mqMd, mqLg } from "@/theme/styleVars";

export const StyledTags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    
    @media ${mqLg}, ${mqMd} {
      
    }

    @media ${mqSm} {
        margin: 2rem 0 2rem;
    }
`;