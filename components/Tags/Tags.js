import React from "react";
import Tag from "@/components/Tag";
import { StyledTags } from "./StyledElements"

const Tags = ({tags, activeTag, setActiveTag, classes, anim}) => {
    return (
        <StyledTags className={classes}>
            {tags.map( (tag,i) => <Tag tag={tag} activeTag={activeTag} setActiveTag={setActiveTag} classes={classes} anim={anim} key={i} />)}
        </StyledTags>
    );
};
export default Tags;