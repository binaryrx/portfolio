import Head from 'next/head'
import { useState, useMemo  } from "react";
import { Layout, TitleH1, Paragraph, Tags, Projects } from "../components"
import projects from "../constants/projects"


const Portfolio = () => {

	const tags =  ["all","html5", "css", "scss", "javascript", "react", "php", "mysql", "wordpress","webpack 5", "gulp.js", "parcel.js"]


	const [ activeTag, setActiveTag ] = useState("all");

	// Memorize filteredProjects, activeTag as dependency
	const filteredProjects = useMemo ( () => "all" === activeTag ? projects : projects.filter( (project, i ) => project.tags.includes(activeTag)), [activeTag])

	// console.warn(`------activeTag------`,activeTag)

	// console.log("----projects----",filteredProjects)

  return (
    <>
		<Head>
			<title>portfolio page</title>
			<meta name="description" content="Fullstack webdeveloper portfolio"/>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Layout bg="">
			<div className="portfolio">
				<TitleH1 classes="mb-05">Projects 📚</TitleH1>
				<Paragraph classes="md mb-1">A selection of projects I've worked on, during my career as a software developer.</Paragraph>

				<Tags tags={tags} activeTag={activeTag} setActiveTag={setActiveTag} classes="mb-075 desktopFlex"/>


				<Projects projects={filteredProjects} activeTag={activeTag} setActiveTag={setActiveTag}/>
			
			</div>
		</Layout>

    </>
  )
}

export default Portfolio;