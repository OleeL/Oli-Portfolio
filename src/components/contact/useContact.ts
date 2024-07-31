'use client';

import useAxios from 'axios-hooks';
import { FormEvent, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import useForm from '../../lib/form/useForm';

type ContactForm = {
	emailAddress: string;
	message: string;
};

export const useContact = () => {
	const [form, onChange, , validateForm] = useForm<ContactForm>({
		emailAddress: '',
		message: '',
	});

	const [sent, setSent] = useState<boolean>(false);

	const [{ loading }, sendEmail] = useAxios(
		{
			url: '/api/email',
			method: 'POST',
		},
		{ manual: true },
	);

	const recaptchaRef = useRef<ReCAPTCHA>(null);

	const processRecaptcha = async () => {
		if (recaptchaRef.current) {
			return recaptchaRef.current.executeAsync();
		}
		return '';
	};

	const onSubmit = async (event: FormEvent) => {
		validateForm();
		event.preventDefault();
		sendEmail({
			data: { ...form, recaptchaToken: (await processRecaptcha()) ?? '' },
		});
		setSent(true);
	};

	return {
		recaptchaRef,
		onSubmit,
		loading,
		sent,
		onChange,
		form,
	};
};
