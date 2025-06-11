"use client";
import Banner from "@/components/Banner";
import { cursosActualizacion } from "@/mocks/videosAll/cursosActualizacion";
import {
  sanitizeText,
  sanitizeHTML,
  sanitizeURL,
  useDOMPurify,
} from "@/util/sanitize";

export default function Page() {
  const { sanitize } = useDOMPurify();

  return (
    <>
      <Banner title="Noticias y Eventos" />
      <main className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Cursos de Actualización
            </h6>
            <h1 className="mb-5">
              Lenguaje de Señas - Carrera de Ciencias de la Educación{" "}
            </h1>
          </div>
          {cursosActualizacion?.map((data, _i) => (
            <div key={`card-${_i}`} className="container-xxl py-5">
              <div className="container">
                <div className="row g-5">
                  <div
                    className={`col-lg-6 wow fadeInUp ${_i % 2 === 0 ? "order-1" : "order-2"}`}
                    data-wow-delay="0.1s"
                  >
                    <div className="ratio ratio-16x9">
                      <iframe
                        src={sanitizeURL(data.video_enlace)}
                        title="YouTube video"
                      ></iframe>
                    </div>
                  </div>
                  <div
                    className={`col-lg-6 wow fadeInUp ${_i % 2 === 0 ? "order-2" : "order-1"}`}
                    data-wow-delay="0.3s"
                  >
                    <h6 className="section-title bg-white text-start text-primary pe-3">
                      {sanitizeText(data.video_tipo)}
                    </h6>
                    <h1 className="mb-4">{sanitizeText(data.video_titulo)}</h1>
                    <div
                      dangerouslySetInnerHTML={sanitizeHTML(
                        data.video_breve_descripcion,
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
