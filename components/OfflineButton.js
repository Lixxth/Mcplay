"use client";

import React, { useState, useEffect } from "react";
import { isIOS } from "react-device-detect";
import Link from "next/link";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";

const OfflineButton = ({ className }) => {
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [showIosButton, setShowIosButton] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Detectar si es iOS
    if (isIOS) {
      setShowIosButton(true);
      return;
    }

    // Detectar si ya está instalado
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowInstallButton(false);
      return;
    }

    // Detectar si el navegador soporta PWA
    if ('serviceWorker' in navigator) {
      const ready = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowInstallButton(true);
      };

      window.addEventListener("beforeinstallprompt", ready);
      return () => {
        window.removeEventListener("beforeinstallprompt", ready);
      };
    }
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) {
      toast.error('No se puede instalar la aplicación en este momento');
      return;
    }

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === "accepted") {
        toast.success('¡Aplicación instalada con éxito!');
        setShowInstallButton(false);
      } else {
        toast.error('Instalación cancelada');
      }
    } catch (error) {
      toast.error('Error al instalar la aplicación');
      console.error('Error installing app:', error);
    } finally {
      setDeferredPrompt(null);
    }
  };

  const showIOSInstructions = () => {
    setShowIOSModal(true);
  };

  return (
    <>
      <div className="promotionbanner bg-transparent w-full flex justify-center items-center">
        <Toaster position="bottom-center" />

        {showInstallButton && (
          <button
            className={className || "px-4 py-2 mb-7 bg-gradient-to-r from-[#D6001C] to-[#FFCC00] text-white rounded-lg font-bold hover:opacity-90 transition-opacity"}
            onClick={installApp}
          >
            Instalar App
          </button>
        )}

        {showIosButton && (
          <button
            onClick={showIOSInstructions}
            className={className || "px-4 py-2 mb-7 bg-gradient-to-r from-[#D6001C] to-[#FFCC00] text-white rounded-lg font-bold hover:opacity-90 transition-opacity"}
          >
            Instalar en iOS
          </button>
        )}
      </div>

      {/* Modal de instrucciones para iOS */}
      {showIOSModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-[#D6001C] mb-4">Instalar en iPhone</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FFCC00] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <p className="text-gray-700">Abre Safari (no Chrome ni otros navegadores)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FFCC00] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <p className="text-gray-700">Toca el ícono de compartir <span className="text-[#D6001C]">⎋</span> en la parte inferior</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FFCC00] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <p className="text-gray-700">Desplázate hacia abajo y selecciona "Añadir a pantalla de inicio"</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#FFCC00] rounded-full flex items-center justify-center text-white font-bold">4</div>
                <p className="text-gray-700">Toca "Añadir" en la esquina superior derecha</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowIOSModal(false)}
                className="bg-[#D6001C] text-white px-4 py-2 rounded-lg hover:bg-[#B30000] transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfflineButton;