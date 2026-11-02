import "./cta.css";
import MementBike from "../../assets/bike-moment.jpg";

function CTA() {
  return (
    <section className="cta">
      <img src={MementBike} alt="Bicicleta" className="cta-image" />

      <div className="cta-overlay">
        <h2>Feita para acompanhar você em todos os momentos.</h2>
      </div>
    </section>
  );
}

export default CTA;