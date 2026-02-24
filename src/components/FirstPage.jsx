import "./style/FirstPage.css";
import { FaFolderOpen, FaGavel, FaUsers, FaArrowRight } from "react-icons/fa";

function FirstPage() {
  return (
    <section className="first-page" id="home">
      <div className="hero-wrap container">
        <div className="hero-card">
          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-copy">
              <p className="hero-eyebrow">
                Plataforma digital para concursos e obras públicas
              </p>
              <h1 className="hero-title">
                Simplificamos concursos e projetos de construção em Portugal
              </h1>
              <p className="hero-subtitle">
                A LicitaNow é a plataforma digital que liga empresas,
                fornecedores e profissionais da construção a oportunidades
                reais, simplificando concursos, coordenação de projetos e
                fiscalização de obras — com transparência, eficiência e
                critérios claros em cada etapa.
              </p>
            </div>

            <div className="hero-cta">
              <button className="btn-primary">
                Começar
                <FaArrowRight className="btn-icon" />
              </button>

              <button className="btn-secondary">Explorar Concursos</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <FaFolderOpen />
                </div>
                <div className="stat-text">
                  <div className="stat-value">500+</div>
                  <div className="stat-label">Projetos Concluídos</div>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <FaGavel />
                </div>
                <div className="stat-text">
                  <div className="stat-value">80+</div>
                  <div className="stat-label">Concursos Ativos</div>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <FaUsers />
                </div>
                <div className="stat-text">
                  <div className="stat-value">1200+</div>
                  <div className="stat-label">Utilizadores Registados</div>
                </div>
              </div>
            </div>

            <p className="stats-note">
              Resultados reais com foco em transparência, rigor técnico e
              inovação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstPage;
