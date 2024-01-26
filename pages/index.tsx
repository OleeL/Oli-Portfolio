import React from 'react';
import NavigationComponent from '../components/Navigation';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';
import Experience from '../components/experience/Experience';
import Contact from '../components/contact/Contact';
import Projects from '../components/projects/Projects';
import Footer from '../components/Footer';

const Content = () => (
	<main>
		<Profile />
		<AboutMe />
		<Experience />
		<Projects />
		<Contact />
	</main>
);

const App = () => {
	return (
		<>
			<NavigationComponent />
			<Content />
			<Footer />
		</>
	);
};
export default App;
