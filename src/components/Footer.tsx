"use client";
import React from "react";
import { useInstitutionData } from "@/hooks/useInstitutionData";
import Link from "next/link";
import {
  sanitizeText,
  sanitizeHTML,
  sanitizeURL,
  useDOMPurify,
} from "@/util/sanitize";

export default function Footer() {
  const { institutionData } = useInstitutionData();
  const { sanitize } = useDOMPurify();

  return (
    <footer
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <img
              src="img/logo1.png"
              style={{ width: "auto", height: "195px" }}
              alt=""
            />
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Enlaces rápidos</h4>
            <Link className="btn btn-link" href="/acerca">
              Acerca De
            </Link>
            <Link className="btn btn-link" href="/comunicados">
              Comunicados
            </Link>
            <Link className="btn btn-link" href="/biblioteca">
              Biblioteca
            </Link>
            <Link className="btn btn-link" href="/tramites">
              Tramites
            </Link>
            <Link className="btn btn-link" href="/cursos-actualizacion">
              Cursos de actualización
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Contactos</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>
              {sanitizeText(institutionData?.institucion_direccion)}
            </p>

            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>
              {sanitizeText(institutionData?.institucion_correo1)}
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-3">Redes Sociales</h4>

            <div className="d-flex pt-2"></div>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social"
                href={sanitizeURL(institutionData?.institucion_youtube)}
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>{" "}
              Facebook
            </div>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social"
                href={sanitizeURL(institutionData?.institucion_youtube)}
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>{" "}
              Youtube
            </div>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social"
                href="http://www.tiktok.com/@upea_somos_educacion"
                target="_blank"
              >
                <i className="fab fa-tiktok"></i>
              </a>{" "}
              Tiktok
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              &copy; UPEA - {new Date().getFullYear()} | U-TIC - Web
              <br />
              Diseñado por Lic. Carmen Mamani
              <br />
              Desarrollado por{" "}
              <a
                href="https://www.linkedin.com/in/maribel-carola-choque-torrez/"
                target="_blank"
                className="text-info"
              >
                M@b
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
