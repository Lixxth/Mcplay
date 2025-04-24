'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import GameAccessModal from './GameAccessModal';
import GamesSection from './GamesSection';

const HomeScreen = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name || 'Usuario';
  const [showGameModal, setShowGameModal] = useState(false);
  const [showGames, setShowGames] = useState(false);

  const handleGameAccess = () => {
    setShowGames(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with greeting */}
      <header className="bg-red-600 p-4">
        <h2 className="text-white text-xl font-semibold">
          ¡Hola, {userName}!
        </h2>
      </header>

      {/* Welcome banner */}
      <div className="bg-[#D6001C] p-6 text-center">
        <h1 className="text-4xl font-bold text-[#FFCC00]">
          BIENVENIDO
        </h1>
      </div>

      {/* Free fries card */}
      <div className="mx-4 my-6 p-4 bg-white rounded-lg shadow-lg border-2 border-[#FFCC00]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Papas medianas</h3>
            <p className="text-gray-600">Cada día</p>
          </div>
          <span className="text-2xl font-bold text-[#D6001C]">GRATIS</span>
        </div>
      </div>

      {/* Games section */}
      {!showGames ? (
        <div className="mx-4 my-6">
          <button
            onClick={() => setShowGameModal(true)}
            className="w-full bg-[#FFCC00] text-[#D6001C] font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-[#FFD700] transition-colors"
          >
            🎮 Jugar Ahora
          </button>
        </div>
      ) : (
        <GamesSection />
      )}

      {/* Personalized recommendation */}
      <section className="mx-4 my-6">
        <h2 className="text-xl font-bold mb-4">Recomendado para ti</h2>
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
            <img src="/imagesHome/combo-removebg-preview.png" alt="Prueba" width="100" />
            </div>
            <div>
              <h3 className="font-semibold">Double McMuffin con Bacon</h3>
              <p className="text-gray-600">$5.99</p>
            </div>
          </div>
          <button className="bg-[#FFCC00] p-2 rounded-full">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Offers section */}
      <section className="mx-4 my-6">
        <h2 className="text-xl font-bold mb-4">Las Ofertas</h2>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
              <img src="/imagesHome/mc_trio-removebg-preview.png" alt="Prueba" width="100" />
              </div>
              <div>
                <h3 className="font-semibold">Combo Especial</h3>
                <p className="text-gray-600">Papas + Bebida</p>
              </div>
            </div>
            <span className="text-2xl font-bold text-[#D6001C]">$4.99</span>
          </div>
        </div>
      </section>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around p-4">
          <Link href="/home" className="flex flex-col items-center">
            <span className="text-2xl">🏠</span>
            <span className="text-xs">Inicio</span>
          </Link>
          <Link href="/orders" className="flex flex-col items-center">
            <span className="text-2xl">🛍️</span>
            <span className="text-xs">Pedidos</span>
          </Link>
          <Link href="/history" className="flex flex-col items-center">
            <span className="text-2xl">📋</span>
            <span className="text-xs">Historial</span>
          </Link>
          <Link href="/rewards" className="flex flex-col items-center">
            <span className="text-2xl">🎁</span>
            <span className="text-xs">Recompensas</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center">
            <span className="text-2xl">👤</span>
            <span className="text-xs">Perfil</span>
          </Link>
        </div>
      </nav>

      {/* Game Access Modal */}
      <GameAccessModal
        isOpen={showGameModal}
        onClose={() => setShowGameModal(false)}
        onAccessGranted={handleGameAccess}
      />
    </div>
  );
};

export default HomeScreen; 