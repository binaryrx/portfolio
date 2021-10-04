import styled from "styled-components";
import { mqSm, mqMd, mqLg } from "@/theme/styleVars";


export const StyledProject = styled.li`
    font-weight:300;
    position: relative;
    overflow: hidden;
    box-shadow: var(--projectShadow);

    @media ${mqLg}, ${mqMd} {
        width: 33.75rem;
        height: 16.55rem;
        margin-bottom: 2rem;
    }   

    @media ${mqSm} {
        width: 100%;
        height: 10.75rem;
        margin-bottom: 1.25rem;
    }


    @media ${mqLg}, ${mqMd} {
        font-size: 3.75rem;
        
    }   

    @media ${mqSm} {
        font-size: 2.15rem;
    }

  

    .main{
        position: relative;
        height: 100%;
    }

    .before, .after, .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .before{
        z-index: 1;
    }

    .content {
        z-index: 0;
        display:grid;
        place-content: center;
        justify-content: flex-start;
        max-width: 85%;
        left: 50%;
        transform: translateX(-50%);
    }

    .after{
        z-index: 2;

        opacity:0;
        transform: translate3d(0,-100%,0);
        transition: opacity 0.5s ease-out, transform 0.25s cubic-bezier(0,0.75,0,1);


        &::before{
                content: "";
                position: absolute;
                z-index: 2;
                height: 100%;
                width: 100%;
                top: 0;
                left:0;
                background-color: rgba(0,0,0,0.8);
                z-index: 2;
                
            }
    }

  
    &:hover{

        .before{
            z-index: 0;
            opacity:0;
        }

        .content {
            z-index: 2;
        }

        .after{
            z-index: 1;
            opacity: 1;
            transform: translate3d(0,0,0);
            transform-style: flat;
            transition: opacity 0.15s ease-out, transform 0.25s cubic-bezier(0,.75,0,1);

            &::before{
                content: "";
                position: absolute;
                z-index: 2;
                height: 100%;
                width: 100%;
                top: 0;
                left:0;
                background-color: rgba(0,0,0,0.5);
            }
        }
    }

    picture{
        height: 100%;
        display:block;
        position: relative;
        

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: left;
           

           
        }

        

        
    }

    h3{
        color: var(--projectTitle);
        @media ${mqLg}, ${mqMd} {
            font-size: 1.75rem;
            margin-bottom: 0.75rem;
        }   

        @media ${mqSm} {
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }
        a{
            text-decoration: underline;
        }
    }

    p{
        @media ${mqLg}, ${mqMd} {
            font-size: 1.25rem;
        }   

        @media ${mqSm} {
            font-size: 1rem;
        }
    }
    
    
`;