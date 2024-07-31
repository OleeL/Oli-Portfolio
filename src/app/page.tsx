import React from 'react';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';
import Experience from '../components/experience/Experience';
import Contact from '../components/contact/Contact';
import Projects from '../components/projects/Projects';

export default function Page() {
	return (
		<>
			<main>
				<Profile />
				<AboutMe />
				<Experience />
				<Projects />
				<Contact />
			</main>
		</>
	);
}
