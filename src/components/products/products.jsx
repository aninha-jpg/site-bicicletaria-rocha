
function Products(){
    {/* products section */}
    return (
        <section>
            <h2>O que oferecemos?</h2>
            <div className="products-container">
                <div className="product-card">
                    <h2>Manutenção</h2>
                    <p>Cuidados para manter sua bicicleta em boas condições.</p>
                </div>

                <div className="product-card">
                    <h2>Peças</h2>
                    <p>Peças e componentes para sua bicicleta.</p>
                </div>

                <div className="product-card">
                    <h2>Acessórios</h2>
                    <p>Itens para acompanhar você em seus pedais.</p>
                </div>

                <div className="product-card">
                    <h2>Atendimento</h2>
                    <p>Entre em contato para consultar nossos produtos e serviços.</p>
                </div>
            </div>

        </section>

    );
}

export default Products;