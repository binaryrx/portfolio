import Head from 'next/head'
import { Layout, TitleH1, TitleH2, Paragraph, SocialLink}  from "../components"
import LinkedinLogo from "../public/images/linkedin.svg"
import GithubLogo from "../public/images/github.svg"

// console.log(linkedinLogo)

const Index = () => {



  return (
    <>
      <Head>
        <title>portfolio</title>
        <meta name="description" content="Fullstack webdeveloper portfolio"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>

		  <div className="hero">

			<div className="headingWrapper">
				<TitleH1>Hello, I'm Michael 👋</TitleH1>
				<Paragraph classes="lg mb-05">I'm a fullstack web developer at <br className="mobile"/> K Logic <br className="desktop"/> living in  <br className="mobile"/> Tel Aviv, Israel.</Paragraph>
				<SocialLink href="https://www.linkedin.com/in/michael-fintisov-83232a14a/" alt="linkedin" className="mr-075"> 
					<LinkedinLogo fill="rgba(255,255,255,0.75)" />
				</SocialLink>

				<SocialLink href="https://github.com/binaryrx/" alt="github">
					<GithubLogo fill="rgba(255,255,255,0.75)"/>
				</SocialLink>
			</div>

			<div className="introWrapper">
				<TitleH2>About</TitleH2>
				<Paragraph classes="md text-grey ">
				I spend most of my time as a fullstack developer on K Logic's clients websites using HTML, CSS, JS and PHP. I'm currently experimenting with Next.js, Node.js and Docker.
				</Paragraph>
			</div>
		  </div>

	

       
      </Layout>

    </>
  )
}



export default Index;