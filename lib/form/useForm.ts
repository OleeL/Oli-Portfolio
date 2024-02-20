import { useState, useMemo } from 'react';
import { create } from 'zustand';
import usePrev from '../global_hooks/usePrev';

type ValidState = {
	isValid: boolean;
	message?: string;
};

const validate = (val: object): ValidState => {
	return {
		isValid: val !== null && val !== undefined,
		message: undefined,
	};
};

type Store<T> = {
	form: T;
	setForm: (form: T) => void;
	formErrors: any;
	setFormErrors: (formErrors: any) => void;
	changeForm: (key: keyof T, value: any) => void;
};

type FormChangeEvent = {
	currentTarget: {
		value: string;
	};
};

type FormReturnType<T> = [
	T,
	(changeObj: FormChangeEvent, objName: keyof T) => void,
	(form: T) => void,
	() => void,
];

const useForm = <T extends object>(obj: T) => {
	const useFormStore = useMemo(
		() =>
			create<Store<T>>(set => ({
				form: obj,
				setForm: (form: T) =>
					set(() => ({
						form,
					})),
				changeForm: (key: keyof T, value: any) =>
					set((state: Store<T>) => {
						return {
							...state,
							form: { ...state.form, [key]: value },
						};
					}),
				formErrors: {},
				setFormErrors: (formErrors: any) => set({ formErrors }),
			})),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	const { setForm, changeForm, form } = useFormStore();

	const [validState, setValidState] = useState<Record<string, ValidState>>(
		{},
	);
	const prev = usePrev(validState);

	const onChange = (changeObj: FormChangeEvent, objName: keyof T): void => {
		try {
			changeForm(objName, changeObj.currentTarget.value);
		} catch {
			throw new Error(
				'Bad object. Try correcting the input to: ' +
					'`<input onChange={(x: any) => onChange(x,key)} />`',
			);
		}
	};

	const onSubmit = () => {
		let validationState = {};
		for (const [k, v] of Object.entries(validState)) {
			if (prev[k] === v) {
				validationState = { ...validationState, [k]: prev[k] };
				continue;
			}
			validationState = { [k]: validate(v) };
		}

		setValidState(validationState);
	};

	return [form as T, onChange, setForm, onSubmit] as FormReturnType<T>;
};

export default useForm;
