import styled from "styled-components";
import { mqSm, mqMd, mqLg } from "@/theme/styleVars";


export const StyledHeader = styled.header`

    display:flex;
    align-items:center;
    justify-content: space-between;
    content: "${({theme}) => theme}";
    border-bottom: var(--headerBorderBottom);
    height: var(--headerHeight);

    @media ${mqLg} {
        padding: 0 20%;
        

    }

    @media ${mqMd} {
        padding: 0 10%;
        
    }

    @media ${mqSm} {
        padding: 0 7.5%;
        
    }
    
    
`;

export const Name = styled.a`

    @media ${mqLg}, ${mqMd} {
        font-size: 1rem;
    }

    @media ${mqSm} {
        font-size: 0.75rem;
    }
`