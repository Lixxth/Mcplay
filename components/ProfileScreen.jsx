'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const ProfileScreen = () => {
  const { data: session } = useSession();
  const user = session?.user;
  
  // Datos de ejemplo para el nivel y progreso
  const userLevel = 1;
  const currentPoints = 250;
  const pointsForNextLevel = 500;
  const progress = (currentPoints / pointsForNextLevel) * 100;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#D6001C] p-6 text-white">
        <h1 className="text-2xl font-bold">Mi Perfil</h1>
      </header>

      {/* Profile Content */}
      <div className="max-w-2xl mx-auto p-4">
        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative w-24 h-24">
              <Image
                src={user?.image || '/avatar.png'}
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{user?.name || 'Usuario'}</h2>
              <p className="text-gray-600">{user?.email || 'usuario@ejemplo.com'}</p>
            </div>
          </div>
        </div>

        {/* Level Progress Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-800">Nivel {userLevel}</h3>
            <span className="text-[#D6001C] font-bold">{currentPoints}/{pointsForNextLevel} puntos</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div
              className="bg-[#FFCC00] h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600">
            Te faltan {pointsForNextLevel - currentPoints} puntos para el siguiente nivel
          </p>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Mis Estadísticas</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#D6001C]">0</p>
              <p className="text-gray-600">Pedidos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#D6001C]">{currentPoints}</p>
              <p className="text-gray-600">Puntos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#D6001C]">0</p>
              <p className="text-gray-600">Recompensas</p>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Configuración</h3>
          <div className="space-y-4">
            <Link
              href="/profile/preferences"
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⚙️</span>
                <span>Preferencias</span>
              </div>
              <span className="text-gray-400">→</span>
            </Link>

            <Link
              href="/profile/orders"
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🛍️</span>
                <span>Historial de Pedidos</span>
              </div>
              <span className="text-gray-400">→</span>
            </Link>

            <Link
              href="/profile/rewards"
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎁</span>
                <span>Mis Recompensas</span>
              </div>
              <span className="text-gray-400">→</span>
            </Link>

            <Link
              href="/profile/addresses"
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <span>Direcciones Guardadas</span>
              </div>
              <span className="text-gray-400">→</span>
            </Link>

            <Link
              href="/profile/payment"
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💳</span>
                <span>Métodos de Pago</span>
              </div>
              <span className="text-gray-400">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
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
    </div>
  );
};

export default ProfileScreen; 