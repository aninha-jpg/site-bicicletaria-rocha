import "./parts.css";
import WhatsAppButton from "../whatsAppButton/whatsAppButton";

import peca1 from "../../assets/parts/peca1.jpeg";
import peca2 from "../../assets/parts/peca2.jpeg";
import peca3 from "../../assets/parts/peca3.jpeg";
import peca4 from "../../assets/parts/peca4.jpeg";
import peca6 from "../../assets/parts/peca6.jpeg";
import peca7 from "../../assets/parts/peca7.jpeg";
import peca8 from "../../assets/parts/peca8.jpeg";
import peca9 from "../../assets/parts/peca9.jpeg";
import peca10 from "../../assets/parts/peca10.jpeg";
import peca11 from "../../assets/parts/peca11.jpeg";
import peca12 from "../../assets/parts/peca12.jpeg";
import peca13 from "../../assets/parts/peca13.jpeg";
import peca14 from "../../assets/parts/peca14.jpeg";
import peca15 from "../../assets/parts/peca15.jpeg";
import peca16 from "../../assets/parts/peca16.jpeg";
import peca17 from "../../assets/parts/peca17.jpeg";
import peca19 from "../../assets/parts/peca19.jpeg";

const pecas = [
  { id: 1, imagem: peca1, nome: "Amortecedor Central" },
  { id: 2, imagem: peca2, nome: "Selim Infantil" },
  { id: 3, imagem: peca3, nome: "Cubo Barulhento K7" },
  { id: 4, imagem: peca4, nome: "Cubo Central Rolamentado" },
  { id: 6, imagem: peca6, nome: "Cubo Simples" },
  { id: 7, imagem: peca7, nome: "Pneus" },
  { id: 8, imagem: peca8, nome: "Mesa 4 Parafusos" },
  { id: 9, imagem: peca9, nome: "Alavanca de Câmbio" },
  { id: 10, imagem: peca10, nome: "Macaquinho Shimano Sem Gancheira" },
  { id: 11, imagem: peca11, nome: "Jogo de Direção Simples" },
  { id: 12, imagem: peca12, nome: "Jogo de Direção Aro 29" },
  { id: 13, imagem: peca13, nome: "Câmara de Ar" },
  { id: 14, imagem: peca14, nome: "Selim LTX" },
  { id: 15, imagem: peca15, nome: "Selim Inviktus" },
  { id: 16, imagem: peca16, nome: "Selim GTS" },
  { id: 17, imagem: peca17, nome: "Selim Gel 2 Molas" },
  { id: 19, imagem: peca19, nome: "Aro 29 Avalanche" },
];

function Parts() {
  return (
    <section className="partsSection" id="parts">
      <h2>Peças</h2>
      <p>Componentes para sua bike ficar completa!</p>

      <div className="partsGrid">
        {pecas.map((peca) => (
          <article className="partsCard" key={peca.id}>
            <img src={peca.imagem} alt={peca.nome} loading="lazy" />

            <h3>{peca.nome}</h3>

            <WhatsAppButton
              texto="Tenho interesse"
              mensagem={`Olá! Vim pelo site da Bicicletaria Rocha e gostaria de informações sobre a peça: ${peca.nome}.`}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Parts;