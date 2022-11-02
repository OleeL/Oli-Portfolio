import React from 'react';
import NavigationComponent from '../components/Navigation';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';
import Experience from '../components/experience/Experience';
import Contact from '../components/Contact';
import Projects from '../components/Projects/Projects';

const Content = () => (
    <main>
        <NavigationComponent />
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
            <Content />
        </>
    );
};
export default App;
