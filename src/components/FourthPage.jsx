import "./style/FourthPage.css";
import { FaClipboardCheck, FaGavel, FaUsers, FaUserTie } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

function FourthPage() {
  return (
    <section className="fourth-page" id="estatisticas">
      <div className="container fourth-wrap">
        {/* LEFT: stats grid */}
        <div className="stats-grid-2x2">
          <div className="stat-card">
            <div className="stat-card-icon" style={{ "--accent": "#85B400" }}>
              <FaClipboardCheck />
            </div>
            <div className="stat-card-value">500+</div>
            <div className="stat-card-label">Projetos Concluídos</div>
          </div>

          <div className="stat-card">
            <div className="stat-card-icon" style={{ "--accent": "#1F6FB2" }}>
              <FaGavel />
            </div>
            <div className="stat-card-value">80+</div>
            <div className="stat-card-label">Concursos Ativos</div>
          </div>

          <div className="stat-card">
            <div className="stat-card-icon" style={{ "--accent": "#F39C12" }}>
              <FaUsers />
            </div>
            <div className="stat-card-value">1200+</div>
            <div className="stat-card-label">Utilizadores Registados</div>
          </div>

          <div className="stat-card">
            <div className="stat-card-icon" style={{ "--accent": "#0E7C66" }}>
              <FaUserTie />
            </div>
            <div className="stat-card-value">15+</div>
            <div className="stat-card-label">Profissionais Licenciados</div>
          </div>
        </div>
        <div className="fourth-divider" aria-hidden="true"></div>
        {/* RIGHT: text + CTA */}
        <div className="fourth-right">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Sobre a LicitaNow
          </div>

          <h1>Sobre a LicitaNow</h1>

          <p>
            Fornecemos soluções digitais inovadoras para o setor da construção,
            simplificando e otimizando todo o processo de contratação e gestão
            de projetos. A LicitaNow garante eficiência, fiabilidade e rigor em
            cada etapa, desde a organização de concursos até à fiscalização de
            obras privadas e públicas. A nossa plataforma permite que
            particulares, empresas e profissionais da construção civil submetam
            propostas para execução de obras, projetos de arquitetura e
            especialidades, assim como para outras necessidades específicas dos
            Donos de Obra. Os participantes apresentam as suas propostas
            diretamente na plataforma, sendo geralmente adjudicada a proposta
            mais baixa. Em caso de incumprimento contratual, asseguramos a
            substituição pela proposta imediatamente seguinte mais vantajoso. A
            LicitaNow abrange diversos segmentos, incluindo bens físicos,
            serviços, imóveis e produtos relacionados com a construção civil,
            bem como produtos digitais associados ao setor.
          </p>
          <button className="btn-primary">
            Saber mais sobre nós
            <HiArrowRight className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default FourthPage;
