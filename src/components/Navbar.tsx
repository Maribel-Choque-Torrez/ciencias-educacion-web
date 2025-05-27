"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  { id: "inicio", label: "Inicio", path: "/" },
  { id: "acerca", label: "Acerca de", path: "/acerca" },
  { id: "comunicados", label: "Comunicados", path: "/comunicados" },
  { id: "biblioteca", label: "Biblioteca", path: "/biblioteca" },
  { id: "tramites", label: "Tramites", path: "/tramites" },
  {
    id: "cursos",
    label: "Cursos de Actualizacion",
    path: "/cursos-actualizacion",
  },
  {
    id: "psicopedagogica",
    label: "Unidad Psicopedagogica",
    path: "#",
    isDropdown: true,
    subMenu: [
      {
        id: "orientacion",
        label: "Orientacion vocacional",
        path: "/orientacion",
      },
      {
        id: "apoyo",
        label: "Apoyo Educativo",
        path: "/apoyo",
      },
    ],
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link
        href="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <Image
          src="/img/logo1.png"
          alt="Logo"
          width={180}
          height={75}
          style={{ width: "auto", height: "75px" }}
          priority
        />
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0 text-center text-lg-start">
          {menuItems.map((item) =>
            item.isDropdown ? (
              <div className="nav-item dropdown" key={item.id}>
                <a
                  href={item.path}
                  className={`nav-link dropdown-toggle ${pathname === item.path || pathname === "/orientacion" || pathname === "/apoyo" ? "active" : ""}`}
                  data-bs-toggle="dropdown"
                >
                  {item.label}
                </a>
                <div
                  className={`dropdown-menu fade-down m-0 text-center text-lg-start`}
                >
                  {item.subMenu?.map((child) => (
                    <Link
                      key={child.id}
                      href={child.path}
                      className={`dropdown-item ${pathname === child.path ? "active" : ""}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.id}
                href={item.path}
                className={`nav-item nav-link ${pathname === item.path ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};
