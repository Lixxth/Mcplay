
import OfflineButton from "@/components/OfflineButton";
export default function Descarga() {
  //logica js aqui
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen md:w-full md:h-screen bg-gradient-to-r from-[#5a5aff] to-[#5acbff] text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 m-6">Descarga Nuestra App</h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8  m-6">
          Descubre una nueva forma de Aprender lenguaje de señas
        </p>
        <OfflineButton />
      </div> 
    </>
  );
}