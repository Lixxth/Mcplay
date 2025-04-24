'use client';

import { useRouter } from 'next/navigation';
import ButtonSignin from './ButtonSignin';
import OfflineButton from './OfflineButton';
import { 
  UserCircleIcon,
  PlayCircleIcon,
  TrophyIcon,
  SparklesIcon 
} from '@heroicons/react/24/solid';

const WelcomeScreen = () => {
  const router = useRouter();

  const handleSignInSuccess = () => {
    // Redirigir a la página de inicio después del inicio de sesión exitoso
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-[#FFE5B4] flex flex-col items-center justify-center p-4">
      {/* Main card container */}
      <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 max-w-md w-full">
        {/* Logo and avatar container */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-[#D6001C] rounded-full shadow-lg">
          </div>
          {/* Avatar */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full border-2 border-red-600 overflow-hidden flex items-center justify-center">
              <UserCircleIcon className="w-10 h-10 md:w-14 md:h-14 text-red-600" />
            </div>
          </div>
        </div>

        {/* Welcome text */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
            ¡Bienvenido a McDonald&apos;s!
          </h1>
          <p className="text-base md:text-lg text-gray-800">
            Tu experiencia deliciosa comienza aquí.
          </p>
        </div>

        {/* Game features */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center text-center">
            <PlayCircleIcon className="w-8 h-8 md:w-10 md:h-10 text-[#D6001C] mb-2" />
            <p className="text-xs md:text-sm text-gray-600">Juegos</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <TrophyIcon className="w-8 h-8 md:w-10 md:h-10 text-[#FFCC00] mb-2" />
            <p className="text-xs md:text-sm text-gray-600">Premios</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <SparklesIcon className="w-8 h-8 md:w-10 md:h-10 text-[#D6001C] mb-2" />
            <p className="text-xs md:text-sm text-gray-600">Diversión</p>
          </div>
        </div>

        {/* Buttons container */}
        <div className="flex flex-col gap-4">
          <ButtonSignin onSignInSuccess={handleSignInSuccess} />
          <OfflineButton />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;