"use client";
import Banner from "@/components/Banner";
import { useGazette } from "@/hooks/useGazette";
import {
  sanitizeText,
  sanitizeHTML,
  sanitizeURL,
  useDOMPurify,
} from "@/util/sanitize";
import Image from "next/image";

export default function Page() {
  const { modelo_biblio } = useGazette();
  const { modelo_kardex } = useGazette();
  const { modelo_tus } = useGazette();
  const { sanitize } = useDOMPurify();

  return (
    <>
      <Banner title="Tramites" />

      <main className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Tramites
            </h6>
            <h1 className="mb-5">Tramites en la Carrera de Educación</h1>
          </div>

          {/* <!-- cartas para Biblioteca Start --> */}
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
                      width={1000}
                      height={100}
                      src="/img/BIBLIOEST.JPG"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                  <h6 className="section-title bg-white text-start text-primary pe-3">
                    Modelo de Cartas para Biblioteca
                  </h6>
                  {modelo_biblio?.map((data, _i) => (
                    <a
                      key={`mod-biblio-${_i}`}
                      href={sanitizeURL(
                        `${process.env.NEXT_PUBLIC_API_URL}/Gaceta/${data.gaceta_documento}`,
                      )}
                      className="nav-item nav-link"
                    >
                      {sanitizeText(data.gaceta_titulo)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- cartas para Biblioteca End --> */}

          {/* <!-- cartas para Kardex --> */}
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
                      width={1000}
                      height={100}
                      src="/img/kardex.JPG"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                  <h6 className="section-title bg-white text-start text-primary pe-3">
                    Modelo de Cartas para Kardex
                  </h6>
                  {modelo_kardex?.map((data, _i) => (
                    <a
                      key={`mod-kardex-${_i}`}
                      href={sanitizeURL(
                        `${process.env.NEXT_PUBLIC_API_URL}/Gaceta/${data.gaceta_documento}`,
                      )}
                      className="nav-item nav-link"
                    >
                      {sanitizeText(data.gaceta_titulo)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- cartas para Kardex End --> */}

          {/* <!-- cartas para el TUS  Start --> */}
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
                      width={1000}
                      height={100}
                      src="/img/tus.JPG"
                      alt=""
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                  <h6 className="section-title bg-white text-start text-primary pe-3">
                    Modelos de Cartas para el TUS
                  </h6>
                  {modelo_tus?.map((data, _i) => (
                    <a
                      key={`mod-tus-${_i}`}
                      href={sanitizeURL(
                        `${process.env.NEXT_PUBLIC_API_URL}/Gaceta/${data.gaceta_documento}`,
                      )}
                      className="nav-item nav-link"
                    >
                      {sanitizeText(data.gaceta_titulo)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- cartas para el TUS  End --> */}
        </div>
      </main>
    </>
  );
}
