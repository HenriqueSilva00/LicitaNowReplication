import "./style/Newsletter.css";
import { FaPaperPlane } from "react-icons/fa";

function Newsletter() {
  return (
    <section className="newsletter-page" id="newsletter">
      <div className="container newsletter-wrap">
        <header className="newsletter-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            Newsletter
          </div>

          <h2>Pedido de Adesão</h2>

          <p>
            Preencha o formulário e entraremos em contacto para validar a sua
            adesão e apresentar as melhores opções para o seu perfil.
          </p>
        </header>

        <div className="newsletter-card">
          <form className="newsletter-form">
            <div className="form-grid">
              <div className="form-field">
                <label>Título</label>
                <input type="text" placeholder="Ex: Eng., Arq., Sr., Dr." />
              </div>

              <div className="form-field">
                <label>Nome</label>
                <input type="text" placeholder="O seu nome" />
              </div>

              <div className="form-field">
                <label>Apelido</label>
                <input type="text" placeholder="O seu apelido" />
              </div>

              <div className="form-field">
                <label>E-mail</label>
                <input type="email" placeholder="email@exemplo.com" />
              </div>

              <div className="form-field">
                <label>Telefone</label>
                <input type="tel" placeholder="+351 9xx xxx xxx" />
              </div>

              <div className="form-field">
                <label>Especialidade</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Selecione a sua especialidade
                  </option>
                  <option value="arquitetura">Arquitetura</option>
                  <option value="engenharia_civil">Engenharia Civil</option>
                  <option value="empreiteiro">Empreiteiro</option>
                  <option value="eletricista">Eletricista</option>
                  <option value="canalizador">Canalizador</option>
                  <option value="carpinteiro">Carpinteiro</option>
                  <option value="fornecedor_materiais">
                    Fornecedor de materiais
                  </option>
                </select>
              </div>

              <div className="form-field">
                <label>Experiência</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Selecione os anos de experiência
                  </option>
                  <option value="1-5">1 – 5 anos</option>
                  <option value="6-15">6 – 15 anos</option>
                  <option value="+15">+15 anos</option>
                </select>
              </div>

              <div className="form-field form-field-full">
                <label>Mensagem</label>
                <textarea
                  rows="5"
                  placeholder="Escreva uma breve mensagem..."
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Enviar pedido de adesão <FaPaperPlane className="btn-icon" />
              </button>

              <p className="form-note">
                Ao enviar, concorda em ser contactado pela LicitaNow para
                efeitos de adesão.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
