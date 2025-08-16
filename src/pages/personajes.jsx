import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

function Personajes() {

  return (
    <div>
        <div
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-900  hover:text-white transition-colors absolute z-10"        >
            <Link
            to="/"
            >
             Volver
            </Link>
        </div>
        <div className='min-h-screen flex items-center justify-center'>
          a
        </div>
    </div>
  );
}

export default Personajes;