export const PokeStats = ({stats}) => {
    return (
        <div>
          {stats.map((stat, index) => (
            <p key={index}>
              <strong>{stat.stat.name}:</strong> {stat.base_stat}
            </p>
          ))}
        </div>
      );
}

export default PokeStats
