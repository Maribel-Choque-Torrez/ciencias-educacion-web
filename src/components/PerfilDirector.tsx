// components/DirectorPerfilModal.tsx
"use client";

interface DirectorPerfilModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DirectorPerfilModal({ isOpen, onClose }: DirectorPerfilModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content" style={{ maxHeight: '90vh' }}>
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title text-white">
              <i className="fas fa-user-tie me-2"></i>
              Perfil del Director de Carrera
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <div className="row">
              <div className="col-md-4 text-center mb-4">
                <div className="position-relative">
                  <img
                    src="img/director.webp"
                    alt="Director de Carrera"
                    className="img-fluid rounded-circle shadow"
                    style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/180x180/007bff/ffffff?text=Director';
                    }}
                  />
                </div>
                <h5 className="mt-3 text-primary">Dr. Deivid Pacosillo Mamani, Ph.D.</h5>
                <p className="text-muted">Director de Carrera</p>
              </div>
              <div className="col-md-8">
                <div className="mb-4">
                  <h6 className="text-primary border-bottom pb-2">
                    <i className="fas fa-graduation-cap me-2"></i>
                    Formación Académica
                  </h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>Doctor en Ciencias de la Educación e Investigación, Ph.D.</strong>
                    </li>
                    <li className="mb-2">
                      <strong>Magíster en Educación Superior</strong>
                    </li>
                    <li className="mb-2">
                      <strong>Licenciado en Ciencias de la Educación</strong>
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h6 className="text-primary border-bottom pb-2">
                    <i className="fas fa-briefcase me-2"></i>
                    Experiencia Profesional
                  </h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <strong>Director de Carrera de Ciencias de la Educación</strong>
                      <br />
                      <small className="text-muted">UPEA - Actualidad</small>
                    </li>
                    <li className="mb-2">
                      <strong>Secretario Ejecutivo</strong>
                      <br />
                      <small className="text-muted">Asociación de Docentes de Educación Parvularia - UPEA (2021-2023)</small>
                    </li>
                    <li className="mb-2">
                      <strong>Docente</strong>
                      <br />
                      <small className="text-muted">Universidad Pública de El Alto - UPEA</small>
                    </li>
                    <li className="mb-2">
                      <strong>Educador y Responsable Pedagógico</strong>
                      <br />
                      <small className="text-muted">Fundación Comunidad Educativa Wiphala (2009-2021)</small>
                    </li>
                    <li className="mb-2">
                      <strong>Coordinador Nacional UNATSBO</strong>
                      <br />
                      <small className="text-muted">Unión de Niños, Niñas y Adolescentes Trabajadores de Bolivia (2007-2008)</small>
                    </li>
                    <li className="mb-2">
                      <strong>Educador y Colaborador</strong>
                      <br />
                      <small className="text-muted">CONNATSDEA y UNATSBO (2009-2014)</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <h6 className="text-primary border-bottom pb-2">
                  <i className="fas fa-users me-2"></i>
                  Liderazgo Social y Movimientos
                </h6>
                <div className="alert alert-info">
                  <p className="mb-2">
                    <strong>Pionero en Derechos de la Niñez Trabajadora:</strong> Fundador de CONNATSDEA (2005) y figura clave en la articulación de movimientos sociales para la defensa de los derechos de la infancia trabajadora en Bolivia.
                  </p>
                  <p className="mb-0">
                    <strong>Incidencia Constitucional:</strong> Como Coordinador Nacional de UNATSBO, lideró la histórica primera marcha nacional que logró la modificación del Artículo 61 de la Constitución Política del Estado Plurinacional de Bolivia durante la Asamblea Constituyente (2007-2008).
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <h6 className="text-primary border-bottom pb-2">
                  <i className="fas fa-star me-2"></i>
                  Áreas de Especialización
                </h6>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li><i className="fas fa-check text-success me-2"></i>Educación Crítica</li>
                      <li><i className="fas fa-check text-success me-2"></i>Derechos Humanos</li>
                      <li><i className="fas fa-check text-success me-2"></i>Investigación Educativa</li>
                      <li><i className="fas fa-check text-success me-2"></i>Pedagogía de la Aventura</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li><i className="fas fa-check text-success me-2"></i>Derechos de la Niñez Trabajadora</li>
                      <li><i className="fas fa-check text-success me-2"></i>Transformación Social</li>
                      <li><i className="fas fa-check text-success me-2"></i>Educación Superior</li>
                      <li><i className="fas fa-check text-success me-2"></i>Incidencia Política</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <h6 className="text-primary border-bottom pb-2">
                  <i className="fas fa-trophy me-2"></i>
                  Proyectos y Logros Destacados
                </h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-medal text-warning me-2"></i>
                    <strong>Fundador de CONNATSDEA:</strong> Organización de Niños, Niñas y Adolescentes Trabajadores de la Ciudad de El Alto (2005)
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-gavel text-info me-2"></i>
                    <strong>Liderazgo Constitucional:</strong> Coordinador Nacional de UNATSBO durante la Asamblea Constituyente, lideró la primera marcha nacional (2007-2008)
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-users text-primary me-2"></i>
                    <strong>Experto en Derechos:</strong> Miembro clave de la Comisión de Expertos que elaboró documentos fundamentales para la protección de derechos de la infancia trabajadora
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-newspaper text-success me-2"></i>
                    <strong>Editor de Revistas:</strong> Revista Científica Estudiantil (2017) y Revista Docente-Parvularia Escribe (2022)
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <h6 className="text-primary border-bottom pb-2">
                  <i className="fas fa-book me-2"></i>
                  Producción Intelectual Destacada
                </h6>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled small">
                      <li className="mb-1">
                        <i className="fas fa-book-open text-primary me-2"></i>
                        <strong>La realidad de los niños, niñas y adolescentes trabajadores en la Ciudad de El Alto</strong> (2013)
                      </li>
                      <li className="mb-1">
                        <i className="fas fa-book-open text-primary me-2"></i>
                        <strong>Pedagogía de la Aventura</strong> (2016)
                      </li>
                      <li className="mb-1">
                        <i className="fas fa-book-open text-primary me-2"></i>
                        <strong>Memoria del 1er Congreso de Humanidades y Ciencias de la Educación</strong> (2017)
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled small">
                      <li className="mb-1">
                        <i className="fas fa-book-open text-primary me-2"></i>
                        <strong>La Incidencia Política de los Niños, Niñas y Adolescentes Trabajadores de la UNATSBO</strong> (2020)
                      </li>
                      <li className="mb-1">
                        <i className="fas fa-book-open text-primary me-2"></i>
                        <strong>Memorias del II Congreso Internacional de Ciencias de la Educación</strong> (2024)
                      </li>
                      <li className="mb-1">
                        <i className="fas fa-file-alt text-success me-2"></i>
                        <strong>Documentos de Expertos:</strong> Propuestas normativas para derechos de la infancia trabajadora
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}