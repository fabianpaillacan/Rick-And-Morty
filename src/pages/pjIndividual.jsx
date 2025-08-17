import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../index.css'

function Personaje() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPersonaje = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await response.json();
        setPersonaje(data);
        setLoading(false);
      } catch (error) {
        console.error('Error cargando personaje:', error);
        setLoading(false);
      }
    };

    if (id) {
      cargarPersonaje();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Cargando...</div>
      </div>
    );
  }

  if (!personaje) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">Personaje no encontrado</div>
      </div>
    );
  }

  return (
    <div className="bg-purple-100 min-h-screen">
      <div className="bg-teal-400 text-black px-6 py-4 rounded-lg font-bold hover:bg-blue-900 hover:text-white transition-colors w-fit ml-4 mt-4">
        <Link to="/personajes" className="block text-center">
          Volver
        </Link>
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
          <img 
            src={personaje.image} 
            alt={personaje.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-center mb-4">{personaje.name}</h1>
        
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-semibold">Especie:</span>
              <span>{personaje.species}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Estado:</span>
              <span className={`px-2 py-1 rounded-full text-sm ${
                personaje.status === 'Alive' ? 'bg-green-100 text-green-800' :
                personaje.status === 'Dead' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {personaje.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Género:</span>
              <span>{personaje.gender}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Origen:</span>
              <span>{personaje.origin?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Ubicación:</span>
              <span>{personaje.location?.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personaje;