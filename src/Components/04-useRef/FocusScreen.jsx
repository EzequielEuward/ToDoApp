import './style_useRef.css';
import {useRef} from 'react';

export const FocusScreen = () => {
  const onClick = () => {
    document.querySelector('input').select();
  }
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input type="text" placeholder="Ingrese su nombre" className="form-control w-50" />

      <button onClick={onClick}>set Focus</button>
    </>
  )
}

export default FocusScreen
