import { FC } from 'react';
import { a } from 'react-spring';
import { useFadeIn } from '../lib/global_hooks';

const Profile: FC = () => {
	const fade = useFadeIn({ delay: 600 });

	return (
		<section className="centered full-screen" id="profile">
			<div className="profile">
				<h1>
					<span>Oli Legg</span>
					<br />
					<span className="dimmed">Software Engineer</span>
				</h1>
				<a.p style={fade} className="profile-text code">
					Full-stack software engineer currently working at{' '}
					<a href="https://www.destination2.co.uk/">
						Travcorp Holdings Ltd
					</a>
				</a.p>
			</div>
		</section>
	);
};

export default Profile;
