import { useState } from 'react';
import create from 'zustand';
import usePrev from '../global_hooks/usePrev';

type FormParams<T> = {
    onSubmit: () => void;
    onChange: (name: string, value: any) => void;
    obj: { [s: string]: T };
};

const validate = (val: any) => {
    return val && `${val}` !== '';
};

type Store<T> = {
    form: T;
    setForm: (form: T) => void;
    formErrors: any;
    setFormErrors: (formErrors: any) => void;
};

const useStoreForm = create<Store<any>>(set => ({
    form: {} as any,
    setForm: (form: any) => set({ form }),
    formErrors: {},
    setFormErrors: (formErrors: any) => set({ formErrors }),
}));

export const useForm = <T>({ obj }: FormParams<T>) => {
    const { form } = useStoreForm();
    const [validState, setValidState] = useState<Record<string, any>>({});
    const prev = usePrev(validState);

    const onChange = (changeObj: T) => {
        setValidState(
            Object.entries<T>(validState).map(([k, v]) => {
                // eslint-disable-next-line no-console
                console.log(k, v, changeObj, obj);
                if (prev[k] === v) {
                    return validState[k] ?? true;
                }
                return validate(v);
            }),
        );
    };
    return [form, onChange];
};
