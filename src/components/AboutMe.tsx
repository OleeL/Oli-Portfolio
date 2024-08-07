import Section from './Section';

const AboutMeBody = () => (
	<div className="paragraph-start" tabIndex={0}>
		<p>Hello! My name is Oli,</p>
		<p>
			{' '}
			I&apos;m a software engineer who thrives on finding solutions to
			complex problems. I have a strong passion for continually learning
			new skills and technologies, as well as creating and building new
			projects.
		</p>
		<p>
			This website serves as a platform for me to showcase some of my
			personal projects and accomplishments in the field of software
			engineering.
		</p>
		<p>Here are some technologies I use:</p>
		<ul>
			<li>Typescript</li>
			<li>Javascript</li>
			<li>React</li>
			<li>Next/JS</li>
			<li>SASS</li>
			<li>Node.js</li>
			<li>C#</li>
			<li>Blazor</li>
			<li>.NET</li>
		</ul>
	</div>
);

const AboutMe = () => {
	return (
		<Section sectionName="About Me">
			<AboutMeBody />
		</Section>
	);
};

export default AboutMe;
