'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/WelcomeScreen');
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#FFE5B4] flex flex-col items-center justify-center">
      <div className="relative w-48 h-48 mb-8 animate-bounce">
        <div className="absolute inset-0 bg-white rounded-full border-4 border-red-600 shadow-lg">
          <Image
            src="/logo.png"
            alt="McDonald's Logo"
            fill
            className="object-contain p-4"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-red-600 animate-pulse">
        McDonald&apos;s
      </h1>
    </div>
  );
};

export default SplashScreen; 