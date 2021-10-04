import styled from "styled-components";
import { mqSm, mqMd, mqLg } from "@/theme/styleVars";


export const Nav = styled.nav`

    ul{
        display:flex;
        align-items:center;
        justify-content:flex-end;
        li{
            list-style:none;
            a{
                position: relative;
                @media ${mqLg}, ${mqMd} {
                    font-size: 1rem;
                }
                @media ${mqSm} {
                    font-size: 0.85rem;
                }
                .navigation-underline{
                    position: absolute;
                    width: 100%;
                    background: rgba(252,211,77,1);
                    height: 3px;
                }

            }

            &:not(:first-child) {
                @media ${mqLg}, ${mqMd} {
                    margin-left: 2.5rem;
                }
                @media ${mqSm} {
                    margin-left: 1.15rem;
                }
                
               
                
                
            }
        }
    }
    
`;