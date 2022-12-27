import { FC } from 'react';
import Section from './Section';
import { Form } from '../lib/form/Form';
import { Input } from '../lib/form/Input';

const ContactBody = () => (
    <div className="contact">
        <div className="contact-container">
            <Form>
                <Input label="Email" type="email" id="email" required />
            </Form>
        </div>
    </div>
);

const Contact: FC = () => {
    return <Section sectionName={'Contact'} Content={ContactBody} />;
};

export default Contact;
