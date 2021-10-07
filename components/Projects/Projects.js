import React from "react";
import { motion } from "framer-motion"

import Project from "@/components/Project";
import Tags from "@/components/Tags";
import { mqLgImg, mqSmImg, mqSm } from "@/theme/styleVars";

import { StyledProjects } from "./StyledElements"

let isMobile = false;

if (typeof window !== 'undefined') {
    isMobile = window.matchMedia(mqSm).matches
}

const HoverProject = !isMobile ? {
    
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
          }
    },
    hover: {
        opacity: 1,
        transition: {
            delay: 0.4,
            duration: 0.4,
            staggerChildren: 0.175,
          }
    }
}
: {
    hidden: { opacity: 1},
    hover: { opacity: 1}
}

const Projects = ({projects, activeTag, setActiveTag}) => {

    
    return (
        <StyledProjects>

            {projects.map( ({url, title, thumb, tags}, i) => 

                <Project activeTag={activeTag} key={i}>
                    
                    <motion.div className="main" initial="hidden" whileHover="hover" animate="hidden">

                        <div className="before">
                            <picture>
                                <source srcSet={thumb.thumb_before_webp.src} type="image/webp"/>
                                <source srcSet={thumb.thumb_before_jpg.src} type="image/jpg"/>
                                <img src={thumb.thumb_before_jpg && thumb.thumb_before_jpg.src} alt={title} width="620" height="305"/>
                            </picture>
                        </div>

                        <motion.div variants={HoverProject} className="content">
                            <h3>
                                <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                            </h3>
                            <Tags tags={tags} classes="sm desktopFlex" activeTag={activeTag} setActiveTag={setActiveTag} anim="true"/>
                        </motion.div>

                        <div className="after desktop">
                            <picture>
                                <source srcSet={thumb.thumb_after_webp.src} type="image/webp"/>
                                <source srcSet={thumb.thumb_after_jpg.src} type="image/jpg"/>
                                <img src={thumb.thumb_after_jpg && thumb.thumb_after_jpg.src} alt={title} width="620" height="305" />
                            </picture>
                        </div>
                    </motion.div>
                </Project>
            )}
           
        </StyledProjects>
    );
};
export default Projects;


