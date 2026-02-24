import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaChevronRight } from "react-icons/fa";
import "./style/Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        {/* SOBRE */}
        <li className="dropdown">
          <span className="dropdown-trigger">
            Sobre <FaChevronRight className="dropdown-icon" />
          </span>
          <ul className="dropdown-menu">
            <li>Sobre nós</li>
            <li>Créditos</li>
            <li>Preços</li>
            <li>Eventos</li>
          </ul>
        </li>

        <li>Como funciona</li>

        {/* SOLUÇÕES */}
        <li className="dropdown">
          <span className="dropdown-trigger">
            Soluções <FaChevronRight className="dropdown-icon" />
          </span>
          <ul className="dropdown-menu">
            <li>Concursos</li>
            <li>Serviços</li>
            <li>Arquivo</li>
            <li>Intervenções</li>
            <li>Colaboração</li>
          </ul>
        </li>

        <li>Suporte</li>

        <li>
          <button className="login-btn">Entrar</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
