import { WhatsAppOutlined } from "@ant-design/icons";
import "./whatsAppButton.css";

function WhatsAppButton({ texto, mensagem }) {
  const mensagemPadrao =
    "Olá! Vim pelo site da Bicicletaria Rocha.";

  const mensagemFinal = mensagem || mensagemPadrao;

  const linkWhatsApp = `https://wa.me/5543991940327?text=${encodeURIComponent(mensagemFinal)}`;

  return (
    <a
      className="whatsappButton"
      href={linkWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <WhatsAppOutlined />
      {texto}
    </a>
  );
}

export default WhatsAppButton;