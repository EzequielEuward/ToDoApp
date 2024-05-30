import { useState } from "react"

export const useLogin = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        if (value.length <= 30) {
            setFormState({
                ...formState,
                [name]: value,

            });
        }
    }

    const onResetForm = () => {
        console.log('Username:', formState.username);
        console.log('Email:', formState.email);
        console.log('Password:', formState.password);
        setFormState(initialForm);
    }


    return {
        ...formState,
        formState,
        onResetForm,
        onInputChange,
    }

}

export default useLogin
