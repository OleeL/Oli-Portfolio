import React from 'react';
// import css from 'styled-jsx/css';
import Navigation from '../components/Navigation';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

// const pic_github = '/images/logos/ghlogo.svg';
// const pic_email = '/images/logos/emlogo.svg';
// const pic_linkedin = '/images/logos/lilogo.svg';
// const pic_phone = '/images/logos/phlogo.svg';
// const pic_profile = '/images/profilepic.webp';

const App = () => {
    return (
        <>
            <Content />
            <div style={{ backgroundColor: 'green', width: '100%', height: '100%' }} />
            {/* <ParticleBackdrop /> */}
        </>
    );
};

const Content = () => (
    <>
        <Navigation />
        <Profile />
        <AboutMe />
        <Experience />
        <Education />
        <Projects />
        <Skills />
    </>
);

export default App;
