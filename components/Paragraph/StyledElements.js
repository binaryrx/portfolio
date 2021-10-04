import styled from "styled-components";
import { mqSm, mqMd, mqLg } from "@/theme/styleVars";


export const StyledParagraph = styled.p`
    font-weight: 200;

    @media ${mqLg}, ${mqMd} {
        max-width: 75%;
        line-height: 1.75rem;
    }
    
    

    &.lg{
        @media ${mqLg}, ${mqMd} {
            line-height: 2.65rem;
            font-size: 2.2rem;
        }

        @media ${mqSm} {
            font-size: 1.275rem;
        }
    }
    

    &.md{
        @media ${mqLg} {
            font-size: 1.25rem;
        }

        @media ${mqMd} {
            font-size: 1.75rem;
        }

        @media ${mqSm} {
            font-size: 1.275rem;
        }
    }

    &.sm{
        @media ${mqLg} {
            font-size: 1rem;
        }

        @media ${mqMd} {
            font-size: 1.5rem;
        }

        @media ${mqSm} {
            font-size: 1rem;
        }
    }

  
   
`;