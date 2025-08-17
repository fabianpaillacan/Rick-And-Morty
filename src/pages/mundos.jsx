import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocations } from '../services/api';
import '../index.css'

function Mundos(){
    const [mundos, setMundos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        cargarMundos();
    }, []);

    const cargarMundos = async () => {
        try {
            const data = await getLocations();
            setMundos(data.results); // Los datos vienen en data.results
            setLoading(false);
        } catch (error) {
            console.error('Error cargando mundos:', error);
            setLoading(false);
        } 
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-2xl">Cargando mundos...</div>
            </div>
        );
    }

    return (
        <div className="bg-purple-100 min-h-screen">
            <div className="bg-teal-400 text-black px-6 py-4 rounded-lg font-bold hover:bg-blue-900 hover:text-white transition-colors w-fit ml-4 mt-4">
                <Link to="/" className="block text-center">
                    Volver
                </Link>
            </div>

            <div className="text-center mt-8 mb-12">
                <h1 className="text-4xl font-bold text-purple-800">Mundos de Rick y Morty</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {mundos.map((location) => (
                    <div 
                        key={location.id} 
                        className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">
                            {location.name}
                        </h2>
                        
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-700">Tipo:</span>
                                <span className="text-gray-600">{location.type}</span>
                            </div>
                            
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-700">Dimensión:</span>
                                <span className="text-gray-600">
                                    {location.dimension === 'unknown' ? 'Desconocida' : location.dimension}
                                </span>
                            </div>
                            
                            <div className="flex justify-between">
                                <span className="font-semibold text-gray-700">Residentes:</span>
                                <span className="text-gray-600">{location.residents?.length || 0}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mundos;