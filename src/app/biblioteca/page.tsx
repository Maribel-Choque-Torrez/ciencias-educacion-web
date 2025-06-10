"use client";
import React from "react";
import { usePublication } from "@/hooks/usePublications";
import {
  sanitizeText,
  sanitizeHTML,
  sanitizeURL,
  useDOMPurify,
} from "@/util/sanitize";
import Banner from "@/components/Banner";

export default function Page() {
  const { biblioteca } = usePublication();
  const { sanitize } = useDOMPurify();
  return (
    <>
      <Banner title="Biblioteca" />
      <main>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Biblioteca
              </h6>
              <h1 className="mb-5">Visita nuestra Biblioteca</h1>
            </div>
            <div className="row justify-content-center">
              {biblioteca &&
                biblioteca.map((data) => (
                  <div
                    key={data.publicaciones_id}
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="course-item bg-light">
                      <div className="position-relative overflow-hidden d-flex justify-content-center">
                        <a
                          href={sanitizeURL(
                            `${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`,
                          )}
                        >
                          <img
                            className="img-fluid"
                            src={sanitizeURL(
                              `${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`,
                            )}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="text-center p-4 pb-0">
                        <h5 className="mb-4">
                          {sanitizeText(data.publicaciones_titulo)}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="container-xxl py-5 d-flex justify-content-center">
          <div className="container text-center">
            <h3>Servicio de Biblioteca</h3>
            <p>Para acceder haga click en el siguiente enlace</p>
            <a
              href="https://repositorio.upea.bo/jspui/handle/123456789/556"
              target="_blank"
              className="btn btn-sm btn-primary px-3 border-end"
              style={{ borderRadius: "30px 0 0 30px" }}
            >
              Servicio de Biblioteca
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
