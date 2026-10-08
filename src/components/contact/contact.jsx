import { ClockCircleOutlined } from "@ant-design/icons";

function Contact() {
    return (
        <section>
            <h2>Entre em contato</h2>

            <p>
                Precisa de uma peça ou quer saber mais
                sobre nossos serviços? Fale com a gente!
            </p>

            <div className="contactContainer">

                <div className="contactItem">
                    <h3>WhatsApp</h3>
                    <p>Fale conosco pelo WhatsApp.</p>
                    <a href="https://wa.me/5543991940327?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Bicicletaria%20Rocha%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target="_blank" rel="noopener noreferrer">Entrar em contato</a>
                </div>

                <div className="contactItem">
                    <h3>Localização</h3>
                    <p>Venha conhecer nossa loja.</p>
                    <a href="https://maps.app.goo.gl/Lod6fgeVo2NnmoHv9" target="_blank" rel="noopener noreferrer">Como chegar</a>
                </div>

                <div className="contactItem">
                    <ClockCircleOutlined />
                    <h3>Horário de funcionamento</h3>

                    <p>Segundas ás Sextas</p>
                    <p>08h às 11h | 13h às 17h</p>

                    <p>Sábados</p>
                    <p>08h às 11h</p>
                </div>

                <div className="contactItem">
                    <h3>Instagram</h3>
                    <p>Acompanhe nossas novidades.</p>
                    <a href="https://www.instagram.com/bicicletaria.rocha/?hl=pt" target="_blank" rel="noopener noreferrer">Visitar perfil</a>
                </div>

            </div>
        </section>
    );
}

export default Contact;