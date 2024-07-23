import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { a, useSpring } from '@react-spring/web';
import Section from '../Section';
import { ProjectType, ProjectList } from './ProjectList';
import { BulokeWindow } from '../../lib/helpers/window';

const Project: FC<ProjectType> = ({ url, name, description, image }) => {
	const box = {
		width: image?.width ?? 0,
		height: image?.height ?? 0,
	};

	const [hovered, setHovered] = useState(false);
	const projectRef = useRef<HTMLAnchorElement>(null);

	const springOverlay = useSpring({
		opacity: hovered ? 0.5 : 0,
	});

	const springUnderline = useSpring({
		width: hovered ? '100%' : '0%',
	});

	useEffect(() => {
		const handleFocus = () => {
			if (projectRef.current) {
				projectRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'nearest',
					inline: 'center',
				});
			}
		};

		const projectElement = projectRef.current;
		projectElement?.addEventListener('focus', handleFocus);

		return () => {
			projectElement?.removeEventListener('focus', handleFocus);
		};
	}, []);

	return (
		<div
			className="home-box project-box"
			onClick={() => BulokeWindow.nextOpen(url)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}>
			{image && (
				<div className="image-container" style={box}>
					{/* eslint-disable jsx-a11y/alt-text */}
					<Image {...image} />
					<a.div
						className="image-overlay"
						style={{ ...springOverlay, ...box }}
					/>
				</div>
			)}

			<div className="project-box-content">
				<div>
					<a href={url} tabIndex={0} ref={projectRef}>
						{name}
						<a.div className="underline" style={springUnderline} />
					</a>
				</div>
				{description}
			</div>
		</div>
	);
};

const Carousel = () => {
	return (
		<div className="carousel">
			<div className="projects-container">
				{ProjectList.map(props => (
					<Project key={props.id} {...props} />
				))}
			</div>
		</div>
	);
};

const ProjectsBody = () => {
	return <Carousel />;
};

const Projects = () => {
	return (
		<Section sectionName="Projects">
			<ProjectsBody />
		</Section>
	);
};

export default Projects;
