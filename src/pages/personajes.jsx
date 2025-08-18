import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';
import { getDatos } from '../services/api';

function Personajes() {
  const navigate = useNavigate();
  const [personajes, setPersonajes] = useState([]);
  const [todosLosPersonajes, setTodosLosPersonajes] = useState([]); // Almacena todos los personajes
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    cargarPersonajes();
  }, []);

  // Carga todos los personajes
  const cargarPersonajes = async () => {
    try {
      let todos = [];
      for (let page = 1; page <= 42; page++) {
        const data = await getDatos(page);
        todos = [...todos, ...data.results];
      }
      setTodosLosPersonajes(todos);
      setPersonajes(todos); // Mostramos todos al inicio
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Filtra personajes según la búsqueda
  useEffect(() => {
    if (busqueda === '') {
      setPersonajes(todosLosPersonajes);
    } else {
      const filtrados = todosLosPersonajes.filter(personaje =>
        personaje.name.toLowerCase().includes(busqueda.toLowerCase())
      );
      setPersonajes(filtrados);
    }
  }, [busqueda, todosLosPersonajes]);

  return (
    <div className='bg-purple-100'>
      <div className="flex justify-between items-center p-4">
        <div className="bg-teal-400 text-black px-6 py-2 rounded-lg font-bold hover:bg-blue-900 hover:text-white transition-colors w-fit">
          <Link to="/" className="block text-center">Volver</Link>
        </div>
        <div className="w-full max-w-md mx-4">
          <input
            type="text"
            placeholder="Buscar personaje por nombre..."
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-teal-500 transition-colors"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div><p className='text-black font-mono text-xl font-bold'>Personajes Cargados: {todosLosPersonajes.length}</p></div>
       
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6 p-4'>
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