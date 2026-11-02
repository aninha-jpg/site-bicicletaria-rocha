import "./callToAction.css";
import kidImage from "../../assets/kid.jpg";

function CallToAction() {
  return (
    <section className="cta-section">
      <div
        className="cta-background"
        style={{ backgroundImage: `url(${kidImage})` }}
      />

      <div className="cta-overlay" />

      <div className="cta-content">
        <div className="cta-left">
          <span className="cta-subtitle">BICICLETARIA ROCHA</span>
          <h2>As melhores lembranças começam com uma primeira pedalada.</h2>
        </div>

        <div className="cta-right">
          <p>
            A primeira bicicleta, os primeiros passeios e cada nova conquista.
            Conte com a Bicicletaria Rocha para fazer parte desses momentos.
          </p>

          <a
            href="https://wa.me/5543991496639"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Encontre sua bicicleta
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
