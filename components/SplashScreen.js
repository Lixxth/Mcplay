"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/welcome');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FFCC00] to-white">
      {/* Contenedor del logo y los íconos */}
      <div className="relative flex items-center justify-center mb-8 animate-fadeIn">
        {/* Logo principal */}
        <div className="text-6xl font-bold text-red-600 flex items-center gap-4">
          <span className="animate-bounce delay-100">M</span>
          <span className="animate-bounce delay-200">c</span>
          <span className="animate-bounce delay-300">P</span>
          <span className="animate-bounce delay-400">l</span>
          <span className="animate-bounce delay-500">a</span>
          <span className="animate-bounce delay-600">y</span>
        </div>

        {/* Ícono de control de videojuego */}
        <div className="absolute -right-16 top-0 animate-float">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m3 3V9m3 3h6m-3-3v6m0 0v6m0-6h6" />
          </svg>
        </div>

        {/* Ícono de papas fritas */}
        <div className="absolute -left-16 top-0 animate-float delay-150">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Texto de bienvenida */}
      <div className="text-center animate-fadeInUp">
        <h1 className="text-red-600 text-2xl font-bold">
          Bienvenido a la nueva experiencia de ordenar
        </h1>
      </div>

      {/* Indicador de carga */}
      <div className="mt-8 flex gap-2 animate-pulse">
        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
        <div className="w-3 h-3 bg-red-600 rounded-full delay-100"></div>
        <div className="w-3 h-3 bg-red-600 rounded-full delay-200"></div>
      </div>
    </div>
  );
};

export default SplashScreen; 