import { useState, SyntheticEvent } from 'react';
import { create } from 'zustand';
import { shallow } from 'zustand/shallow';
import usePrev from '../global_hooks/usePrev';

const validate = (val: any) => {
	return val && `${val}` !== '';
};

type Store<T> = {
	form: T;
	setForm: (form: T) => void;
	formErrors: any;
	setFormErrors: (formErrors: any) => void;
	changeForm: (key: keyof T, value: any) => void;
};

const useFormStore = create<Store<any>>(set => ({
	form: {},
	setForm: (form: any) =>
		set((x: Store<any>) => ({
			...x,
			form,
		})),
	changeForm: (key: keyof any, value: any) =>
		set((x: Store<any>) => {
			x.form[key] = value;
			return x;
		}),
	formErrors: {},
	setFormErrors: (formErrors: any) => set({ formErrors }),
}));

export const useForm = <T>() => {
	const { form, setForm, changeForm } = useFormStore(
		state => ({
			form: state.form,
			setForm: state.setForm,
			changeForm: state.changeForm,
		}),
		shallow,
	);
	const [validState, setValidState] = useState<Record<string, any>>({});
	const prev = usePrev(validState);

	const onChange = (
		changeObj: SyntheticEvent<HTMLInputElement>,
		objName: keyof T,
	): void => {
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
		setValidState(
			Object.entries(validState).map(([k, v]) => {
				if (prev[k] === v) {
					return validState[k] ?? true;
				}
				return validate(v);
			}),
		);
	};

	return [form, onChange, setForm, onSubmit];
};
