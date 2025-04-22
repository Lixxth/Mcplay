"use client";

import React, { useState, useEffect } from "react";
import { isIOS } from "react-device-detect";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const OfflineButton = ({ className }) => {
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [showIosButton, setShowIosButton] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    if (isIOS) {
      setShowIosButton(true);
    }
  }, []);

  useEffect(() => {
    const ready = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", ready);
    return () => {
      window.removeEventListener("beforeinstallprompt", ready);
    };
  }, []);

  const installApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  // Mostrar un botón por defecto si aún no se ha determinado si se puede instalar
  if (!showInstallButton && !showIosButton) {
    return (
      <div className="promotionbanner bg-transparent w-full flex justify-center items-center">
        <button className={className || "px-4 py-2 mb-7 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-sm"}>
          Descargar App
        </button>
      </div>
    );
  }

  return (
    <div className="promotionbanner bg-transparent w-full flex justify-center items-center">
      <Toaster />

      {showInstallButton && (
        <button
          className={className || "px-4 py-2 mb-7 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-sm"}
          onClick={() => installApp()}
        >
          Instala y vive la nueva experiencia Mcplay
        </button>
      )}

      {showIosButton && (
        <Link
          href="/ios"
          className={className || "bg-black text-white font-bold rounded-full w-44 h-12 flex justify-center items-center mt-6"}
        >
          Instalar para uso offline iOS
        </Link>
      )}
    </div>
  );
};

export default OfflineButton;