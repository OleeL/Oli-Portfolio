'use client';

import { FC, ReactElement } from 'react';
import GoogleRecaptcha from 'react-google-recaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Section from '../Section';
import { Form } from '../../lib/form/Form';
import { Input } from '../../lib/form/Input';
import { TextArea } from '../../lib/form/TextArea';
import { SpringButton } from '../../lib/form/SpringButton';
import styles from '../../styles/variables.module.scss';
import { ButtonProps } from '../../lib/form/Button';
import { useContact } from './useContact';

const FormButton = (props: ButtonProps): ReactElement => {
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
					<span>Sent!</span> <FontAwesomeIcon icon={faCheck} />
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
						value={form.emailAddress}
					/>
					<TextArea
						label="Message"
						className="messagebox fill-width"
						required
						title={sent ? 'Sent message' : ''}
						onChange={x => onChange(x, 'message')}
						disabled={sent}
						value={form.message}
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

const Contact: FC = () => (
	<Section sectionName="Contact">
		<ContactBody />
	</Section>
);

export default Contact;
