import { useRef } from 'react';

const usePrev = <T>(value: T) => {
	const ref = useRef<T>(value);
	return ref?.current;
};

export default usePrev;
