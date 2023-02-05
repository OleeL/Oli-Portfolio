import { FC, FormEvent, useState } from 'react';
import { CheckCircle } from 'react-feather';
import useAxios from 'axios-hooks';
import Section from './Section';
import { Form } from '../lib/form/Form';
import { Input } from '../lib/form/Input';
import { TextArea } from '../lib/form/TextArea';
import { useForm } from '../lib/form/useForm';
import { SpringButton } from '../lib/form/SpringButton';
import styles from '../styles/variables.module.scss';
import { ButtonProps } from '../lib/form/Button';

const FormButton: FC<ButtonProps> = props => {
    const isSuccess = props?.disabled && !props?.loading;
    const textColor = isSuccess
        ? {
              defaultColor: styles.colorSuccess,
              hoverColor: styles.colorSuccess,
          }
        : {
              defaultColor: styles.pColor,
              hoverColor: styles.primaryThemeColor,
          };
    const borderColor = isSuccess
        ? {
              defaultColor: styles.colorSuccess,
              hoverColor: styles.colorSuccess,
          }
        : {
              defaultColor: styles.dividerColor,
              hoverColor: styles.primaryThemeColor,
          };
    return (
        <SpringButton
            {...props}
            textColor={textColor}
            borderColor={borderColor}>
            {isSuccess ? (
                <>
                    <span>Sent!</span> <CheckCircle size={15} />
                </>
            ) : (
                <span>{!props?.loading ? 'Submit' : ''}</span>
            )}
        </SpringButton>
    );
};

const ContactBody = () => {
    const [form, onChange] = useForm({
        emailAddress: '',
        message: '',
    });

    const [sent, setSent] = useState(false);
    const [{ loading }, sendEmail] = useAxios(
        {
            url: '/api/email',
            method: 'POST',
        },
        { manual: true },
    );

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        sendEmail({ data: form });
        setSent(true);
    };

    return (
        <div className="contact">
            <div className="contact-container">
                <Form
                    loading={loading}
                    onSubmit={onSubmit}
                    className="contact"
                    disabled={sent}
                    buttonComponent={FormButton}>
                    <Input
                        onChange={(x: any) => onChange(x, 'emailAddress')}
                        label="Email"
                        type="email"
                        title={sent ? `Sent from ${form.emailAddress}` : ''}
                        required
                        disabled={sent}
                    />
                    <TextArea
                        label="Message"
                        className="messagebox fill-width"
                        required
                        title={sent ? 'Sent message' : ''}
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
