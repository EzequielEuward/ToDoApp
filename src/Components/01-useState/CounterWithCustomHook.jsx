import { useCounter } from "../Hooks/useCounter"

export const CounterWithCustomHook = () => {


    const {counter, increment,reset,decrement} = useCounter();

    

  return (
    <>
      <h1>Counter With Hook: {counter} </h1>
      <hr />

      <button onClick={increment} className="btn btn-warning">+1</button>
      <button  onClick={reset} className="btn btn-warning">Reset</button>
      <button onClick={decrement} className="btn btn-warning">-1</button>
    </>
  )
}

export  default CounterWithCustomHook
