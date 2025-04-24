'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ButtonSignin from './ButtonSignin';
import OfflineButton from './OfflineButton';

const WelcomeScreen = () => {
  const router = useRouter();

  const handleSignInSuccess = () => {
    // Redirigir a la página de inicio después del inicio de sesión exitoso
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-[#FFE5B4] flex flex-col items-center justify-center p-4">
      {/* Main card container */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        {/* Logo and avatar container */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-white rounded-full border-4 border-red-600 shadow-lg">
            <Image
              src="/logo.png"
              alt="McDonald's Logo"
              fill
              className="object-contain p-4"
            />
          </div>
          {/* Avatar */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-white rounded-full border-2 border-red-600 overflow-hidden">
              <Image
                src="/avatar.png"
                alt="User Avatar"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Welcome text */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-4">
            ¡Bienvenido a McDonald&apos;s!
          </h1>
          <p className="text-lg text-gray-800">
            Tu experiencia deliciosa comienza aquí.
          </p>
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