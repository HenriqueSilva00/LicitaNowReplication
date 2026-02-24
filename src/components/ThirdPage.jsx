import { useEffect, useMemo, useRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import "./style/ThirdPage.css";

const STEPS = [
  {
    title: "Criar Concurso",
    desc: "Publique o seu projeto com todos os requisitos detalhados.",
    color: "#85B400",
  },
  {
    title: "Receber Propostas",
    desc: "Os interessados apresentam propostas.",
    color: "#1F6FB2",
  },
  {
    title: "Vencedor Automático",
    desc: "A proposta mais baixa é selecionada automaticamente quando o tempo termina.",
    color: "#F39C12",
  },
  {
    title: "Pós Concurso",
    desc: "Comunique e partilhe ficheiros de forma gratuita através da plataforma.",
    color: "#0E7C66",
  },
];

const OFFSETS = [
  { x: 0, y: 60 }, // 1º
  { x: 150, y: -572 }, // 2º
  { x: -150, y: -550 }, // 3º
  { x: 0, y: 70 }, // 4º
];

function polarToCartesian(cx, cy, r, angleDeg) {
  const a = (Math.PI / 180) * angleDeg;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

export default function ThirdPage() {
  const svgRef = useRef(null);
  const [svgSize, setSvgSize] = useState({ w: 1, h: 1 });

  const arc = useMemo(() => {
    const w = 1200;
    const h = 520;
    const cx = w / 2;
    const cy = h * 0.95;
    const r = 420;
    const start = 210;
    const end = -30;

    const points = STEPS.map((_, i) => {
      const t = i / (STEPS.length - 1);
      const angle = start + (end - start) * t;
      return polarToCartesian(cx, cy, r, angle);
    });

    const p0 = polarToCartesian(cx, cy, r, start);
    const p1 = polarToCartesian(cx, cy, r, end);
    const d = `M ${p0.x} ${p0.y} A ${r} ${r} 0 0 1 ${p1.x} ${p1.y}`;

    return { viewW: w, viewH: h, d, points };
  }, []);

  // medir o tamanho real do SVG no ecrã (px)
  useEffect(() => {
    if (!svgRef.current) return;

    const el = svgRef.current;
    const update = () => {
      const rect = el.getBoundingClientRect();
      setSvgSize({ w: rect.width, h: rect.height });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  // converte coordenadas do viewBox -> px reais do svg
  const toPx = (pt) => {
    const scaleX = svgSize.w / arc.viewW;
    const scaleY = svgSize.h / arc.viewH;
    return { x: pt.x * scaleX, y: pt.y * scaleY };
  };

  return (
    <section className="third-page">
      <div className="container third-wrap">
        <header className="third-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Processo Simples
          </div>

          <h2>Como Funciona</h2>

          <p>
            Da criação do concurso à conclusão do projeto em quatro passos
            simples, totalmente digitais e transparentes.
          </p>
        </header>
        <div className="timeline-arc">
          <svg
            ref={svgRef}
            className="timeline-svg"
            viewBox={`0 0 ${arc.viewW} ${arc.viewH}`}
            preserveAspectRatio="none" // 👈 MUITO IMPORTANTE
            aria-hidden="true"
          >
            <path className="timeline-path" d={arc.d} />
          </svg>

          {arc.points.map((pt, i) => {
            const px = toPx(pt);
            const o = OFFSETS[i];
            return (
              <div
                className={`timeline-step step-${i}`}
                style={{
                  left: `${px.x + o.x}px`,
                  top: `${px.y + o.y}px`,
                  "--accent": STEPS[i].color,
                }}
              >
                <div className="step-dot" />
                <div className="step-card">
                  <div className="step-title">
                    <span className="step-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {STEPS[i].title}
                  </div>
                  <div className="step-desc">{STEPS[i].desc}</div>
                </div>
              </div>
            );
          })}
        </div>
        {/* CTA em baixo */}
        <div className="timeline-cta">
          <button className="btn-primary">
            Começar agora
            <HiArrowRight className="btn-icon" />
          </button>
          <p className="timeline-note">
            Comece em minutos — crie um concurso e receba propostas de forma
            simples e transparente.
          </p>
        </div>
      </div>
    </section>
  );
}
