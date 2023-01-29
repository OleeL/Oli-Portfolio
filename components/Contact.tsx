import {
    ButtonHTMLAttributes,
    ComponentType,
    FC,
    FormEvent,
    useState,
} from 'react';
import Section from './Section';
import { Form } from '../lib/form/Form';
import { Input } from '../lib/form/Input';
import { TextArea } from '../lib/form/TextArea';
import { useForm } from '../lib/form/useForm';
import { SpringButton } from '../lib/form/SpringButton';
import styles from '../styles/variables.module.scss';

const FormButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => {
    return (
        <SpringButton
            {...props}
            textColor={{
                defaultColor: styles.pColor,
                hoverColor: styles.primaryThemeColor,
            }}
            borderColor={{
                defaultColor: styles.dividerColor,
                hoverColor: styles.primaryThemeColor,
            }}>
            {props?.disabled ? 'Sent!' : 'Submit'}
        </SpringButton>
    );
};

const ContactBody = () => {
    const [form, onChange] = useForm({
        emailAddress: '',
        message: '',
    });

    const [sent, setSent] = useState(false);

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(form);
        setSent(true);
    };

    return (
        <div className="contact">
            <div className="contact-container">
                <Form
                    onSubmit={onSubmit}
                    className="contact"
                    disabled={sent}
                    buttonComponent={FormButton}>
                    <Input
                        onChange={(x: any) => onChange(x, 'emailAddress')}
                        label="Email"
                        type="email"
                        required
                        disabled={sent}
                    />
                    <TextArea
                        label="Message"
                        className="messagebox"
                        required
                        onChange={(x: any) => onChange(x, 'message')}
                        disabled={sent}
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
