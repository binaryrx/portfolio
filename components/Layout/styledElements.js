import styled from "styled-components";
import { motion } from "framer-motion"
import { mqSm, mqMd, mqLg } from "@/theme/styleVars";


export const StyledLayout = styled(motion.main)`
    height: var(--fullPageHeight);
    
    @media ${mqLg} {
        padding: 0 20% 0 20%;
    }

    @media ${mqMd} {
        padding: 0 10% 0 10%;
    }

    @media ${mqSm} {
        padding: 0 7.5% 0 7.5%;
    }
    
`;