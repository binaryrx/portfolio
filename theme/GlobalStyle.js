import { createGlobalStyle } from 'styled-components'
import { mqSm, mqMd, mqLg } from './styleVars';


const GlobalStyle = createGlobalStyle`

	:root{
		
		@media ${mqLg},${mqMd} {
			--headerHeight: 4.5rem;
			
		}

		@media ${mqSm} {
			--headerHeight: 3.75rem;
		}

		--fullPageHeight: calc(100vh - var(--headerHeight) - 1px);
	}



	html{
		font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
		height: 100%; 
		
	}
	
	body {
		--headerBorderBottom: 1px solid rgb(229, 231, 235);
		--ThemeChangerBG: #02a6f2;
		--ThemeChangerBefore: translateY(-50%) scale(1);
		--ThemeChangerAfter: translateY(70%);
		--projectTitle: white;
		--projectShadow: 10px 10px 0 rgb(0 0 0 / 10%);


		height: 100%;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		overflow-y:scroll;
		overflow-x: hidden;
		color: #000;
		background-color: rgba(255,255,255, 1);
		font-family: inherit;
	

		@media ${mqLg},${mqMd}  {
				font-size: calc(0.65em + 0.15vmin);
				font-size: clamp(11px,0.85vw,30px);
			}
			
		@media ${mqSm} {
			font-size: calc(0.9em + 0.5vmin);
			font-size: clamp(8px,2.5vw,30px);
		}

	}

	#__next{
		height: 100%;
	}

	.text-gray{ 
		color: rgba(209,213,219,1)
	}

	.hero{
		display:flex;
		flex-flow: column nowrap;
		justify-content: space-between
	}

	.headingWrapper{

		@media ${mqLg}, ${mqMd} {
			padding-top: 9rem;
			margin-bottom: 7rem;	
		}

		@media ${mqSm} {
			padding-top: 6rem;
			margin-bottom: 10rem;
		}
	}

	.portfolio{

		@media ${mqLg}, ${mqMd} {
			padding-top: 4rem;
		}

		@media ${mqSm} {
			padding-top: 4rem;
		}
	}



	[data-theme="dark"],
	[data-theme="dark"] body {
		--headerBorderBottom: 1px solid rgba(75,85,99,1);
		--ThemeChangerBG: #000;
		--ThemeChangerBefore: translate(calc(100% + 0.05em), -50%) scale(.3);
		--ThemeChangerAfter: translateY(calc(-100% - -0.85rem));
		--projectShadow: 10px 10px 0 rgb(0 0 0 / 25%);
		--projectTitle: white;

		color: #fff;
		background-color: rgba(31,41,55, 1);

		.text-gray{ 
			color: rgba(75,85,99,1)
		}
	}

	h1,h2,h3,h4,h5,h6{
		margin:0; padding:0;
	}

	ul {
		margin:0; padding:0; 

		li{
			list-style:none;
		}
	}

	button,a {
		text-decoration: none;
		appearance: none;
		outline:none;
		border:none;
		background-color: transparent;
		color: inherit;
		cursor: pointer;
		box-sizing: border-box;
		font-family:inherit;
	}

	p{
		margin: 0;
		padding: 0;
	}



	.desktop{
		@media ${mqSm} {
			display: none;
		}

		@media ${mqLg},${mqMd} {
			display: block;
		}
	}

	.mobile{
		@media ${mqSm} {
			display: block;
		}

		@media ${mqLg},${mqMd} {
			display: none;
		}
	}

	.mb-025{
		margin-bottom: 0.25rem;
	}
	.mb-05{
		margin-bottom: 0.5rem;
	}
	.mb-075{
		margin-bottom: 0.75rem;
	}
	.mb-1{
		margin-bottom: 1rem;
	}
	.mb-2{
		margin-bottom: 2rem;
	}
	.mb-3{
		margin-bottom: 3rem;
	}
	.mb-4{
		margin-bottom: 4rem;
	}
	.mb-5{
		margin-bottom: 5rem;
	}
	.mb-10{
		margin-bottom: 10rem;
	}

`

export default GlobalStyle;