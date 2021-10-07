import styled from "styled-components";

import { mqSm, mqMd, mqLg } from "@/theme/styleVars";


export const Link = styled.a`

    transition-property: fill;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;

    img{
        width: 1.75rem;
        height: auto;
    }

    &:hover{
        svg{
            fill: rgba(255, 255, 255, 1)
        }
    }
`;