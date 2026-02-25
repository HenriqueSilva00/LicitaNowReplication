import { FaBan, FaEye, FaFileAlt, FaUserFriends } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { FaClock } from "react-icons/fa";
import "./style/FifthPage.css";

function FifthPage() {
  return (
    <section className="fifth-page" id="beneficios">
      <div className="container fifth-wrap">
        {/* Header padrão */}
        <header className="fifth-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Princípios
          </div>

          <h2>Os Nossos Princípios</h2>

          <p>
            Confiança, transparência e valor. Estes princípios orientam tudo o
            que fazemos
          </p>
        </header>

        {/* Área dos retângulos (70% da página) */}
        <div className="fifth-blocks">
          <div className="cta-connector-wrapper">
            {/* Retângulo de cima: 4 quadrados */}
            <div className="top-rect">
              <div className="mini-square">
                <div className="mini-icon">
                  <FaBan />
                </div>
                <h3>Sem Subscrição</h3>
                <p>
                  Pague apenas pelo que utiliza. Sem taxas ocultas, sem encargos
                  recorrentes, sem compromissos.
                </p>
              </div>

              <div className="mini-square">
                <div className="mini-icon">
                  <FaEye />
                </div>
                <h3>Transparência</h3>
                <p>
                  Visibilidade total sobre todos os processos, preços e
                  progresso dos projetos. O que vê é exatamente o que obtém.
                </p>
              </div>

              <div className="mini-square">
                <div className="mini-icon">
                  <FaFileAlt />
                </div>
                <h3>Criar Concursos Grátis</h3>
                <p>
                  Inicie o seu concurso sem custos. Obtenha propostas
                  competitivas de empreiteiros qualificados sem taxas iniciais.
                </p>
              </div>

              <div className="mini-square">
                <div className="mini-icon">
                  <FaUserFriends />
                </div>
                <h3>Colaboradores</h3>
                <p>
                  Adira ao nosso programa de colaboradores e receba uma
                  percentagem dos créditos utilizados pelos convidados que
                  trouxe para a plataforma.
                </p>
              </div>
            </div>

            {/* zona de ligação + botão */}
            <div className="connector-area">
              <div className="cta-rectangle">
                <h3>
                  Pronto para <span>iniciar</span> o seu próximo projeto?
                </h3>
                <p>
                  Crie um concurso em minutos ou agende uma demonstração
                  personalizada para conhecer todas as funcionalidades da
                  plataforma.
                </p>

                <div className="cta-buttons">
                  <button className="btn-primary">
                    Começar agora
                    <HiArrowRight className="btn-icon" />
                  </button>

                  <button className="btn-outline">
                    <FaClock className="btn-icon" />
                    Agendar demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FifthPage;
