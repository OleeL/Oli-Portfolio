export const useCookieHandler = () => {
	const addCookie = (key: string, value: string, durationDays: number) => {
		const exdate = new Date();
		exdate.setDate(exdate.getDate() + durationDays);
		const cValue =
			encodeURI(value) +
			(durationDays == null ? '' : `; expires=${exdate.toUTCString()}`);
		document.cookie = `${key}=${cValue}`;
	};

	return { addCookie };
};
