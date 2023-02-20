import { FC } from 'react';
import { CheckCircle } from 'react-feather';
import GoogleRecaptcha from 'react-google-recaptcha';
import Section from '../Section';
import { Form } from '../../lib/form/Form';
import { Input } from '../../lib/form/Input';
import { TextArea } from '../../lib/form/TextArea';
import { SpringButton } from '../../lib/form/SpringButton';
import styles from '../../styles/variables.module.scss';
import { ButtonProps } from '../../lib/form/Button';
import { useContact } from './useContact';

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
            type="submit"
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
    const { loading, onSubmit, sent, onChange, form, recaptchaRef } =
        useContact();
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
                        onChange={x => onChange(x, 'emailAddress')}
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
                        onChange={x => onChange(x, 'message')}
                        disabled={sent}
                    />
                    <GoogleRecaptcha
                        theme="dark"
                        ref={recaptchaRef}
                        style={{
                            display: 'none',
                        }}
                        size="invisible"
                        sitekey={
                            process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY
                        }
                    />
                </Form>
            </div>
        </div>
    );
};

const Contact: FC = () => {
    return <Section sectionName={'Contact'} content={ContactBody} />;
};

export default Contact;
