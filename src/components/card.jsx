import React, { useEffect, useState } from 'react';

export default function Card({ pokemonid, name }) {
  const [pdata, setPdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getpokemondata = async () => {
      setLoading(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`);
      const result = await res.json();
      setPdata(result);
      console.log(result.sprites.front_default, result.weight, result.height);
      setLoading(false);
    };
    getpokemondata();
  }, [pokemonid]);

  return (
    <div className="flex w-40 h-60 flex-col rounded-md bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative h-24 overflow-hidden rounded-md bg-white bg-clip-border text-gray-700 shadow-lg">
        {!loading ? (
          <img className='h-full w-full' src={pdata.sprites.front_default} alt={`${name} sprite`} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="p-3">
        <h4 className="mb-2 block font-sans text-lg font-semibold text-blue-gray-900 antialiased text-center">
          {name}
        </h4>
        <p className="text-gray-600 font-sans text-xs line-clamp-2">
          {!loading? (
            <p>Weight: {pdata.weight}</p>
          ): (
            <p>Loading...</p>
          )}
          {!loading? (<p>Height: {pdata.height}</p>): (<p>Loading...</p>)}
        </p>
      </div>
    </div>
  );
}
