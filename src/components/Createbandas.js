import React, { useState } from 'react';

import { useMutation, gql } from '@apollo/client';

const CREATE_BANDA_MUTATION = gql`
  mutation PostMutation(
   
    $nombre: String!
    $genero: String!
    $canciones: String!
    $empresa: String!
    $salida: String!
  ) {
    createBanda(nombre: $nombre, genero: $genero,canciones: $canciones, empresa: $empresa, salida: $salida) {
      id
      nombre
      genero
      canciones
      empresa
      salida
    }
  }
`;



const CreateBandas = () => {
  const [formState, setFormState] = useState({
    nombre: '',
    genero: '',
    canciones:'',
    empresa: '',
    salida: '',
  });

  const [createBandas] = useMutation(CREATE_BANDA_MUTATION, {
    variables: {
      nombre: formState.nombre,
      genero: formState.genero,
      canciones: formState.canciones,
      empresa: formState.empresa,
      salida: formState.salida
    }
  });

  

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createBandas();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.nombre}
            onChange={(e) =>
              setFormState({
                ...formState,
                nombre: e.target.value
              })
            }
            type="text"
            placeholder="inserte el nombre de la banada"
          />
          <input
            className="mb2"
            value={formState.genero}
            onChange={(e) =>
              setFormState({
                ...formState,
                genero: e.target.value
              })
            }
            type="text"
            placeholder="inserte genero"
          />

           <input
            className="mb2"
            value={formState.canciones}
            onChange={(e) =>
              setFormState({
                ...formState,
                canciones: e.target.value
              })
            }
            type="text"
            placeholder="inserte canciones"
          />

            <input
            className="mb2"
            value={formState.empresa}
            onChange={(e) =>
              setFormState({
                ...formState,
                empresa: e.target.value
              })
            }
            type="text"
            placeholder="inserte empresa que vendio el disco"
          />


            <input
            className="mb2"
            value={formState.salida}
            onChange={(e) =>
              setFormState({
                ...formState,
                salida: e.target.value
              })
            }
            type="text"
            placeholder="inserte fecha de salida"
          />

        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBandas;