import { useState } from "react";
import "./style/SecondPage.css";
import imgConstrucao from "../assets/remodelacoes.jpg";
import imgServicos from "../assets/fiscalizacao.jpg";
import imgSub from "../assets/subempreiteiros.jpg";
import imgOutros from "../assets/aluguer.jpg";

const TOPICS = [
  {
    key: "subcontratacao",
    title: "Subcontratação",
    desc: "Encontre subempreiteiros para fases específicas da construção — desde estruturas e instalações técnicas até acabamentos finais.",
    color: "#F39C12",
    image: imgSub,
  },
  {
    key: "servicos",
    title: "Serviços Técnicos",
    desc: "Organize concursos para fiscalização, gestão de obra, arquitetura, engenharia, topografia e outros serviços com rigor e controlo total.",
    color: "#1F6FB2",
    image: imgServicos,
  },
  {
    key: "outros",
    title: "Outros",
    desc: "Crie concursos para aluguer de equipamentos, fornecimento de materiais de construção ou qualquer outra necessidade operacional do projeto.",
    color: "#0E7C66",
    image: imgOutros,
  },
  {
    key: "construcao",
    title: "Concursos de Construção",
    desc: "Publique concursos para obras novas, remodelações, ampliações ou legalizações e compare propostas com critérios claros e transparentes.",
    color: "#85B400",
    image: imgConstrucao,
  },
];

function SecondPage() {
  const [active, setActive] = useState(0);

  return (
    <section className="second-page" id="tipos">
      <div className="container second-wrap">
        <header className="second-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Categorias de Concurso
          </div>

          <h2>Que tipo de concursos pode criar?</h2>

          <p>
            Organize e gira concursos para todas as fases do setor da
            construção, com total transparência, controlo e eficiência numa
            única plataforma.
          </p>
        </header>

        <div className="second-content">
          {/* CÍRCULO */}
          <div className="circle-area">
            <div className="donut">
              <svg
                viewBox="0 0 200 200"
                className="donut-svg"
                aria-hidden="true"
              >
                {/* trilho (cinza) */}
                <circle className="donut-track" cx="100" cy="100" r="72" />

                {/* 4 segmentos */}
                {TOPICS.map((t, i) => (
                  <circle
                    key={t.key}
                    className={`donut-segment ${
                      active === i ? "is-active" : ""
                    }`}
                    cx="100"
                    cy="100"
                    r="72"
                    style={{
                      stroke: t.color,
                      // 4 partes iguais: 25% do círculo cada
                      strokeDasharray: "113.1 339.3", // ~ (circumference/4) + resto
                      strokeDashoffset: `${-113.1 * i}`,
                    }}
                    onMouseEnter={() => setActive(i)}
                  />
                ))}
              </svg>

              {/* TEXTO CENTRAL */}
              <div className="donut-center">
                <div className="donut-center-label">Tipos de</div>
                <div className="donut-center-title">Concursos</div>
                <div className="donut-center-sub">na LicitaNow</div>
              </div>
            </div>

            {/* mini legenda opcional */}
            <div className="circle-legend">
              {TOPICS.map((t, i) => (
                <button
                  key={t.key}
                  className={`legend-pill ${active === i ? "is-active" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  type="button"
                >
                  <span className="dot" style={{ background: t.color }} />
                  {t.short}
                </button>
              ))}
            </div>
          </div>

          {/* DESCRIÇÃO */}
          <aside className="desc-card">
            <div className="desc-left">
              <div
                className="desc-badge"
                style={{ background: TOPICS[active].color }}
              />
              <h3>{TOPICS[active].title}</h3>
              <p>{TOPICS[active].desc}</p>
            </div>

            <div className="desc-right">
              <img
                key={TOPICS[active].image}
                src={TOPICS[active].image}
                alt={TOPICS[active].title}
                className="desc-image"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default SecondPage;
