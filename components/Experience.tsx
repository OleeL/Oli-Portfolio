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
                <div data-date="June 2021 - Present" className="shadow">
                    <h3></h3>
                    <h4></h4>
                    <ul>
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>

                <div data-date="September 2020 - June 2021" className="shadow">
                    <h3></h3>
                    <h4></h4>
                    <ul>
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>

                <div data-date="March 2020 - Present" className="shadow">
                    <h3></h3>
                    <h4></h4>
                    <ul>
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
                <div data-date="December 2018 - January 2019" className="shadow">
                    <h3></h3>
                    <h4></h4>
                    <ul>
                        <li>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <ButtonDown setPressed={() => goToSection({ api: api, id: 'education' })} />
            <style jsx>{ProfileStyle}</style>
        </section>
    );
};

export default Experience;
