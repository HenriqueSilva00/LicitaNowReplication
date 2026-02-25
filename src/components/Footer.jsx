import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaInfoCircle,
  FaRegCreditCard,
  FaTag,
  FaCalendarAlt,
  FaGavel,
  FaTools,
  FaFolderOpen,
  FaHardHat,
  FaHandshake,
  FaEnvelope,
  FaFileInvoiceDollar,
  FaArrowRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import visaImg from "../assets/visa.png";
import mastercardImg from "../assets/mastercard.png";
import multibancoImg from "../assets/multibanco.png";
import partner1 from "../assets/ppr.png";
import "./style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Linha 1 */}
        <div className="footer-row footer-row-1">
          {/* Coluna 1 */}
          <div className="footer-col">
            <div className="footer-brand">
              <div className="footer-logo">
                Licita<span>Now</span>
              </div>
              <p className="footer-desc">
                Gestão de propostas transparentes baseadas em concursos. A ligar
                proprietários a empreiteiros desde <span>2025</span>.
              </p>

              <div className="footer-social">
                <button
                  className="footer-icon-btn"
                  type="button"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </button>
                <button
                  className="footer-icon-btn"
                  type="button"
                  aria-label="Facebook"
                >
                  <FaXTwitter />
                </button>
                <button
                  className="footer-icon-btn"
                  type="button"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </button>
                <button
                  className="footer-icon-btn"
                  type="button"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </button>
              </div>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="footer-col">
            <h4 className="footer-title">
              Links <span className="footer-highlight">Úteis</span>
            </h4>

            <div className="footer-list">
              <span className="footer-item">
                <FaInfoCircle className="footer-item-ic" />
                Sobre Nós
              </span>
              <span className="footer-item">
                <FaRegCreditCard className="footer-item-ic" />
                Créditos
              </span>
              <span className="footer-item">
                <FaTag className="footer-item-ic" />
                Preços
              </span>
              <span className="footer-item">
                <FaCalendarAlt className="footer-item-ic" />
                Eventos
              </span>
            </div>
          </div>

          {/* Coluna 3 */}
          <div className="footer-col">
            <h4 className="footer-title">
              As nossas <span className="footer-highlight">Soluções</span>
            </h4>

            <div className="footer-list">
              <span className="footer-item">
                <FaGavel className="footer-item-ic" />
                Concursos
              </span>
              <span className="footer-item">
                <FaTools className="footer-item-ic" />
                Serviços
              </span>
              <span className="footer-item">
                <FaFolderOpen className="footer-item-ic" />
                Arquivo
              </span>
              <span className="footer-item">
                <FaHardHat className="footer-item-ic" />
                Intervenções
              </span>
              <span className="footer-item">
                <FaHandshake className="footer-item-ic" />
                Colaboração
              </span>
            </div>
          </div>
        </div>

        {/* Linha 2 */}
        <div className="footer-row footer-row-2">
          {/* Coluna 1 */}
          <div className="footer-col">
            <h4 className="footer-title">
              Entre em <span className="footer-highlight">Contacto</span>
            </h4>

            <div className="footer-list">
              <span className="footer-item">
                <FaEnvelope className="footer-item-ic" />
                Geral@licitanow.com
              </span>
              <span className="footer-item">
                <FaFileInvoiceDollar className="footer-item-ic" />
                contabilidade@macrislda.com
              </span>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="footer-col">
            <h4 className="footer-title">
              Métodos de <span className="footer-highlight">Pagamento</span>
            </h4>

            <div className="footer-payments">
              <div className="footer-pay">
                <img src={visaImg} alt="Visa" />
              </div>

              <div className="footer-pay">
                <img src={mastercardImg} alt="Mastercard" />
              </div>

              <div className="footer-pay">
                <img src={multibancoImg} alt="Multibanco" />
              </div>
            </div>
          </div>

          {/* Coluna 3 */}
          <div className="footer-col">
            <h4 className="footer-title">
              Subscreva a nossa{" "}
              <span className="footer-highlight">Newsletter</span>
            </h4>
            <p className="footer-subtitle">
              Fique a par dos nossos projetos mais recentes e das tendências do
              setor.
            </p>

            <div className="footer-newsletter">
              <input
                className="footer-input"
                type="email"
                placeholder="O seu e-mail"
                aria-label="Email newsletter"
              />
              <button
                className="footer-submit"
                type="button"
                aria-label="Submeter newsletter"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Linha 3 */}
        <div className="footer-row footer-row-3">
          <div className="footer-images">
            <div className="footer-img-box">
              <img src={partner1} alt="Parceiro 1" />
            </div>
          </div>
        </div>

        {/* Linha 4 */}
        <div className="footer-row footer-row-4">
          <div className="footer-bottom-left">
            ® 2026 LicitaNow. Marca registada, propriedade de{" "}
            <span>Macris Lda.</span> Todos os direitos reservados.
          </div>

          <div className="footer-bottom-right">
            <span className="footer-bottom-link">Política de Privacidade</span>
            <span className="footer-bottom-link">Termos e Condições</span>
            <span className="footer-bottom-link">Livro de Reclamações</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
