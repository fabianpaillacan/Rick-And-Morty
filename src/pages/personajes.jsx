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
            {personajes.map((pj) => (
            <div key={pj.id} className="">
                {pj.name}
            </div>
            ))}
        </div>
    </div>
  );
}

export default Personajes;