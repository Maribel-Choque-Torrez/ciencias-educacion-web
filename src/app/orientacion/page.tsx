"use client";

import Banner from "@/components/Banner";
import { useVideos } from "@/hooks/useVideos";
import { stripHtml } from "@/util/formatText";
import {
  sanitizeText,
  sanitizeHTML,
  sanitizeURL,
  useDOMPurify,
} from "@/util/sanitize";

export default function Page() {
  const { orientacionVoc } = useVideos();
  const { actividades } = useVideos();
  const { sanitize } = useDOMPurify();

  return (
    <>
      <Banner title="Orientación Vocacional" />
      <main>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Orientación Vocacional
              </h6>
              <h1 className="mb-5">
                Programa de Orientación Pedagógica para la Vocación Productiva
                Tecnológica
              </h1>
            </div>
            {orientacionVoc &&
              orientacionVoc.map((data, index) => (
                <div key={data.video_id} className="container-xxl py-5">
                  <div className="container">
                    <div className="row g-5 align-items-center">
                      {index % 2 === 0 ? (
                        <>
                          {/* Video a la izquierda, texto a la derecha */}
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                          >
                            <div className="ratio ratio-16x9">
                              <iframe
                                src={sanitizeURL(data.video_enlace)}
                                title="YouTube video"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay="0.3s"
                          >
                            <h6 className="section-title bg-white text-start text-primary pe-3">
                              Orientación vocacional
                            </h6>
                            <h1 className="mb-4">
                              {sanitizeText(data.video_titulo)}
                            </h1>
                            <p className="mb-4 text-justify">
                              {stripHtml(
                                sanitizeText(data.video_breve_descripcion),
                              )}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Texto a la izquierda, video a la derecha */}
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay="0.3s"
                          >
                            <h6 className="section-title bg-white text-start text-primary pe-3">
                              Orientación vocacional
                            </h6>
                            <h1 className="mb-4">
                              {sanitizeText(data.video_titulo)}
                            </h1>
                            <p className="mb-4 text-justify">
                              {stripHtml(
                                sanitizeText(data.video_breve_descripcion),
                              )}
                            </p>
                          </div>
                          <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                          >
                            <div className="ratio ratio-16x9">
                              <iframe
                                src={sanitizeURL(data.video_enlace)}
                                title="YouTube video"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Actividades
              </h6>
              <h1 className="mb-5">Todo sobre la Orientación Vocacional </h1>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-4">
              {/* Tarjeta 1 */}
              <div
                className="card mb-4 bg-light shadow-lg rounded"
                style={{ width: "20rem", transition: "transform 0.3s" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div className="position-relative overflow-hidden">
                  <img
                    className="card-img-top"
                    style={{ height: "12rem", objectFit: "cover" }}
                    src="https://serviciopagina.upea.bo/InstitucionUpea/LinksExternos/b3e6a6da-5dc4-4d28-a641-1d836a6b605f.jpg"
                    alt="Formulario de inscripción"
                  />
                  <div className="position-absolute bottom-0 w-100 d-flex justify-content-center mb-4">
                    <a
                      href="https://forms.gle/2iwt3WKxRexhEkk7A"
                      className="btn btn-sm btn-primary px-4 rounded-pill"
                    >
                      Leer más
                    </a>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h5 className="text-center fw-bold">
                    Formulario de Inscripción
                  </h5>
                </div>
              </div>

              {/* Tarjeta 2  */}
              <div
                className="card mb-4 bg-light shadow-lg rounded"
                style={{ width: "20rem", transition: "transform 0.3s" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div className="position-relative overflow-hidden">
                  <img
                    className="card-img-top"
                    style={{ height: "12rem", objectFit: "cover" }}
                    src="https://serviciopagina.upea.bo/InstitucionUpea/LinksExternos/1414adf3-9f29-4a78-8034-1aa0f8bdb525.png"
                    alt="Curso online"
                  />
                  <div className="position-absolute bottom-0 w-100 d-flex justify-content-center mb-4">
                    <a
                      href="https://gisberth3498801.milaulas.com"
                      className="btn btn-sm btn-primary px-4 rounded-pill"
                    >
                      Leer más
                    </a>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h5 className="text-center fw-bold">Curso online</h5>
                </div>
              </div>

              {/* Tarjeta 3 */}
              <div
                className="card mb-4 bg-light shadow-lg rounded"
                style={{ width: "20rem", transition: "transform 0.3s" }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div className="position-relative overflow-hidden">
                  <img
                    className="card-img-top"
                    style={{ height: "12rem", objectFit: "cover" }}
                    src="/img/tallerpre.png"
                    alt="Taller presencial"
                  />
                  {/*<div className="position-absolute bottom-0 w-100 d-flex justify-content-center mb-4">
                                        <a href="#" className="btn btn-sm btn-primary px-4 rounded-pill">
                                            Leer más
                                        </a>
                                    </div>*/}
                </div>
                <div className="card-body p-4">
                  <h5 className="text-center fw-bold">Taller Presencial</h5>
                </div>
              </div>
            </div>

            <div
              className="container pt-5 text-center animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              <h6 className="section-title bg-white text-center text-primary px-3">
                Actividades
              </h6>
              <h1 className="mb-5">Todo sobre la Orientación Vocacional</h1>

              {/* Contenedor de videos */}
              <div className="d-flex flex-wrap justify-content-center gap-4">
                {actividades &&
                  actividades.map((data) => (
                    <div
                      key={data.video_id}
                      className="card mb-4 bg-light shadow-lg rounded"
                      style={{ width: "20rem", transition: "transform 0.3s" }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <div className="position-relative overflow-hidden">
                        <div className="ratio ratio-16x9">
                          <iframe
                            src={sanitizeURL(data.video_enlace)}
                            title={data.video_titulo}
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                      <div className="card-body p-4">
                        <h5 className="text-center fw-bold">
                          {sanitizeText(data.video_titulo)}
                        </h5>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
