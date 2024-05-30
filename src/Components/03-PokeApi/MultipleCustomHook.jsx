import { useCounter } from "../Hooks/useCounter";
import { useFetch } from "../Hooks/useFetch";


import './loading.css';
import './card.css';
import { FlipCard } from "./FlipCard";

export const MultipleCustomHook = (order) => {

    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1 className="text-center">¿Cual es ese Pokemon?</h1>
            <hr />
            {
                (isLoading) ? (
                    <div className="container">
                        <div className="item item-1"></div>
                        <div className="item item-2"></div>
                        <div className="item item-3"></div>
                        <div className="item item-4"></div>
                    </div>
                )
                    : (
                        <FlipCard data={data} />
                    )

            }
            <div className="d-flex justify-content-center">
                <button className=" bg-warning mx-2" onClick={() => decrement()} disabled={isLoading}>Atras</button>
                <button className="bg-warning mx-2" onClick={() => increment(1)} disabled={isLoading}>Siguiente</button>
            </div>


        </>
    )
}
export default MultipleCustomHook
