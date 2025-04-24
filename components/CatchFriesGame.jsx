'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const CatchFriesGame = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // 30 segundos de juego
  const [fries, setFries] = useState([]);
  const [boxPosition, setBoxPosition] = useState(50); // posición inicial del box
  const gameAreaRef = useRef(null);
  const gameLoopRef = useRef(null);

  // Función para mover la caja
  const handleMouseMove = (e) => {
    if (gameAreaRef.current) {
      const rect = gameAreaRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setBoxPosition(Math.max(0, Math.min(100, percentage)));
    }
  };

  // Función para crear una nueva papa frita
  const createFry = () => {
    const newFry = {
      id: Date.now(),
      x: Math.random() * 100, // posición horizontal aleatoria
      y: 0, // comienza desde arriba
    };
    setFries((prev) => [...prev, newFry]);
  };

  // Función para actualizar la posición de las papas fritas
  const updateFries = () => {
    setFries((prev) =>
      prev
        .map((fry) => ({
          ...fry,
          y: fry.y + 2, // velocidad de caída
        }))
        .filter((fry) => {
          // Verificar si la papa frita fue atrapada
          if (fry.y >= 80 && Math.abs(fry.x - boxPosition) < 15) {
            setScore((s) => s + 1);
            return false;
          }
          // Eliminar papas fritas que cayeron fuera de la pantalla
          return fry.y < 100;
        })
    );
  };

  // Iniciar el juego
  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setTimeLeft(30);
    setFries([]);
    setBoxPosition(50);

    // Crear papas fritas cada 500ms
    const fryInterval = setInterval(createFry, 500);

    // Actualizar el juego cada 16ms (60fps)
    const gameInterval = setInterval(() => {
      updateFries();
    }, 16);

    // Temporizador
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(fryInterval);
          clearInterval(gameInterval);
          clearInterval(timer);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    gameLoopRef.current = { fryInterval, gameInterval, timer };
  };

  // Limpiar intervalos al desmontar
  useEffect(() => {
    return () => {
      if (gameLoopRef.current) {
        Object.values(gameLoopRef.current).forEach(clearInterval);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFE5B4] flex flex-col items-center justify-center p-4">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-[#D6001C] mb-2">
          ¡Atrapa las Papas!
        </h1>
        <p className="text-xl font-bold text-[#FFCC00]">
          Puntos: {score} | Tiempo: {timeLeft}s
        </p>
      </div>

      {gameOver ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#D6001C] mb-4">
            ¡Juego Terminado!
          </h2>
          <p className="text-xl mb-4">Puntuación final: {score}</p>
          <button
            onClick={startGame}
            className="bg-[#FFCC00] text-[#D6001C] font-bold py-2 px-6 rounded-lg hover:bg-[#FFD700] transition-colors"
          >
            Jugar de nuevo
          </button>
        </div>
      ) : (
        <div
          ref={gameAreaRef}
          className="relative w-full max-w-md h-[500px] bg-white rounded-lg overflow-hidden cursor-pointer"
          onMouseMove={handleMouseMove}
          onClick={!gameLoopRef.current ? startGame : undefined}
        >
          {/* Papas fritas cayendo */}
          {fries.map((fry) => (
            <div
              key={fry.id}
              className="absolute w-8 h-8"
              style={{
                left: `${fry.x}%`,
                top: `${fry.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Image
                src="/fries.png"
                alt="Papas fritas"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
          ))}

          {/* Caja de McDonald's */}
          <div
            className="absolute bottom-0 w-32 h-32"
            style={{
              left: `${boxPosition}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <Image
              src="/mcdonalds-box.png"
              alt="Caja de McDonald's"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>

          {!gameLoopRef.current && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <button
                onClick={startGame}
                className="bg-[#FFCC00] text-[#D6001C] font-bold py-3 px-8 rounded-lg hover:bg-[#FFD700] transition-colors"
              >
                ¡Comenzar!
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CatchFriesGame; 