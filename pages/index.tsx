import React from 'react';
// import css from 'styled-jsx/css';
import Navigation from '../components/Navigation';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

const Content = () => (
    <main>
        <Navigation />
        <Profile />
        <AboutMe />
        <Experience />
        <Education />
        <Projects />
        <Contact />
    </main>
);

const App = () => {
    return (
        <>
            <Content />
        </>
    );
};
export default App;
