import WhatsAppButton from "../whatsAppButton/whatsAppButton";
import "./header.css";
import bannerFull from "../../assets/fachada-lado.jpg";
import { InstagramOutlined } from "@ant-design/icons";

function Header() {
  return (
    <header className="headerSection">
      <div className="bikePlataform">
          <img
            src={bannerFull}
            alt="Bicicleta da Bicicletaria Rocha"
            className="heroBike"
            width="800"
            height="600"
            fetchPriority="high"
          />
      </div>

      <div className="headerContent">
        <h1>Bicicletaria Rocha</h1>
        <p>Explore novos caminhos.</p>

        <div className="headerActions">
          <WhatsAppButton texto="Fale conosco" />
            <a className="instagramButton"
              href="https://www.instagram.com/bicicletaria.rocha/?hl=pt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar Instagram da Bicicletaria Rocha" ><InstagramOutlined />Visite Nosso Instagram</a>
        </div>
      </div>
    </header>
  );
}

export default Header;