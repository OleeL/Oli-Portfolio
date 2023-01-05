import { FC, FormEvent } from 'react';
import Section from './Section';
import { Form } from '../lib/form/Form';
import { Input } from '../lib/form/Input';
import { TextArea } from '../lib/form/TextArea';
import { useForm } from '../lib/form/useForm';
import { SpringButton } from '../lib/form/SpringButton';
import styles from '../styles/variables.module.scss';

const ContactBody = () => {
    const [, onChange] = useForm({
        emailAddress: '',
        message: '',
    });

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    const FormButton = () => {
        return (
            <SpringButton
                textColor={{
                    defaultColor: styles.pColor,
                    hoverColor: styles.primaryThemeColor,
                }}
                borderColor={{
                    defaultColor: styles.dividerColor,
                    hoverColor: styles.primaryThemeColor,
                }}>
                Submit
            </SpringButton>
        );
    };

    return (
        <div className="contact">
            <div className="contact-container">
                <Form
                    onSubmit={onSubmit}
                    className="contact"
                    buttonComponent={FormButton}>
                    <Input
                        onChange={(x: any) => onChange(x, 'emailAddress')}
                        label="Email"
                        type="email"
                        required
                    />
                    <TextArea
                        label="Message"
                        className="messagebox"
                        required
                        onChange={(x: any) => onChange(x, 'message')}
                    />
                </Form>
            </div>
        </div>
    );
};

const Contact: FC = () => {
    return <Section sectionName={'Contact'} Content={ContactBody} />;
};

export default Contact;
