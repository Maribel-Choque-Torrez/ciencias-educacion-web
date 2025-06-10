"use client";

import { useVideos } from "@/hooks/useVideos";
import { sanitizeText, sanitizeHTML, sanitizeURL } from "@/util/sanitize";
// Importaciones para el carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInstitutionData } from "@/hooks/useInstitutionData";
import Image from "next/image";
import LoadingSpinner from "@/components/LoadingSpinner";
import { usePublication } from "@/hooks/usePublications";

// Rutas de imágenes
const imgURL = `${process.env.NEXT_PUBLIC_API_URL}/InstitucionUpea/Portada`;
// const imgAutoridadURL = `/img`;

export default function Page() {
  const { sedes } = usePublication();
  const { institutionData, loading } = useInstitutionData();
  const { actividades, noticia } = useVideos();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {/* <!-- Carousel Start --> */}
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
                        <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                          {sanitizeText(data.portada_subtitulo)}
                        </h5>
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
      {/* <!-- Carousel End --> */}

      <main>
        {/* <!-- Bienvenido Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: "400px" }}
              >
                <div className="position-relative h-100">
                  <Image
                    className="img-fluid position-absolute w-100 h-100"
                    src="/img/about.jpg"
                    alt=""
                    style={{ objectFit: "cover" }}
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  Bienvenido
                </h6>
                <h2 className="h1 mb-4">
                  Bienvenido a la Carrera de Ciencias de la Educación
                </h2>
                <div
                  dangerouslySetInnerHTML={sanitizeHTML(
                    institutionData?.institucion_objetivos,
                  )}
                />

                <div className="row gy-2 gx-4 mb-4">
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Investigador
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Planificador y evaluador
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Orientador
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Asesor
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Proyectista
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Administrador
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- bienvenido End --> */}

        {/* <!-- noticias Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                {/* Solo renderizar el iframe si hay una URL válida */}
                {(() => {
                  const videoURL = sanitizeURL(noticia?.[0]?.video_enlace);
                  return videoURL ? (
                    <div className="ratio ratio-16x9">
                      <iframe src={videoURL} title="YouTube video" />
                    </div>
                  ) : null;
                })()}
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  Noticias
                </h6>
                <h3 className="h1 mb-4">
                  {sanitizeText(noticia?.[0]?.video_titulo)}
                </h3>
                {/* {noticia?.[0]?.video_breve_descripcion && (
                  <div
                    dangerouslySetInnerHTML={sanitizeHTML(
                      noticia?.[0]?.video_breve_descripcion
                    )}
                  />
                )} */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- noticias End --> */}

        {/* <!-- actividades Start --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  Actividades
                </h6>
                <h3 className="h1 mb-4">
                  {sanitizeText(actividades?.[0]?.video_titulo)}
                </h3>
                <div
                  dangerouslySetInnerHTML={sanitizeHTML(
                    actividades?.[0]?.video_breve_descripcion,
                  )}
                />
              </div>
              <div
                className="col-lg-6 py-auto wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="d-flex">
                  <div className="my-auto">
                    <button
                      className="btn btn-oneline px-1"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="prev"
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>
                  </div>
                  <div style={{ width: "100%" }}>
                    <div
                      id="carouselExampleFade"
                      className="carousel slide carousel-fade position-relative"
                      data-bs-interval="false"
                    >
                      <div className="carousel-inner">
                        {actividades?.map((data, _i) => {
                          const videoURL = sanitizeURL(data.video_enlace);
                          return (
                            <div
                              key={`caroucel-actividad-${_i}`}
                              className={`carousel-item ${_i === 0 ? "active" : ""}`}
                            >
                              {videoURL && (
                                <div className="ratio ratio-16x9">
                                  <iframe
                                    src={videoURL}
                                    title="YouTube video"
                                    allowFullScreen
                                  />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="my-auto">
                    <button
                      className="btn btn-oneline px-1"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="next"
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- actividades End --> */}

        {/* <!-- Sedes  --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Sedes
              </h6>
              <h3 className="h1 mb-5">Sedes Académicas</h3>
            </div>

            <div className="row row-cols-3 g-4 justify-content-center">
              {sedes?.map((data, _i) => {
                const imgSrc = sanitizeURL(
                  `${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`,
                );

                return (
                  <div
                    key={`sede-${_i}`}
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="course-item bg-light">
                      <div className="position-relative overflow-hidden">
                        {imgSrc && (
                          <Image
                            className="img-fluid"
                            src={imgSrc}
                            width={500}
                            height={500}
                            alt=""
                          />
                        )}
                        <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"></div>
                      </div>
                      <div className="text-center p-4 pb-0">
                        <h5 className="mb-4">
                          {sanitizeText(data.publicaciones_titulo)}
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <!-- autoridades --> */}
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
