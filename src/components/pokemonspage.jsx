import React, { useEffect, useState } from 'react';
import Card from './card';
import { useNavigate, useParams } from 'react-router-dom';

export default function Pokemonspage() {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(1);
    const navigate = useNavigate();
    const {username} = useParams();


    // get the data of pokemons with specific offset with increases or decreases by 4
    useEffect(() => {
        const calcnextset = async () => {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=4&offset=${offset}`);
            const res = await data.json();
            setPokemons(res.results); 
        };

        calcnextset();
    }, [offset]);


    return (
        <>
            <button className='absolute top-4 right-4 p-1 m-1 rounded-md bg-red-500 text-sm' onClick={() => window.location.reload()}>
                Logout
            </button>
            <div className='m-auto w-5/6 h-3/5 rounded-md p-4 bg-white border-md border-2 border-slate-400 overflow-hidden flex flex-row'>
                {pokemons.map((pokemon, index) => (
                    <button  onClick={() => navigate(`/auth/${username}/${pokemon.name}`)}>
                        <Card key={offset+index} pokemon={pokemon} pokemonid = {index+offset+1} name = {pokemon.name}/>
                    </button>
                ))}
            </div>
            <div className='w-full flex justify-end'>
                <button className='p-2 m-2' onClick={() => setOffset(offset => Math.max(1, offset - 4))}>
                    <img src='../leftarrow.png' className='w-12 h-12' alt='Previous' />
                </button>
                <button className='p-2 m-2' onClick={() => setOffset(offset => offset + 4)}>
                    <img src='https://img.icons8.com/?size=100&id=71601&format=png&color=000000' className='w-12 h-12' alt='Next' />
                </button>
            </div>
        </>
    );
}
