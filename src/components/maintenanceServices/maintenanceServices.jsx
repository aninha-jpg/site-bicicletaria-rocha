import {
  ToolOutlined,
  ApartmentOutlined,
  SettingOutlined,
  ApiOutlined,
  CheckOutlined
} from "@ant-design/icons";

import WhatsAppButton from "../whatsAppButton/whatsAppButton";
import "./maintenanceServices.css";

const servicos = [
  {
    id: 1,
    nome: "Manutenção de Bicicletas",
    descricao:
      "Cuidados e manutenção para ajudar a manter sua bicicleta em boas condições de uso.",
    icone: <ToolOutlined />,
    mensagem: "Olá! Gostaria de informações sobre manutenção de bicicletas."
  },
  {
    id: 2,
    nome: "Montagem e Desmontagem",
    descricao:
      "Serviços de montagem e desmontagem de bicicletas conforme a necessidade.",
    icone: <SettingOutlined />,
    mensagem: "Olá! Gostaria de informações sobre montagem e desmontagem de bicicletas."
  },
  {
    id: 3,
    nome: "Venda e Instalação de Peças",
    descricao:
      "Peças para bicicletas e serviço de instalação para facilitar a manutenção.",
    icone: <ApartmentOutlined />,
    mensagem: "Olá! Gostaria de informações sobre peças e instalação."
  },
  {
    id: 4,
    nome: "Raiamento de Rodas de Motos",
    descricao:
      "Serviço de raiamento de rodas para bicicletas e motocicletas.",
    icone: <ApiOutlined />,
    mensagem: "Olá! Gostaria de informações sobre o serviço de raiamento de rodas."
  },
  {
    id: 5,
    nome: "Revisão Completa",
    descricao:
      "Check-up para a sua bicicleta.",
    icone: <CheckOutlined />,
    mensagem: "Olá! Gostaria de informações sobre a revisão completa de bicicletas."
  },
];

function MaintenanceServices() {
  return (
    <section className="maintenanceSection" id="services">
      <h2>Nossos Serviços</h2>

      <p className="maintenanceDescription">
        Da manutenção à instalação de peças, tudo o que você precisa para sua Bike!
      </p>

      <div className="maintenanceGrid">
        {servicos.map((servico) => (
          <article className="maintenanceCard" key={servico.id}>
            <div className="maintenanceIcon">
              {servico.icone}
            </div>

            <h3>{servico.nome}</h3>

            <p>{servico.descricao}</p>

            <WhatsAppButton
              texto="Tenho interesse"
              mensagem={servico.mensagem}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default MaintenanceServices;