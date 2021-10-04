import Head from 'next/head'
import { Layout, TitleH1, TitleH2, Paragraph, SocialLink}  from "../components"
import { parseCookies } from "../utils/parseCookies"
import linkedinLogo from "../public/images/linkedin.svg"

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
				<Paragraph classes="lg">I'm a fullstack web developer at <br className="mobile"/> K Logic, and <br className="desktop"/> living in  <br className="mobile"/> Tel Aviv, Israel.</Paragraph>
				<SocialLink href="https://www.linkedin.com/in/michael-fintisov-83232a14a/" src={linkedinLogo.src} alt="linkedin"/>
			</div>

			{/* <div className="introWrapper">
				<TitleH2>About</TitleH2>
				<Paragraph classes="md text-grey ">
					I spend most of my time as a fullstack developer creating 
				</Paragraph>
			</div> */}
		  </div>

	

       
      </Layout>

    </>
  )
}



export default Index;