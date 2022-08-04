import { FC } from 'react';
import css from 'styled-jsx/css';
import { GetScrollSpring, goToSection } from '../utilities/ScrollHandler';
import ButtonDown from './buttons/ButtonDown';

const ProfileStyle = css`
    section {
        background-color: white;
    }
    * {
        color: black;
    }
`;

const Experience: FC = () => {
    const api = GetScrollSpring();
    return (
        <section id="experience">
            <div>
                <h1>Experience</h1>
            </div>
            <div id="experience-timeline">
                <div data-date="June 2021 – Present" className="shadow">
                    <h3>Incubyte</h3>
                    <h4>Software Craftsperson</h4>
                    Working in a <strong>Full-Stack</strong> role implementing solutions across
                    different technologies with a US based client in the mental health space,
                    focusing on software quality.
                    <ul>
                        <li>
                            Ported an interactive section from a mobile application into web app
                            using React, Redux, NextJS, Storybook.
                        </li>
                        <li>
                            Worked on data migrations of more than <em>50K users</em>, i18n, l10n,
                            and migration of emails to a new platform for a Ruby on Rails GraphQL
                            server.
                        </li>
                        <li>
                            Wrote new client for external mail services for a Laravel based auth
                            component, handling authentication.
                        </li>
                        <li>
                            Migrated our blog from paid Azure + Ghost hosting to Hugo and GitHub
                            Pages.
                        </li>
                        <li>
                            Wrote extensive tests for almost all production code, followed best
                            practices for clean code.
                        </li>
                    </ul>
                </div>

                <div data-date="September 2020 – June 2021" className="shadow">
                    <h3>Wipro Limited</h3>
                    <h4>Project Engineer</h4>
                    Worked in an Agile project with a Latin American client in the consumer products
                    sector, part of a global team.
                    <ul>
                        <li>
                            Developed new logic for cargo loading, settlement process in a legacy
                            Java Swing codebase.
                        </li>
                        <li>
                            Integrated SAP Crystal into the invoicing process migrating away from a
                            custom legacy system.
                        </li>
                        <li>
                            Designed and implemented new sections in the MySQL database for
                            accomodating new features.
                        </li>
                        <li>
                            Handled multiple deployments, automating most of it with Python and
                            Bash.
                        </li>
                        <li>
                            Was the only developer with Spanish language skills, and was responsible
                            for communicating with clients.
                        </li>
                    </ul>
                </div>

                <div data-date="March 2020 – Present" className="shadow">
                    <h3>Mentors Without Borders</h3>
                    <h4>Mentor</h4>
                    <ul>
                        <li>
                            Taught students programming and web development along with various tools
                            and technologies.
                        </li>
                        <li>
                            Got to interact with students across the globe and learn about their
                            challenges while learning tech.
                        </li>
                        <li>
                            Raise awareness among students about the importance of clean code and
                            open source software.
                        </li>
                    </ul>
                </div>
                <div data-date="December 2018 – January 2019" className="shadow">
                    <h3>Edifixio India</h3>
                    <h4>Software Development Intern</h4>
                    <ul>
                        <li>
                            Built an Android app for sensor data monitoring and sending out required
                            information to cloud.
                        </li>
                        <li>Worked with IoT devices to transmit sensor data via BLE.</li>
                    </ul>
                </div>
            </div>
            <ButtonDown setPressed={() => goToSection({ api: api, id: 'education' })} />
            <style jsx>{ProfileStyle}</style>
        </section>
    );
};

export default Experience;
