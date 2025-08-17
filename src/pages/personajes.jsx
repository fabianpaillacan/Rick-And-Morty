import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import { getDatos } from '../services/api';

function Personajes() {
  const navigate = useNavigate();
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    cargarPersonajes();
  }, []);

  const cargarPersonajes = async () => {
    try {
      for (let page = 1; page <= 42; page++) {
        const data = await getDatos(page);
        setPersonajes(prev => [...prev, ...data.results]); // Actualización incremental
      }
    } catch (error) {
      console.error("Error cargando página:", page, error);
    }
  };

  return (
    <div className='bg-purple-100'>
      <div className="bg-teal-400 text-black px-6 py-8 ml-3 rounded-lg font-bold hover:bg-blue-900 hover:text-white transition-colors w-fit">
        <Link to="/" className="block text-center">Volver</Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6'>
        {personajes.map((pj) => (
          <button 
            key={pj.id} 
            className="border-2 border-orange-950 rounded-bl-3xl rounded-tr-3xl hover:bg-teal-600 transition-all duration-200 hover:scale-90"
            onClick={() => navigate(`/personajes/${pj.id}`)}
          >
            <div>
              <img 
                src={`https://rickandmortyapi.com/api/character/avatar/${pj.id}.jpeg`}
                alt={pj.name}
                className="w-40 h-40 mt-3 mx-auto rounded-xl relative z-10 shadow-xl/30 shadow-black transition-all duration-300"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-mono text-black">{pj.name}</h2>
            </div>
            <div>
              <h4>{pj.species}</h4>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Personajes;