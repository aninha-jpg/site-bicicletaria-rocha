import { ClockCircleOutlined } from "@ant-design/icons";
import "./contact.css";
import "../styles/styles.css";
import { WhatsAppOutlined } from "@ant-design/icons";
import { EnvironmentOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";

function Contact() {
    return (
        <section>
            <div className="contactHeader">
                <h2>Entre em contato</h2>

                <p>
                    Precisa de uma peça ou quer saber mais
                    sobre nossos serviços? Fale com a gente!
                </p>
            </div>

            <div className="contactContainer">
                <div className="contactInfo">
                    <div className="contactItem">
                        <div className="contactTitle">
                            <WhatsAppOutlined />
                            <h3>WhatsApp</h3>
                        </div>
                        <p>Fale conosco pelo WhatsApp.</p>
                        <a href="https://wa.me/5543991940327?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Bicicletaria%20Rocha%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target="_blank" rel="noopener noreferrer">Entrar em contato</a>
                    </div>

                    <div className="contactItem">
                        <div className="contactTitle">
                            <InstagramOutlined />
                            <h3>Instagram</h3>
                        </div>
                        <p>Acompanhe nossas novidades.</p>
                        <a href="https://www.instagram.com/bicicletaria.rocha/?hl=pt" target="_blank" rel="noopener noreferrer">Visitar perfil</a>
                    </div>

                    <div className="contactItem">
                        <div className="contactTitle">
                            <ClockCircleOutlined />
                            <h3>Horários</h3>
                        </div>
                        <p>Segunda-feira á Sexta-feira</p>
                        <p>08h às 11h | 13h às 17h</p>

                        <p>Sábado</p>
                        <p>08h às 11h</p>
                    </div>
                </div>

                <div className="contactItem contactLocation">
                     <div className="contactTitle contactLocation">
                    <EnvironmentOutlined />
                    <h3>Localização</h3>
                    </div>
                    <p>Venha conhecer nossa loja.</p>

                    <div className="contactMap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1279.1550945257811!2d-49.63234351521111!3d-23.75918376248829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c18d3d7b35a74d%3A0xbe88df91a38f3b42!2sBicicletaria%20Rocha!5e0!3m2!1spt-BR!2sbr!4v1791837999434!5m2!1spt-BR!2sbr"
                        title="Localização da Bicicletaria Rocha"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                    </div>
                </div>
                <div className="contactDivider"></div>
            </div>
        </section>
    );
}

export default Contact;