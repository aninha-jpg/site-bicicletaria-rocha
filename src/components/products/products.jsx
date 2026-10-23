import { SettingOutlined, ToolOutlined, TagsOutlined } from '@ant-design/icons';
import './products.css';

function Products(){
    {/* products section */}
    return (
        <section className="products-section">
            <h2>O que oferecemos?</h2>
            <div className="products-container">
                <a href="#manutencao" className="serviceLink">
                    <div className="product-card">
                        <SettingOutlined />
                        <h2>Manutenção</h2>
                        <p>Cuidados para manter sua bicicleta em boas condições.</p>
                    </div>
                </a>
                <a href="#parts" className="serviceLink">
                    <div className="product-card">
                        <ToolOutlined />
                        <h2>Peças</h2>
                        <p>Peças e componentes para sua bicicleta.</p>
                    </div>
                </a>
                <a href="#product-accessories" className="serviceLink">
                    <div className="product-card">
                        <TagsOutlined />
                        <h2>Acessórios</h2>
                        <p>Itens para acompanhar você em seus pedais.</p>
                    </div>
                </a>
            </div>

        </section>

    );
}

export default Products;