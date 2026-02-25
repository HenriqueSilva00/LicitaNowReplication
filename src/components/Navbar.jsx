import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";
import "./style/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // ✅ FALTAVA ISTO
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("mobile-open");
    } else {
      document.body.classList.remove("mobile-open");
    }
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    if (mobileOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        {/* MENU DESKTOP */}
        <ul className="nav-links">
          {/* SOBRE (dropdown) */}
          <li className="dropdown">
            <div className="dropdown-trigger">
              Sobre <ChevronDown size={16} />
            </div>
            <ul className="dropdown-menu">
              <li>Sobre nós</li>
              <li>Créditos</li>
              <li>Preços</li>
              <li>Eventos</li>
            </ul>
          </li>

          {/* COMO FUNCIONA */}
          <li>Como Funciona</li>

          {/* SOLUÇÕES (dropdown) */}
          <li className="dropdown">
            <div className="dropdown-trigger">
              Soluções <ChevronDown size={16} />
            </div>
            <ul className="dropdown-menu">
              <li>Concursos</li>
              <li>Serviços</li>
              <li>Arquivo</li>
              <li>Intervenções</li>
              <li>Colaboração</li>
            </ul>
          </li>

          {/* SUPORTE */}
          <li>Suporte</li>

          {/* ENTRAR */}
          <li>
            <button className="login-btn">Entrar</button>
          </li>
        </ul>

        {/* BOTÃO HAMBURGUER (mobile) */}
        <button
          className="hamburger-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MENU MOBILE (só faz sentido abrir no mobile, mas pode ficar aqui no DOM) */}
      <div
        className={`mobile-menu-overlay ${mobileOpen ? "is-open" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      <div className={`mobile-menu-center ${mobileOpen ? "is-open" : ""}`}>
        <ul className="mobile-links-center">
          {/* SOBRE */}
          <li
            className="mobile-dropdown-trigger"
            onClick={() => toggleDropdown("sobre")}
          >
            <span>Sobre</span>
            <ChevronDown
              size={18}
              className={`mobile-chevron ${
                openDropdown === "sobre" ? "open" : ""
              }`}
            />
          </li>

          <div
            className={`mobile-submenu ${
              openDropdown === "sobre" ? "open" : ""
            }`}
          >
            <li>Sobre nós</li>
            <li>Créditos</li>
            <li>Preços</li>
            <li>Eventos</li>
          </div>

          <li>Como Funciona</li>

          <li
            className="mobile-dropdown-trigger"
            onClick={() => toggleDropdown("solucoes")}
          >
            <span>Soluções</span>
            <ChevronDown
              size={18}
              className={`mobile-chevron ${
                openDropdown === "solucoes" ? "open" : ""
              }`}
            />
          </li>

          <div
            className={`mobile-submenu ${
              openDropdown === "solucoes" ? "open" : ""
            }`}
          >
            <li>Concursos</li>
            <li>Serviços</li>
            <li>Arquivo</li>
            <li>Intervenções</li>
            <li>Colaboração</li>
          </div>

          <li>Suporte</li>
        </ul>

        <button
          className="login-btn mobile-login-center"
          onClick={() => setMobileOpen(false)}
        >
          Entrar
        </button>
      </div>
    </>
  );
}

export default Navbar;
