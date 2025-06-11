"use client";
import { useState, useEffect } from "react";

// Funciones básicas de sanitización sin dependencias
export const sanitizeText = (text) => {
  if (!text) return "";
  try {
    return String(text);
  } catch (error) {
    console.error("Error sanitizing text:", error);
    return "";
  }
};

export const sanitizeHTML = (html) => {
  if (!html) return { __html: "" };
  try {
    return { __html: String(html) };
  } catch (error) {
    console.error("Error sanitizing HTML:", error);
    return { __html: "" };
  }
};

export const sanitizeURL = (url) => {
  if (!url) return null;
  try {
    const stringUrl = String(url);
    return stringUrl && stringUrl.trim() !== "" ? stringUrl : null;
  } catch (error) {
    console.error("Error sanitizing URL:", error);
    return null;
  }
};

// Hook personalizado para DOMPurify
export function useDOMPurify() {
  const [domPurify, setDOMPurify] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoading(true);
      import("dompurify")
        .then((module) => {
          setDOMPurify(module.default);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error loading DOMPurify:", err);
          setIsLoading(false);
        });
    }
  }, []);

  // Versiones mejoradas de las funciones que usan DOMPurify cuando está disponible
  const sanitize = (content, type = "text") => {
    if (domPurify) {
      try {
        const sanitized = domPurify.sanitize(content);
        if (type === "html") return { __html: sanitized };
        return sanitized;
      } catch (error) {
        console.error("Error with DOMPurify:", error);
      }
    }

    // Fallback a las funciones básicas
    if (type === "html") return sanitizeHTML(content);
    if (type === "url") return sanitizeURL(content);
    return sanitizeText(content);
  };

  return {
    isLoading,
    sanitize,
    // También exportamos las funciones básicas por si las necesitas directamente
    sanitizeText,
    sanitizeHTML,
    sanitizeURL,
  };
}
