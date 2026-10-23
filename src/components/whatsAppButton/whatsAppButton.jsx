import { WhatsAppOutlined } from "@ant-design/icons";
import "./whatsAppButton.css";

function WhatsAppButton({texto}) {
    return (
        <a
            className="whatsappButton"
            href="https://wa.me/55DDDNUMERO?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Bicicletaria%20Rocha."
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