import React from 'react';

const Bandas = (props) => {
  const { banda } = props;
  return (
    <div>
      <div>
        {banda.nombre} ({banda.genero}) ({banda.canciones})
      </div>
    </div>
  );
};

export default Bandas;