import bikeHero from "../../assets/bikeHero.png";

function Hero() {
  return (
    <div>
      <h1>Bicicletaria Rocha</h1>

      <img
        src={bikeHero}
        alt="Bicicleta"
        style={{ width: "500px", display: "block" }}
      />
    </div>
  );
}

export default Hero;