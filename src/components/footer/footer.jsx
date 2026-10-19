import './footer.css';

function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footerContainer">
                <h3>Bicicletaria Rocha</h3>

                <p className="footerPhrase">
                    Tradição, dedicação e compromisso com nossos clientes.
                </p>
            </div>

            <div className="footerBottom">
                <p>
                    © {anoAtual} Bicicletaria Rocha. Todos os direitos reservados.
                </p>
            </div>
            <div className="footerDeveloper">
                Desenvolvido por{' '}
                <a
                    href="https://aninha-jpg.github.io/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                > Ana Lu </a>
</div>
        </footer>
    );
}

export default Footer;