import { Publication } from "@/types/publication";
import { institutionApi } from "@/util/api";
import { useState, useEffect } from "react";

export const usePublication = () => {
  const [publication, setPublication] = useState<Publication[]>();
  const [convenios, setConvenios] = useState<Publication[]>();
  const [biblioteca, setBiblioteca] = useState<Publication[]>();
  const [sedes, setSedes] = useState<Publication[]>();
  const [preEspecialidad, setPreEspecialidad] = useState<Publication[]>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        setLoading(true);
        const result = await institutionApi.getPublication();
        setPublication(result);
        setConvenios(
          result.filter(
            (data) =>
              data.publicaciones_tipo && data.publicaciones_tipo === "CONVENIO",
          ),
        );
        setBiblioteca(
          result.filter(
            (data) =>
              data.publicaciones_tipo &&
              data.publicaciones_tipo === "BIBLIOTECA",
          ),
        );
        setSedes(
          result.filter(
            (data) =>
              data.publicaciones_tipo && data.publicaciones_tipo === "SEDES",
          ),
        );
        setPreEspecialidad(
          result.filter(
            (data) =>
              data.publicaciones_tipo &&
              data.publicaciones_tipo === "PRE_ESPECIALIDAD",
          ),
        );
      } catch (error) {
        setError("Error al cargar las publicaciones");
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitution();
  }, []);

  return {
    publication,
    convenios,
    biblioteca,
    sedes,
    preEspecialidad,
    error,
    loading,
  };
};
