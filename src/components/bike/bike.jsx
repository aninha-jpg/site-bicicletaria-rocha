import bike1 from "../../assets/bikes/bike1.jpeg";
import bike2 from "../../assets/bikes/bike2.jpeg";
import bike3 from "../../assets/bikes/bike3.jpeg";
import bike4 from "../../assets/bikes/bike4.jpeg";
import bike5 from "../../assets/bikes/bike5.jpeg";
import bike6 from "../../assets/bikes/bike6.jpeg";
import bike7 from "../../assets/bikes/bike7.jpeg";
import bike8 from "../../assets/bikes/bike8.jpeg";
import bike9 from "../../assets/bikes/bike9.jpeg";
import bike10 from "../../assets/bikes/bike10.jpeg";
import bike11 from "../../assets/bikes/bike11.jpeg";
import bike12 from "../../assets/bikes/bike12.jpeg";
import bike13 from "../../assets/bikes/bike13.jpeg";
import bike14 from "../../assets/bikes/bike14.jpeg";

import WhatsAppButton from "../whatsAppButton/whatsAppButton";
import "./bike.css";

const bicicletas = [
  { id: 1, nome: "Viking", imagem: bike1 },
  { id: 2, nome: "Viking", imagem: bike2},
  { id: 3, nome: "Bicicleta Crypto 29", imagem: bike3},
  { id: 4, nome: "Viking", imagem: bike4},
  { id: 5, nome: "Bicicleta Alfameq Feminina 29", imagem: bike5},
  { id: 6, nome: "Monark", imagem: bike6},
  { id: 7, nome: "Bicicleta Crypto 29", imagem: bike7},
  { id: 8, nome: "Bicicleta Crypto 29", imagem: bike8},
  { id: 9, nome: "Bicicleta Crypto 29", imagem: bike9},
  { id: 10, nome: "Bicicleta Infantil", imagem: bike10},
  { id: 11, nome: "Bicicleta BMX 20", imagem: bike11},
  { id: 12, nome: "Bicicleta Aro 24", imagem: bike12},
  { id: 13, nome: "Bicicleta Infantil Aro 16", imagem: bike13},
  { id: 14, nome: "Bicicleta Crypto 29", imagem: bike14},
];

function Bike() {
  return (
    <section className="bikesSection" id="bicicletas">
      <h2>Bicicletas</h2>

      <div className="bikesGrid">
        {bicicletas.map((bike) => (
          <article className="bikeCard" key={bike.id}>
            <img src={bike.imagem} alt={bike.nome} />
            <h3>{bike.nome}</h3>
            <p>{bike.descricao}</p>
            <WhatsAppButton texto="Tenho interesse" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Bike;