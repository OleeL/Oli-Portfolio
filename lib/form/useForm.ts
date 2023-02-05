import { useState, SyntheticEvent } from 'react';
import { create } from 'zustand';
import usePrev from '../global_hooks/usePrev';

type FormParams<T> = { [s: string]: T };

const validate = (val: any) => {
    return val && `${val}` !== '';
};

type Store<T> = {
    form: T;
    setForm: (form: T) => void;
    formErrors: any;
    setFormErrors: (formErrors: any) => void;
    changeForm: (key: string, value: any) => void;
};

const useStoreForm = create<Store<any>>(set => ({
    form: {},
    setForm: (form: any) => set({ form }),
    changeForm: (key: string, value: any) =>
        set(x => {
            x.form[key] = value;
            return x;
        }),
    formErrors: {},
    setFormErrors: (formErrors: any) => set({ formErrors }),
}));

export const useForm = <T>({ obj }: FormParams<T>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { form, setForm, changeForm } = useStoreForm();
    const [validState, setValidState] = useState<Record<string, any>>({});
    const prev = usePrev(validState);

    const onChange = (
        changeObj: SyntheticEvent<HTMLInputElement>,
        objName: string,
    ) => {
        changeForm(objName, changeObj.currentTarget.value);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onSubmit = () => {
        setValidState(
            Object.entries(validState).map(([k, v]) => {
                // eslint-disable-next-line no-console
                console.log(k, v, form, obj);
                if (prev[k] === v) {
                    return validState[k] ?? true;
                }
                return validate(v);
            }),
        );
    };

    return [form, onChange];
};
