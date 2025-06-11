import { Video } from "@/types/videos";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const useVideos = () => {
  const [videos, setVideos] = useState<Video[] | null>(null);
  const [noticia, setNoticia] = useState<Video[]>();
  const [objetivoApoyoEducativo, setObjetivo] = useState<Video[]>();
  const [apoyoPedagogico, setApoyoPedagogico] = useState<Video[]>();
  const [orientacionVoc, setOrientacionVoc] = useState<Video[]>();
  const [testimonio, setTestimonio] = useState<Video[]>();
  const [actividades, setActividades] = useState<Video[]>();
  const [cursosActualizacion, setCursosActualizacion] = useState<Video[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        setLoading(true);
        const result = await institutionApi.getVideos();
        setVideos(result);
        setNoticia(
          result.filter(
            (data) => data.video_tipo && data.video_tipo === "NOTICIA",
          ),
        );
        setObjetivo(
          result.filter(
            (data) =>
              data.video_tipo &&
              data.video_tipo === "OBJETIVO DEL APOYO EDUCATIVO",
          ),
        );
        setApoyoPedagogico(
          result.filter(
            (data) => data.video_tipo && data.video_tipo === "APOYO PEDAGOGICO",
          ),
        );
        setOrientacionVoc(
          result.filter(
            (data) =>
              data.video_tipo && data.video_tipo === "ORIENTACION VOCACIONAL",
          ),
        );
        setTestimonio(
          result.filter(
            (data) => data.video_tipo && data.video_tipo === "TESTIMONIO",
          ),
        );
        setActividades(
          result.filter(
            (data) => data.video_tipo && data.video_tipo === "ACTIVIDADES",
          ),
        );
        setCursosActualizacion(
          result.filter(
            (data) =>
              data.video_tipo && data.video_tipo === "LENGUAJE DE SEÑAS",
          ),
        );
      } catch (error) {
        setError("Error al cargar los videos");
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitution();
  }, []);

  return {
    videos,
    noticia,
    objetivoApoyoEducativo,
    apoyoPedagogico,
    orientacionVoc,
    testimonio,
    actividades,
    cursosActualizacion,
    loading,
    error,
  };
};
