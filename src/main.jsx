import React from "react";
import ReactDOM from 'react-dom/client';
// import './Style/index.css';
import './Style/useReducer.css';

// import {HookApp} from './Components/HookApp';
// import { CounterApp } from './Components/01-useState/CounterApp'
// import {CounterWithCustomHook} from './Components/01-useState/CounterWithCustomHook'
// import {SimpleForm} from './Components/02-useEffect/SimpleForm';
// import { LoginApp } from './Components/Login/LoginApp';
// import { MultipleCustomHook } from './Components/03-PokeApi/MultipleCustomHook'
// import { FocusScreen } from './Components/04-useRef/FocusScreen'
import {TodoApp} from './Components/05-Reducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(

    <>
        {/* <CounterApp />
        <CounterWithCustomHook />
        <SimpleForm /> */}
        {/* <HookApp /> */}
        {/* <LoginApp /> */}
        {/* <MultipleCustomHook /> */}
        {/* <FocusScreen/> */}
        <TodoApp/>
    </>

);