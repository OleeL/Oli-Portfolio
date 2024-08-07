export const range = (start: number, end: number): number[] => {
	const result: number[] = [];
	for (let i = start; i < end; i++) {
		result.push(i);
	}
	return result;
};

export const shuffleArray = <T>(array: T[]): T[] => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export const provideIds = <T>(array: T[]): (T & { id: number })[] => {
	return array.map((x, id) => ({ id, ...x }));
};
