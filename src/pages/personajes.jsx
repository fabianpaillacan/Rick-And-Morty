import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import { getDatos } from '../services/api';

function Personajes() {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        cargarPersonajes();
      }, []);

    const cargarPersonajes= async () => {
        try {
          const data = await getDatos();
 
          setPersonajes(data.results);
        } catch (error) {
          console.error('Error loading pokemons:', error);
        } 
      };
  return (
    <div>
        <div
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-900  hover:text-white transition-colors"        >
            <Link
            to="/"
            >
             Volver
            </Link>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-5 mt-6'>
            {personajes.map((pj, index) => (
            <button key={pj.id} className="border-t-indigo-950 bg-gray-600 rounded-bl-3xl rounded-tr-3xl">
                  <div>
                    <img 
                            src={`https://rickandmortyapi.com/api/character/avatar/${index+1}.jpeg`}
                            alt={pj.name}
                            className="w-40 h-40 mt-3 mx-auto relative z-10 filter contrast-125 brightness-110 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                          />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extralight text-white">{pj.name}</h2>
                  </div>
            </button>
            ))}
        </div>
    </div>
  );
}

export default Personajes;