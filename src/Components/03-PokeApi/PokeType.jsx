
export const PokeType = ({ data }) => {

  const typesText = data.types.map(typeSlot => typeSlot.type.name).join(', ');

  return (
    <p><strong>Tipo:</strong> {typesText}</p>

  );
};

export default PokeType