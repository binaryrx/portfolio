import React from "react";
import { StyledTag } from "./StyledElements"

const TagVariants = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    
    hover: {
        opacity: 1,
        y: 0,
    }
}


const Tag = ({tag, activeTag, setActiveTag, classes, anim = false}) => {

    return(
        <StyledTag className={ activeTag === tag ? `${classes} active` : `${classes}` } variants={anim ? TagVariants : {}}>
            <button  onClick={ () => setActiveTag(tag)} >
                <span>{tag === "all" ? "show all" : tag}</span>
            </button>
        </StyledTag>
    );
}
export default Tag;