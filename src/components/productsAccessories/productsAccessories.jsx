import accessorie1 from "../../assets/accessories/accessorie1.jpeg";
import accessorie2 from "../../assets/accessories/accessorie2.png";
import accessorie3 from "../../assets/accessories/accessorie3.jpeg";
import accessorie4 from "../../assets/accessories/accessorie4.jpeg";
import accessorie5 from "../../assets/accessories/accessorie5.jpeg";
import accessorie6 from "../../assets/accessories/accessorie6.png";
import accessorie7 from "../../assets/accessories/accessorie7.jpeg";
import WhatsAppButton from "../whatsAppButton/whatsAppButton";
import "./productsAccessories.css";

const accessories = [
  { id: 1, name: "Bolsa Para Celular", image: accessorie1 },
  { id: 2, name: "Cadeado para Bicicleta", image: accessorie2 },
  { id: 3, name: "Garrafinhas", image: accessorie3 },
  { id: 4, name: "Manopla Vermelha", image: accessorie4 },
  { id: 5, name: "Manopla Laranja", image: accessorie5 },
  { id: 6, name: "Pedaleiras", image: accessorie6 },
  { id: 7, name: "Aparabarro", image: accessorie7 },
];

function ProductAccessories() {
  return (
    <section className="accessoriesSection" id="accessories">
      <h2>Acessórios</h2>

      <div className="accessoriesGrid">
        {accessories.map((accessories) => (
          <article className="accessoryCard" key={accessories.id}>
            <img
              src={accessories.image}
              alt={accessories.name}
              loading="lazy"
            />

            <h3>{accessories.name}</h3>

            <WhatsAppButton texto="Tenho interesse" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductAccessories;