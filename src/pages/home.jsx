import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

function Home() {

  return (
    <div>
        <div
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-900  hover:text-white transition-colors absolute z-10"        >
            <Link
            to="/formato"
            >
             Ver JSON
            </Link>
        </div>
        <div className='min-h-screen flex items-center justify-center'>
          <Link
          to="/personajes"
          className="bg-emerald-950 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors absolute z-10"
          >
            Ver Personajes
          </Link>
        </div>
    </div>
  );
}

export default Home;