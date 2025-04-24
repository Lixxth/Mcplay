'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const McQuiz = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questions, setQuestions] = useState([]);

  const allQuestions = [
    {
      question: "¿En qué año se fundó McDonald's?",
      options: ["1940", "1955", "1960", "1970"],
      correctAnswer: "1955"
    },
    {
      question: "¿Cuál es el nombre del payaso mascota de McDonald's?",
      options: ["Ronald McDonald", "Happy Clown", "McDonald Clown", "Burger Clown"],
      correctAnswer: "Ronald McDonald"
    },
    {
      question: "¿Cuál es el producto más vendido de McDonald's?",
      options: ["Big Mac", "McNuggets", "Papas Fritas", "Hamburguesa Clásica"],
      correctAnswer: "Papas Fritas"
    },
    {
      question: "¿En qué país se fundó McDonald's?",
      options: ["Estados Unidos", "Canadá", "México", "Inglaterra"],
      correctAnswer: "Estados Unidos"
    },
    {
      question: "¿Cuál es el lema de McDonald's?",
      options: ["I'm Lovin' It", "Have It Your Way", "Finger Lickin' Good", "Eat Fresh"],
      correctAnswer: "I'm Lovin' It"
    },
    {
      question: "¿Qué color es el logo de McDonald's?",
      options: ["Rojo y Amarillo", "Rojo y Blanco", "Amarillo y Negro", "Rojo y Negro"],
      correctAnswer: "Rojo y Amarillo"
    },
    {
      question: "¿Cuál es el nombre del fundador de McDonald's?",
      options: ["Ray Kroc", "Richard McDonald", "Maurice McDonald", "James McDonald"],
      correctAnswer: "Ray Kroc"
    },
    {
      question: "¿En qué año se introdujo el Big Mac?",
      options: ["1967", "1970", "1965", "1975"],
      correctAnswer: "1967"
    },
    {
      question: "¿Cuál es el nombre del desayuno más popular de McDonald's?",
      options: ["McMuffin", "McGriddle", "McBreakfast", "McMorning"],
      correctAnswer: "McMuffin"
    },
    {
      question: "¿Qué significa la 'M' en el logo de McDonald's?",
      options: ["McDonald's", "McDonald", "Mc", "Mcd"],
      correctAnswer: "McDonald's"
    }
  ];

  useEffect(() => {
    // Seleccionar 10 preguntas aleatorias
    const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffledQuestions);
  }, []);

  useEffect(() => {
    if (!showScore && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleNextQuestion();
            return 30;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, showScore]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimeLeft(30);
    setSelectedAnswer(null);
    const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffledQuestions);
  };

  const handleReturnToMenu = () => {
    router.push('/home');
  };

  if (questions.length === 0) {
    return <div className="min-h-screen bg-[#FFE5B4] flex items-center justify-center">Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-[#FFE5B4] flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#D6001C] mb-4">¡Quiz Completado!</h2>
            <p className="text-2xl mb-6">
              Tu puntuación: {score} de {questions.length}
            </p>
            <button
              onClick={handleReturnToMenu}
              className="bg-[#D6001C] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#B30000] transition-colors"
            >
              Regresar al menú
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#D6001C]">
                Pregunta {currentQuestion + 1} de {questions.length}
              </h2>
              <div className="text-xl font-bold text-[#FFCC00]">
                Tiempo: {timeLeft}s
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">{questions[currentQuestion].question}</h3>
              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(option)}
                    className={`p-4 rounded-lg text-left transition-colors ${
                      selectedAnswer === option
                        ? option === questions[currentQuestion].correctAnswer
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            {selectedAnswer && (
              <div className="text-center">
                <button
                  onClick={handleNextQuestion}
                  className="bg-[#FFCC00] text-[#D6001C] font-bold py-2 px-6 rounded-lg hover:bg-[#FFD700] transition-colors"
                >
                  {currentQuestion + 1 === questions.length ? 'Finalizar' : 'Siguiente'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default McQuiz; 