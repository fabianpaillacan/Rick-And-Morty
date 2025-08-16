import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {

  return (
    <div>
        <button 
        className="bg-gradient-tr from-white to-teal-400 text-black font-mono"
        >
            <Link
            to="/formato"
            >
             Ver JSON
            </Link>
        </button>
    </div>
  );
}

export default Home;