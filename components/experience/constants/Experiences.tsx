import { ExperienceType } from '../../../lib/types';
import { provideIds } from '../../../lib/helpers/array';

export const experiences: ExperienceType[] = provideIds([
	{
		company: 'TRAVCORP HOLDINGS LTD',
		companyNickname: 'TRAVCORP',
		role: 'Software Developer',
		startDate: new Date(2023, 11, 1),
		endDate: null,
		description: (
			<>
				<p>
					Travcorp is an online travel operator that specializes in
					packaged holidays and hotels via its consumer brands
					Destination2.co.uk and HolidayGems.co.uk.
				</p>
				<p>
					Responsible for developing and maintaining robust web
					applications using Angular, TypeScript, and SCSS.
				</p>
				<p>
					My role involves work with .NET versions 6-8 and C# 8-11,
					focusing on creating ef cient, scalable backend solutions.
				</p>
				<p>
					Worked on online platforms, ensuring high performance and
					responsiveness to requests from the front-end. Used database
					management with MSSQL includes designing, developing, and
					maintaining ef cient and secure databases. Databases had to
					handling large volumes of customer data and transactions
				</p>
			</>
		),
		url: 'https://destination2.co.uk/',
		location: {
			name: 'Chester, UK',
			url: 'https://www.google.com/maps/search/Unit+14+Telford+Court+Chester+Gates+Business+Park,+Dunkirk,+Chester,+England,+CH1+6LT/@53.2467057,-2.9343571,17z/data=!3m1!4b1?entry=ttu',
		},
		tags: provideIds([
			{ name: 'Angular' },
			{ name: 'Typescript' },
			{ name: 'SCSS' },
			{ name: '.NET 6-8' },
			{ name: 'C# 8-11' },
			{ name: 'MSSQL' },
		]),
		commuteType: 'Remote',
	},
	{
		company: 'CTI Digital',
		companyNickname: 'CTI',
		role: 'Software Developer',
		startDate: new Date(2022, 6, 1),
		endDate: new Date(2023, 10, 1),
		description: (
			<>
				<p>
					Developed user-friendly and visually appealing applications
					using React, React Native, HTML, CSS/SCSS and JS/TS.
				</p>
				<p>
					Wrote clean, efficient, and well-documented code that
					adheres to best practices and standards.
				</p>
				<p>
					Collaborated with cross-functional teams including
					designers, project managers, and other developers to bring
					new features and functionality to life.
				</p>
				<p>
					Debugged, tested and fixed compatibility issues across
					various browsers and platforms.
				</p>
				<p>
					Kept up-to-date with emerging trends and technologies in the
					software industry, and continuously improved skills and
					knowledge.
				</p>
			</>
		),
		url: 'https://www.ctidigital.com/',
		location: {
			name: 'Manchester, UK',
			url: 'https://www.google.com/maps/place/CTI+Digital/@53.4844624,-2.2336751,17z/data=!3m1!4b1!4m6!3m5!1s0x487bb1be9615d2cf:0xeb8ebc7d638a5a9e!8m2!3d53.4844624!4d-2.2314864!16s%2Fg%2F1v3_26xf',
		},
		tags: provideIds([
			{ name: 'React' },
			{ name: 'React Native' },
			{ name: 'SCSS' },
			{ name: 'AWS' },
			{ name: '.NET 3-6' },
			{ name: 'C#' },
			{ name: 'Typescript' },
			{ name: 'Javascript' },
		]),
		commuteType: 'Hybrid',
	},
	{
		company: 'Beeta Tech Ltd',
		companyNickname: 'Beeta Tech',
		role: 'Software Engineer',
		startDate: new Date(2021, 10, 1),
		endDate: new Date(2022, 6, 1),
		description: (
			<>
				<p>
					Developed on and helped to achieve a successful project
					implementing unit tests, code reviews and a CI/CD pipeline
					on Azure.
				</p>
				<p>
					Collaborated with clients and communicated with them to help
					them turn their ideas into reality.
				</p>
				<p>
					Designed and implemented software using C# .NET Core 6.0
					with Blazor.
				</p>
				<p>
					Training to be Microsoft Azure Certified as an Azure
					Developer Associate.
				</p>
			</>
		),
		url: 'https://beeta.co/',
		location: {
			name: 'Manchester, UK',
			url: 'https://www.google.com/maps/place/Beeta+Tech+Limited/@53.4806823,-2.2438599,17z/data=!3m1!4b1!4m5!3m4!1s0x487bb1ea90b00001:0x21d8dd54c5531c84!8m2!3d53.4806823!4d-2.2416659',
		},
		tags: provideIds([
			{ name: 'Azure' },
			{ name: '.NET 3-6' },
			{ name: 'C#' },
			{ name: 'Javascript' },
			{ name: 'React' },
		]),
		commuteType: 'Hybrid',
	},
	{
		company: 'ICHEC',
		role: 'SoHPC Project Participant',
		startDate: new Date(2021, 6, 1),
		endDate: new Date(2021, 9, 1),
		description: (
			<>
				<p>
					A 2 month post-university project - at PRACE - to develop a
					parallel anytime branch and bound algorithm for finding the
					treewidth of graphs
				</p>
				<p>
					Experience of developing, debugging and profiling parallel
					programs using Julia Lang and MPI.
				</p>
				<p>
					Developed parallel graph algorithms with a branch and bound
					programming paradigm which can be applied to many problems.
				</p>
				<p>
					Communicated computer science and high performance computing
					with blogs and public speaking.
				</p>
				<p>
					Improved general programming skills and worked as part of a
					team.
				</p>
			</>
		),
		url: 'https://www.google.com/maps/place/Dublin,+Ireland/@53.6392395,-7.2807953,7.21z/data=!4m5!3m4!1s0x48670e80ea27ac2f:0xa00c7a9973171a0!8m2!3d53.3497316!4d-6.2608337',
		location: {
			name: 'Dublin, Ireland',
			url: 'https://www.google.com/maps/place/Irish+Centre+for+High-End+Computing+(ICHEC)/@53.3504456,-6.3609425,11.34z/data=!4m9!1m2!2m1!1sICHEC+Ireland!3m5!1s0x48670eecb29bad07:0x9e3434e28fe12529!8m2!3d53.3419432!4d-6.2392902!15sCg1JQ0hFQyBJcmVsYW5kkgEScmVzZWFyY2hfaW5zdGl0dXRl4AEA',
		},
		tags: provideIds([
			{ name: 'Julia' },
			{ name: 'MPI' },
			{ name: 'C' },
			{ name: 'OpenMP' },
			{ name: 'LaTeX' },
		]),
		commuteType: 'Remote',
	},
	{
		company: 'Chronyko',
		role: 'Full Stack Developer',
		startDate: new Date(2019, 7, 1),
		endDate: new Date(2020, 9, 1),
		description: (
			<>
				<p>
					Designed and implemented software experiencing full stack
					development.
				</p>
				<p>
					Worked independently and in a small agile team using
					continuous integration.
				</p>
				<p>
					Front-end development mainly consisted of Typescript and
					React. I developed a multiplayer game using Three.Js. The
					project used SignalR for real time game updates with .NET
					Core (C#).
				</p>
				<p>
					Worked on a project with Arduinos and various electronic
					components. I created a valuable generic software which can
					be modified by adding / removing electronic devices plugged
					into the Arduino. Interaction with the components could be
					made remotely in the browser.
				</p>
				<p>
					Working under pressure to deliver products and client
					events.
				</p>
			</>
		),
		url: 'https://chronyko.com/',
		location: {
			name: 'Reading, UK',
			url: 'https://www.google.com/maps/place/Reading/@52.9318589,-3.3236135,6.88z/data=!4m5!3m4!1s0x48742078d93d3db7:0x2ae19f7fcefa7994!8m2!3d51.4542645!4d-0.9781303',
		},
		tags: provideIds([
			{ name: 'React' },
			{ name: 'AWS' },
			{ name: '.NET 3-6' },
			{ name: 'C#' },
			{ name: 'Typescript' },
			{ name: 'Javascript' },
			{ name: 'Arduino C++' },
			{ name: 'Python' },
			{ name: 'Three.js' },
			{ name: 'Next.js' },
			{ name: 'SignalR' },
		]),
		commuteType: 'In-Office',
	},
	{
		company: 'Event Marketing Solutions',
		companyNickname: 'EMS',
		role: 'IT Assistant',
		startDate: new Date(2015, 7, 1),
		endDate: new Date(2015, 8, 1),
		description: (
			<>
				{' '}
				<p>
					An IT project to update and improve the company SharePoint
					intranet website.
				</p>
				<p>
					Working to scope out and implement a new layout to result in
					a new and improved method of communication.
				</p>
				<p>I also provided scoping documents and training guides.</p>
			</>
		),
		url: 'https://www.eventms.com/',
		location: {
			name: 'Ellesmere Port, UK',
			url: 'https://www.google.co.uk/maps/place/Ellesmere+Port/@53.3807656,-3.2921582,7.75z/data=!4m5!3m4!1s0x487ad9533edc276d:0xffd9ac3c5a1329d1!8m2!3d53.279812!4d-2.897404',
		},
		tags: provideIds([{ name: 'Sharepoint' }]),
		commuteType: 'In-Office',
	},
]);
