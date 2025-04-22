import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import OfflineButton from "@/components/OfflineButton";

export default function Page() {
  return (
    <>
      {/* Header con arco dorado */}
      <header className="bg-red-600 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-yellow-400 rounded-full transform -rotate-12"></div>
            <div className="w-16 h-16 bg-yellow-400 rounded-full transform rotate-12"></div>
          </div>
          
        </div>
      </header>

      <main className="min-h-screen bg-white">
        {/* Sección principal */}
        <section className="relative py-12">
          {/* Patrón de fondo */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-6xl text-red-600"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              >
                M
              </div>
            ))}
          </div>

          {/* Contenido principal */}
          <div className="relative max-w-4xl mx-auto px-4">
            {/* Título con efecto de hamburguesa */}
            <div className="flex flex-col items-center mb-12">
              <div className="w-32 h-8 bg-yellow-400 rounded-t-full"></div>
              <div className="w-36 h-2 bg-red-600"></div>
              <div className="w-36 h-2 bg-yellow-400"></div>
              <div className="w-36 h-2 bg-red-600"></div>
              <div className="w-32 h-8 bg-yellow-400 rounded-b-full"></div>
            </div>

            {/* Mensaje principal */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-black text-red-600 mb-4">
                McPlay & Talk
              </h1>
              <div className="bg-yellow-400 transform -rotate-2 p-4 rounded-lg shadow-xl max-w-lg mx-auto">
                <h2 className="text-2xl font-bold text-red-600 rotate-2">
                  🍔 Cocinando Algo Especial 🍟
                </h2>
              </div>
            </div>

            {/* Sección de construcción */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  👷‍♂️ En Construcción
                </h3>
                <p className="text-red-700">
                  Estamos preparando los ingredientes perfectos para tu diversión
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-yellow-600 mb-2">
                  ⏰ Muy Pronto
                </h3>
                <p className="text-yellow-700">
                  La diversión está casi lista para servir
                </p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col items-center gap-4">
              <button className="bg-red-600 text-white hover:bg-red-700 shadow-lg py-3 px-8 rounded-full text-lg font-bold transform transition-all duration-300 hover:scale-105 hover:rotate-1">
              <ButtonSignin text="Login" />
              </button>
              
              <OfflineButton className="bg-yellow-400 text-red-600 hover:bg-yellow-300 shadow-lg py-3 px-8 rounded-full text-lg font-bold transform transition-all duration-300 hover:scale-105 hover:-rotate-1" />
            </div>

            {/* Decoración inferior */}
            <div className="flex justify-center gap-6 mt-12">
              <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-red-600 text-white py-4 mt-12">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm">© 2024 McPlay & Talk - Diversión en construcción</p>
          </div>
        </footer>
      </main>
    </>
  );
}
