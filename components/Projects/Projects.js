import React from "react";
import { motion } from "framer-motion"

import Project from "@/components/Project";
import Tags from "@/components/Tags";
import { mqLgImg, mqSmImg } from "@/theme/styleVars";

import { StyledProjects } from "./StyledElements"



const HoverProject = {
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

const Projects = ({projects, activeTag, setActiveTag}) => {

    
    return (
        <StyledProjects>

            {projects.map( ({url, title, thumb, tags}, i) => 

                <Project activeTag={activeTag} key={i}>
                    
                    <div className="bar"></div>
                    {console.log("project render")}
                    <motion.div className="main" initial="hidden" whileHover="hover" animate="hidden">

                        <div className="before">
                            <picture>
                                <source srcSet={thumb.thumb_before_webp.src} type="image/webp"/>
                                <source srcSet={thumb.thumb_before_jpg.src} type="image/jpg"/>
                                <img src={thumb.thumb_before_jpg && thumb.thumb_before_jpg.src} alt={title} width="620" height="305"/>
                            </picture>
                        </div>

                        <motion.div variants={HoverProject} className="content" >
                            <h3>
                                <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                            </h3>
                            <Tags tags={tags} classes="sm" activeTag={activeTag} setActiveTag={setActiveTag} anim="true"/>
                        </motion.div>

                        <div className="after">
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


