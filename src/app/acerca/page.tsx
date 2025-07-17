"use client";
import Banner from "@/components/Banner";
import { useInstitutionData } from "@/hooks/useInstitutionData";
import { usePublication } from "@/hooks/usePublications";
import { stripHtml } from "@/util/formatText";
import {
  sanitizeText,
  sanitizeHTML,
  sanitizeURL,
  useDOMPurify,
} from "@/util/sanitize";
import Image from "next/image";

export default function Page() {
  const { sedes } = usePublication();
  const { preEspecialidad } = usePublication();
  const { institutionData } = useInstitutionData();
  const { sanitize } = useDOMPurify();

  return (
    <>
      <Banner title="Plan de Estudios" />
      <main>
       
{/* <!-- plan de Estudio  --> */}
<div className="container-xxl py-5">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Nuestro
      </h6>
      <h1 className="mb-5">Plan de Estudio</h1>
    </div>

    <div className="row justify-content-center">
      <div className="col-lg-10 col-12 wow fadeInUp" data-wow-delay="0.1s">
        <div className="text-center mb-4">
          <a 
            href={`${process.env.NEXT_PUBLIC_API_URL}/InstitucionUpea/${institutionData?.institucion_organigrama}`}
            download
            className="btn btn-warning btn-lg me-3"
          >
            <i className="fas fa-download me-2"></i>
            Descargar PDF
          </a>
          <button 
            className="btn btn-primary btn-lg"
            onClick={() => window.open(`${process.env.NEXT_PUBLIC_API_URL}/InstitucionUpea/${institutionData?.institucion_organigrama}`, '_blank')}
          >
            <i className="fas fa-external-link-alt me-2"></i>
            Abrir en nueva pestaña
          </button>
        </div>
        {institutionData?.institucion_organigrama && (
          <div className="mt-3 text-center">
            <small className="text-muted">
              Vista previa del documento. Para ver el contenido completo, descarga o abre el archivo.
            </small>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
{/* <!-- Plan de estudio  --> */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Nuestras
              </h6>
              <h1 className="mb-5">Pre-especialidades</h1>
            </div>

            <div className="row g-4 justify-content-center">
              {preEspecialidad &&
                preEspecialidad.map((data) => (
                  <div
                    key={data.publicaciones_id}
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="course-item bg-light">
                      <div className="position-relative overflow-hidden">
                        <img
                          className="img-fluid"
                          src={sanitizeURL(
                            `${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`,
                          )}
                          alt=""
                        />
                      </div>
                      <div className="text-center p-4 pb-0">
                        <h5 className="mb-4">
                          {stripHtml(
                            sanitizeText(data.publicaciones_descripcion),
                          )}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
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
                          <img
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
          </div>
        </div>
        {/* <!-- Sedes  --> */}
      </main>
    </>
  );
}
