import { PokeType } from './PokeType';
import {PokeStats}  from './PokeStats';



export const FlipCard = ({ data }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={data.sprites.front_default} alt={`${data.name} sprite`} />
          <p className="title">{data.name.toUpperCase()}</p>
          <p>Pokedex: {data.id}</p>
        </div>
        <div className="flip-card-back">
          <h3 className="title">STATS</h3>
          <hr />
          <PokeType data={data} />
          <p><strong>Peso: </strong> {data.weight}g</p>
          <PokeStats stats={data.stats}/>

        </div>

      </div>
      
    </div>

  );
};


export default FlipCard;
