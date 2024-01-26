/* eslint-disable import/prefer-default-export */
export const toKebabCase = (str: string): string =>
	(str &&
		str
			.match(
				/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
			)
			?.map(x => x.toLowerCase())
			?.join('-')) ??
	'';
