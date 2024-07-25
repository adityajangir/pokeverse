import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './card';

export default function Pokemonpage() {
  const {username, pokemonname} = useParams();
  const [pokemondata, setPokemondata] = useState(null);


  return (
    <>
    <button className='absolute top-4 right-4 p-1 m-1 rounded-md bg-red-500 text-sm' onClick={() => window.location.reload()}>
                Logout
            </button>
            <div className='grid place-content-center'><Card pokemonid={pokemonname} name={pokemonname}></Card></div>
    </>
  )
}
