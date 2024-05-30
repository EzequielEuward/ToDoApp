// import { useTodos } from '../hooks';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from "./todoReducer";
import { useReducer } from "react"


export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            description: 'Recolectar la piedra del alma',
            done: false,
        },
        {
            id: new Date().getTime() * 3,
            description: 'Recolectar la piedra del poder',
            done: false,
        }


    ];

    const handleNewTodo = (todo) => {
        console.log({ todo });
    }

    //  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    return (
        <>
            <h1>TodoApp: , <small>pendientes: </small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>

            </div>



        </>
    )
}

export default TodoApp