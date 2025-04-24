'use client';

import Image from 'next/image';
import Link from 'next/link';

const GamesSection = () => {
  const games = [
    {
      id: 1,
      title: 'Atrapa las Papas',
      description: 'Atrapa las papas fritas en la caja de McDonald\'s',
      image: '/Juegos/atrapapaps.png',
      path: '/games/catch-fries'
    },
    {
      id: 2,
      title: 'McQuiz',
      description: 'Pon a prueba tus conocimientos',
      image: '/Juegos/atrapapaps.png',
      path: '/games/quiz'
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Juegos</h2>
      <div className="grid grid-cols-1 gap-4">
        {games.map((game) => (
          <Link
            key={game.id}
            href={game.path}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-40">
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-[#D6001C]">{game.title}</h3>
              <p className="text-gray-600">{game.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GamesSection; 