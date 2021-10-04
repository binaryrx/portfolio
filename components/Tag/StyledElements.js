import styled from "styled-components";
import { motion } from "framer-motion"

import { mqSm, mqMd, mqLg } from "@/theme/styleVars";

export const StyledTag = styled(motion.li)`
    background: #313131;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: #222;
    border-radius: 3px;
    color: #999;
    margin-bottom: 1rem;
    display:inline-block;
    box-shadow: 1px 1px 0 rgb(0 0 0 / 25%);
   
        @media ${mqLg}, ${mqMd} {
            &:not(:last-child){
                margin-right: 1rem;
            }
        }

        @media ${mqSm} {
            &:not(:last-child){
                margin-right: 1rem;
            }
        }

        &.sm{
            @media ${mqLg}, ${mqMd} {
            margin-bottom: 0.25rem;

            &:not(:last-child){
                margin-right: 0.25rem;
            }
        }

        @media ${mqSm} {
            margin-bottom: 0.25rem;
            &:not(:last-child){
                margin-right: 0.25rem;
            }
        }
    }

    &.active{
        button::before, button::after{
            transform: translate3d(0,0,0);
        }
    }
    
    button{
        position: relative;
        display: grid;
        place-content: center;
        overflow:hidden;
        text-transform:uppercase;
        font-weight:600;


        &::before, &::after{
            content: "";
            position:absolute;
            left: 0;
            height: 50%;
            width: 100%;
            transition: transform .3s cubic-bezier(.65,.05,.1,1);
        }

        &::before{
            top:0;
            background-color: #515151;
            transform: translate3d(-105%,0,0);
        }

        &::after{
            bottom:0;
            background-color: #3f3f3f;
            transform: translate3d(105%,0,0);
            transition-delay: 75ms;
        }

        &.active::before, &.active::after {
            transform: translate3d(0,0,0);
        }

        &:hover::before, &:hover::after {
            transform: translate3d(0,0,0);
        }


        @media ${mqLg}, ${mqMd} {
            font-size: 1.1rem;
            padding: 0.25rem 0.3rem;
        }

        @media ${mqSm} {
            font-size: 0.85rem;
        }

        &.sm{
            @media ${mqLg}, ${mqMd} {
            font-size: 0.9rem;
            padding: 0.2rem 0.25rem;
        }

        @media ${mqSm} {
            font-size: 0.75rem;
        }
        }

        span{
            position: relative;
            z-index: 2;
        }
    }
    
    
`;
