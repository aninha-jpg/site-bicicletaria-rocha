import './about.css';
import "../styles/styles.css";

function About() {
    return (
        <section className="aboutContainer">
            <div className="aboutCard">
                <div className="aboutText">
                    <h2>Nossa história</h2>
                    <span className="aboutQuote">"</span><p>
                        A história da Bicicletaria Rocha começou por volta de 2004, quando surgiu a oportunidade de adquirir algumas ferramentas e peças de uma bicicletaria. Com uma grande paixão por bicicletas, demos os primeiros passos em um pequeno espaço de apenas 3×4, na Rua Ademir Esposito.

                        Em 2008, meu irmão veio me ajudar e acabou permanecendo na bicicletaria, dando início a uma parceria que continua até hoje. Em 2010, mudamos de endereço e seguimos trabalhando, enfrentando dificuldades e recomeçando sempre que necessário.

                        Com o tempo, fomos adquirindo experiência, aprendendo juntos e ampliando nossos serviços de manutenção. No final de 2024, começamos também a investir na venda de bicicletas.

                        Hoje, continuamos trabalhando com dedicação, buscando bons preços, aprimorando nossos serviços e fazendo a Bicicletaria Rocha crescer um pouco mais a cada dia.
                    </p>

                    <span className="aboutQuoteBottom">"</span>
                </div>
                    <div className="aboutImage">
                        {/* Foto da fachada */}
                    </div>
            </div>


        </section>
    );
}

export default About;