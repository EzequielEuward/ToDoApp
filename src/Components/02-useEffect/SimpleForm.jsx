import { useState, useEffect } from "react"
import {Message} from './Message'

export const SimpleForm = () => {

  
    const [formState, setFormState] = useState({
        username: 'Ezequiel',
        email: ''
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    useEffect(() => {
        
    }, [formState]);

    useEffect(() => {
       
    }, [email]);


    return (
        <>
            <h1>Formulario Simple</h1>

            <hr />

            <input type="text" name="username" className="form-control w-50 mb-3 " placeholder="Username" value={username} onChange={onInputChange} />

            <input type="email" name="email" className="form-control mt-2 w-50" placeholder="ejemplo@gmail.com" value={email} onChange={onInputChange} />


            {
            (username === 'Ezequiel2' && <Message/>)
            }
        </>
    )
}

export default SimpleForm
