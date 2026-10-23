
import "./parts.css";
import WhatsAppButton from "../whatsAppButton/whatsAppButton";

import peca1 from "../../assets/parts/peca1.jpeg";
import peca2 from "../../assets/parts/peca2.jpeg";
import peca3 from "../../assets/parts/peca3.jpeg";
import peca4 from "../../assets/parts/peca4.jpeg";
import peca5 from "../../assets/parts/peca5.jpeg";
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
import peca18 from "../../assets/parts/peca18.jpeg";
import peca19 from "../../assets/parts/peca19.jpeg";

const pecas = [
  { imagem: peca1, nome: "Amortecedor Central" },
  { imagem: peca2, nome: "Selin Infantil"},
  { imagem: peca3, nome: "Cubo Barulhento K7" },
  { imagem: peca4, nome: "Cubo Central Rolamentado"},
  { imagem: peca5, nome: "Pneu Aro 20"},
  { imagem: peca6, nome: "Cubo Simples"},
  { imagem: peca7, nome: "Pneu"},
  { imagem: peca8, nome: "Mesa 4 Parafuso"},
  { imagem: peca9, nome: "Alavanca de Câmbio"},
  { imagem: peca10, nome: "Macaquinho Shimano Sem Gancheira"},
  { imagem: peca11, nome: "Jogo de Direção Simples"},
  { imagem: peca12, nome: "Jogo de Direção Aro 29"},
  { imagem: peca13, nome: "Câmara de Ar" },
  { imagem: peca14, nome: "Selin LTX"},
  { imagem: peca15, nome: "Peça 15"},
  { imagem: peca16, nome: "Selin GTS"},
  { imagem: peca17, nome: "Selin Gel 2 Molas"},
  { imagem: peca18, nome: "Peça 18"},
  { imagem: peca19, nome: "Aro 29 Avalanche"},
];

function Parts() {
  return (
    <section className="partsSection" id="pecas">
      <h2>Peças</h2>

      <div className="partsGrid">
        {pecas.map((peca, i) => (
          <article className="partsCard" key={i}>
            <img src={peca.imagem} alt={peca.nome} />
            <h3>{peca.nome}</h3>
            <p>{peca.descricao}</p>
            <WhatsAppButton texto="Tenho interesse" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Parts;
