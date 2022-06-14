import React from 'react';
import Bandas from './Bandas';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  
query{
  bandas{
   id
    nombre
    genero
    canciones
    empresa
    salida
  }
}
  
`
;
const MusicaList = () => {
  /*const linksToRender = [
    {
      id: 'link-id-1',
      description:
        'Prisma gives you a powerful database toolkit 😎',
      url: 'https://prisma.io'
    },
    {
      id: 'link-id-2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/'
    }
  ];*/

  const { data } = useQuery(FEED_QUERY);

  return (
    <div class="xd">
      



<table>
        <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>genero</th>
          <th>canciones</th>
          <th>empresa</th>
          <th>salida</th>
        </tr>
        </thead>
        <tbody >

        {data && data.bandas.map(( banda) => {return (
            <tr key={banda.id}>
           <td>{banda.id}</td>
           <td>{banda.nombre}</td>
            <td>{banda.genero}</td>
            <td>{banda.canciones}</td>
            <td>{banda.empresa}</td>
            <td>{banda.salida}</td>

            </tr>

          )})}

        </tbody>
      </table>

    </div>
  );
};

export default MusicaList;