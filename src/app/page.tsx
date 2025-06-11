"use client";

import { useState } from 'react';
import { useVideos } from "@/hooks/useVideos";
import { sanitizeText, sanitizeHTML, sanitizeURL } from "@/util/sanitize";
import DirectorPerfilModal from "@/components/PerfilDirector";
// Importaciones para el carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInstitutionData } from "@/hooks/useInstitutionData";
import Image from "next/image";
import LoadingSpinner from "@/components/LoadingSpinner";
import { stripHtml } from "@/util/formatText";

// Rutas de imágenes
const imgURL = `${process.env.NEXT_PUBLIC_API_URL}/InstitucionUpea/Portada`;
// const imgAutoridadURL = `/img`;


export default function Page() {
  const { institutionData, loading } = useInstitutionData();
  const [isDirectorModalOpen, setIsDirectorModalOpen] = useState(false);
  const { actividades, noticia } = useVideos();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {/* <!-- Portada --> */}
      <section className="container-fluid p-0 mb-5" data-bs-ride="true">
        <div
          id="headerCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
          data-bs-wrap="true"
        >
          <div className="carousel-inner">
            {institutionData?.portada.map((data, index) => (
              <div
                key={`portada-${index}`}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <Image
                  className="img-fluid w-100"
                  src={sanitizeURL(`${imgURL}/${data.portada_imagen}`)}
                  alt=""
                  width={1000}
                  height={500}
                  priority
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                  style={{ background: "rgba(24, 29, 56, .1)" }}
                >
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-sm-10 col-lg-6">
                        <h1
                          className="display-3 text-white animated slideInDown"
                          style={{ fontSize: "42px" }}
                        >
                          {sanitizeText(data.portada_titulo)}
                        </h1>
                        <p className="fs-5 text-white mb-4 pb-2">
                          {" "}
                          Carrera acreditada...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#headerCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#headerCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </section>
      {/* <!-- Portada --> */}

      <main>
        {/* <!-- Bienvenida--> */}
<div className="container-xxl py-5">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h6 className="section-title bg-white text-center text-primary px-3">
                    Bienvenido
                  </h6>
                  <h3 className="h1 mb-5">¡Bienvenidos a la brillante carrera de Ciencias de la Educación de la Universidad Pública de El Alto!</h3>
                </div>
<div className="text-center ">
<h5 className="text-primary">
En nuestra carrera fomentamos el desarrollo del pensamiento crítico, la innovación pedagógica y el compromiso de desarrollar profesionales de alto nivel. 
Formamos profesionales con alto conocimiento, habilidades y destrezas, capaces de incursionar en el ámbito educativo y promover la construcción de una
 educación de calidad, en el marco de la ética, responsabilidad y vocación de servicio. 
Explora nuestra página para conocer nuestra oferta académica, nuestras actividades académicas y nuestros proyectos de investigación.
 ¡Descubre todo lo que la carrera Ciencias de la Educación tiene para ofrecerles!

</h5>
</div >
    {/* Misión, Visión y Objetivos*/}
    <div className="row g-4 py-5">
      <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.1s">
        <div className="h-100">
          <h3 className="mb-4">Misión</h3>
          <p className="mb-4 text-justify">
            {stripHtml(sanitizeText(institutionData?.institucion_mision))}
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay="0.3s">
        <div className="h-100">
          <h3 className="mb-4">Visión</h3>
          <p className="mb-4 text-justify">
            {stripHtml(sanitizeText(institutionData?.institucion_vision))}
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 col-12 wow fadeInUp" data-wow-delay="0.5s">
        <div className="h-100">
          <h3 className="mb-4">Objetivo</h3>
          <div
            className="text-justify"
            dangerouslySetInnerHTML={sanitizeHTML(
              institutionData?.institucion_objetivos,
            )}
          />
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- bienvenida --> */}

      {/* <!-- autoridades --> */}
        <div className="container-xxl py-3">
          <div className="container">
             <div className="container-xxl py-5">
              <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h6 className="section-title bg-white text-center text-primary px-3">
                    Autoridades
                  </h6>
                  <h3 className="h1 mb-5">Nuestras Autoridades</h3>
                </div>
                <div className="row g-4">
                  {institutionData?.autoridad.map((data, _i) => {
                    const imgSrc = `${process.env.NEXT_PUBLIC_API_URL}/InstitucionUpea/Autoridad/${data.foto_autoridad}`;

                    return (
                      <div
                        key={`autoridad-${_i}`}
                        className="col-lg-4 col-md-6 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="team-item bg-light">
                          <div className="overflow-hidden">
                            {imgSrc && (
                              <Image
                                className="img-fluid"
                                style={{ height: "100%" }}
                                src={imgSrc}
                                alt=""
                                width={500}
                                height={500}
                              />
                            )}
                          </div>

                          <div className="text-center p-4">
                            <h5 className="mb-0">
                              {sanitizeText(data.nombre_autoridad)}
                            </h5>
                            <small>{sanitizeText(data.cargo_autoridad)}</small>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
<div className="text-center mt-5 wow fadeInUp" data-wow-delay="0.3s">
  <button 
    onClick={() => setIsDirectorModalOpen(true)}
    className="btn btn-warning btn-lg px-5 py-3 rounded-pill shadow-sm"
    style={{ backgroundColor: '#ffc107', borderColor: '#ffc107', color: '#212529' }}
  >
    <i className="fas fa-user me-2"></i>
    Perfil del Director de Carrera
  </button>
</div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- autoridades --> */}
      </main>
      {/* Modal del Director */}
<DirectorPerfilModal 
  isOpen={isDirectorModalOpen}
  onClose={() => setIsDirectorModalOpen(false)}
/>
    </>
    
  );
}
