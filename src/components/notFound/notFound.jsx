import "./notFound.css";

function NotFound() {
    return (
        <main className="notFound">
            <div className="notFoundContent">

                <span className="notFoundLabel">
                    BICICLETARIA ROCHA
                </span>

                <h1>404</h1>

                <div className="notFoundDivider">
                    <span></span>
                    <span>🚲</span>
                    <span></span>
                </div>

                <h2>Parece que você saiu da rota!</h2>

                <p>
                    A página que você procura não foi encontrada.
                    Que tal voltar e continuar seu caminho?
                </p>

                <a href="/" className="notFoundButton">
                    Voltar para o início
                </a>

            </div>
        </main>
    );
}

export default NotFound;