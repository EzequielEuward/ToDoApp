import { useForm } from "../Hooks/useForm"


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 3) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description:description,
        }   
        onNewTodo(newTodo);
        onResetForm();
    }


    return (
        <form onSubmit={onFormSubmit}>

            <input type="text" name="description" className='form-control' placeholder='¿Que hay que hacer?' onChange={onInputChange} value={description} />

            <button type='submit' className='btn btn-outline-primary mt-1'>Agregar</button>
        </form>
    )
}

export default TodoAdd
