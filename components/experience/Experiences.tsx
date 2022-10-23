import { Experience as ExperienceType } from '../../lib/types';

export const experiences: ExperienceType[] = [
    {
        company: 'Silverchip',
        role: 'Software Developer',
        startDate: new Date(2022, 6, 1),
        endDate: null,
        description: (
            <ul>
                <li>
                    Developed on and helped to achieve a successful project im- plementing unit
                    tests, code reviews and a CI/CD pipeline on Azure.
                </li>
                <li>
                    Collaborated with clients and communicated with them to help them turn their
                    ideas into reality.
                </li>
                <li>Designed and implemented software using C# .NET Core 6.0 with Blazor.</li>
                <li>Training to be Microsoft Azure Certified as an Azure Developer Associate.</li>
            </ul>
        ),
        url: 'https://www.silverchip.com/',
        location: {
            name: 'Manchester, UK',
            url: 'https://www.google.co.uk/maps/place/Silverchip+Ltd/@53.4844621,-2.2338038,17z/data=!3m2!4b1!5s0x487badbed3b7256f:0x3f8aaf639a5712c7!4m5!3m4!1s0x487bb1ea0e528ae3:0x78684458a30ac11a!8m2!3d53.4844621!4d-2.2316151',
        },
    },
    {
        company: 'Beeta Tech Ltd',
        role: 'Software Engineer',
        startDate: new Date(2021, 10, 1),
        endDate: new Date(2022, 6, 1),
        description: (
            <ul>
                <li>
                    Developed on and helped to achieve a successful project im- plementing unit
                    tests, code reviews and a CI/CD pipeline on Azure.
                </li>
                <li>
                    Collaborated with clients and communicated with them to help them turn their
                    ideas into reality.
                </li>
                <li>Designed and implemented software using C# .NET Core 6.0 with Blazor.</li>
                <li>Training to be Microsoft Azure Certified as an Azure Developer Associate.</li>
            </ul>
        ),
        url: 'https://beeta.co/',
        location: {
            name: 'Manchester, UK',
            url: 'https://www.google.com/maps/place/Beeta+Tech+Limited/@53.4806823,-2.2438599,17z/data=!3m1!4b1!4m5!3m4!1s0x487bb1ea90b00001:0x21d8dd54c5531c84!8m2!3d53.4806823!4d-2.2416659',
        },
    },
    {
        company: 'ICHEC',
        role: 'SoHPC Project Participant',
        startDate: new Date(2021, 6, 1),
        endDate: new Date(2021, 9, 1),
        description: (
            <ul>
                <li>
                    Experience of developing, debugging and profiling parallel programs using Julia
                    Lang and MPI.
                </li>
                <li>
                    Developed parallel graph algorithms with a branch and bound programming paradigm
                    which can be applied to many prob- lems.
                </li>
                <li>
                    Communicated computer science and high performance com- puting with blogs and
                    public speaking.
                </li>
                <li>Improved general programming skills and worked as part of a team.</li>
            </ul>
        ),
        url: 'https://www.google.com/maps/place/Dublin,+Ireland/@53.6392395,-7.2807953,7.21z/data=!4m5!3m4!1s0x48670e80ea27ac2f:0xa00c7a9973171a0!8m2!3d53.3497316!4d-6.2608337',
        location: {
            name: 'Dublin, Ireland',
            url: 'https://www.google.com/maps/place/Irish+Centre+for+High-End+Computing+(ICHEC)/@53.3504456,-6.3609425,11.34z/data=!4m9!1m2!2m1!1sICHEC+Ireland!3m5!1s0x48670eecb29bad07:0x9e3434e28fe12529!8m2!3d53.3419432!4d-6.2392902!15sCg1JQ0hFQyBJcmVsYW5kkgEScmVzZWFyY2hfaW5zdGl0dXRl4AEA',
        },
    },
    {
        company: 'Chronyko',
        role: 'Full Stack Developer',
        startDate: new Date(2019, 7, 1),
        endDate: new Date(2020, 9, 1),
        description: (
            <ul>
                <li>Designed and implemented software experiencing full stack development.</li>
                <li>
                    Worked independently and in a small agile team using contin- uous integration.
                </li>
                <li>
                    Front-end development mainly consisted of Typescript and React. I developed a
                    multiplayer game using Three.Js. The project used SignalR for real time game
                    updates with .NET Core (C#).
                </li>
                <li>
                    Worked on a project with Arduinos and various electronic components. I created a
                    valuable generic software which can be modified by adding / removing electronic
                    devices plugged into the Arduino. Interaction with the components could be made
                    remotely in the browser.
                </li>
                <li>Working under pressure to deliver products and client events.</li>
            </ul>
        ),
        url: 'https://chronyko.com/',
        location: {
            name: 'Reading, UK',
            url: 'https://www.google.com/maps/place/Reading/@52.9318589,-3.3236135,6.88z/data=!4m5!3m4!1s0x48742078d93d3db7:0x2ae19f7fcefa7994!8m2!3d51.4542645!4d-0.9781303',
        },
    },
    {
        company: 'Event Marketing Solutions',
        role: 'IT Assistant',
        startDate: new Date(2015, 7, 1),
        endDate: new Date(2015, 8, 1),
        description: (
            <ul>
                <li>
                    An IT project to update and improve the company SharePoint intranet website.
                    Working predominantly on my own initiative to scope out and implement a new
                    layout, improved communi- cations and graphics. I also provided a scoping
                    document and training guide.
                </li>
                <li>
                    This gave me an insight into teamwork, the importance of communication and
                    managing work to deadlines.
                </li>
            </ul>
        ),
        url: 'https://www.eventms.com/',
        location: {
            name: 'Ellesmere Port, UK',
            url: 'https://www.google.co.uk/maps/place/Ellesmere+Port/@53.3807656,-3.2921582,7.75z/data=!4m5!3m4!1s0x487ad9533edc276d:0xffd9ac3c5a1329d1!8m2!3d53.279812!4d-2.897404',
        },
    },
];

export default experiences;
