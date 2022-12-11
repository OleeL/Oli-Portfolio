import { FC } from 'react';
import Section from './Section';

const ContactBody = () => <p className='paragraph-start'>Contact</p>;

const Contact: FC = () => {
    return <Section sectionName={'Contact'} Content={ContactBody} />;
};

export default Contact;
