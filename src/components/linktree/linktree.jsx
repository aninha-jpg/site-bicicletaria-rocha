import "./linktree.css";

import {
  InstagramOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

import Logo from "../../assets/logo.jpg";

function Linktree() {
  const links = [
    {
      icon: <InstagramOutlined />,
      title: "Instagram",
      description: "Acompanhe nossas novidades",
      url: "https://www.instagram.com/bicicletaria.rocha/?hl=pt",
    },
    {
        icon: <WhatsAppOutlined />,
        title: "WhatsApp",
        description: "Fale conosco e tire suas dúvidas",
        url: "https://wa.me/5543991940327?text=Olá!%20Encontrei%20vocês%20pelo%20Instagram%20e%20gostaria%20de%20mais%20informações."
    },
    {
      icon: <EnvironmentOutlined />,
      title: "Como chegar",
      description: "Encontre nossa bicicletaria",
      url: "https://maps.app.goo.gl/2rDB7L9i32dzME6X6",
    },
    {
      icon: <ShoppingOutlined />,
      title: "Nossos produtos",
      description: "Confira nossas bicicletas e peças",
      url: "/#products",
    },
  ];

  return (
    <main className="linktreePage">
      <section className="linktreeContainer">
        <img
          src={Logo}
          alt="Bicicletaria Rocha"
          className="linktreeLogo"
        />

        <h1>Bicicletaria Rocha</h1>
        <p className="linktreeSubtitle">
          Sua bike em boas mãos desde 2004.
        </p>

        <div className="linktreeLinks">
          {links.map((link, index) => (
            <a
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="linktreeButton"
              key={index}
            >
              <span className="linktreeIcon">{link.icon}</span>

              <span className="linktreeText">
                <strong>{link.title}</strong>
                <small>{link.description}</small>
              </span>
            </a>
          ))}
        </div>

        <footer className="linktreeFooter">
          <span>BICICLETARIA ROCHA</span>
          <p>Qualidade, confiança e tradição.</p>
        </footer>
      </section>
    </main>
  );
}

export default Linktree;