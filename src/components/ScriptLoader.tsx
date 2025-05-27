"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function ScriptLoader() {
  const [jQueryLoaded, setJQueryLoaded] = useState(false);
  const [dependenciesLoaded, setDependenciesLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && dependenciesLoaded) {
      // Inicializar WOW.js solo después de que todas las dependencias estén cargadas
      const initWow = setTimeout(() => {
        try {
          const WOW = require("wow.js");
          new WOW().init();
          console.log("WOW.js initialized successfully");
        } catch (error) {
          console.error("Error initializing WOW.js:", error);
        }
      }, 1000); // Un poco más de tiempo para estar seguros

      return () => clearTimeout(initWow);
    }
  }, [dependenciesLoaded]);

  return (
    <>
      {/* jQuery primero, con un callback para confirmar carga */}
      <Script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossOrigin="anonymous"
        strategy="beforeInteractive"
        onLoad={() => {
          console.log("jQuery loaded successfully");
          setJQueryLoaded(true);
        }}
        onError={(e) => {
          console.error("Error loading jQuery:", e);
        }}
      />

      {/* Bootstrap después de jQuery */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
        onLoad={() => console.log("Bootstrap loaded")}
      />

      {/* Librerías dependientes de jQuery */}
      {jQueryLoaded && (
        <>
          <Script
            src="/lib/wow/wow.min.js"
            strategy="afterInteractive"
            onLoad={() => console.log("WOW.js loaded")}
          />
          <Script
            src="/lib/easing/easing.min.js"
            strategy="afterInteractive"
            onLoad={() => console.log("Easing loaded")}
          />
          <Script
            src="/lib/waypoints/waypoints.min.js"
            strategy="afterInteractive"
            onLoad={() => console.log("Waypoints loaded")}
          />
          <Script
            src="/lib/owlcarousel/owl.carousel.min.js"
            strategy="afterInteractive"
            onLoad={() => console.log("Owl Carousel loaded")}
          />

          {/* Script principal - cargar al final cuando sabemos que jQuery está disponible */}
          <Script
            src="/js/main.js"
            strategy="lazyOnload"
            onLoad={() => {
              console.log("Main script loaded");
              setDependenciesLoaded(true);
            }}
          />
        </>
      )}
    </>
  );
}
