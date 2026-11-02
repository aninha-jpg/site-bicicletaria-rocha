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
  },
  {
    id: 2,
    nome: "Montagem e Desmontagem",
    descricao:
      "Serviços de montagem e desmontagem de bicicletas conforme a necessidade.",
    icone: <SettingOutlined />,
  },
  {
    id: 3,
    nome: "Venda e Instalação de Peças",
    descricao:
      "Peças para bicicletas e serviço de instalação para facilitar a manutenção.",
    icone: <ApartmentOutlined />,
  },
  {
    id: 4,
    nome: "Raiamento de Rodas de Motos",
    descricao:
      "Serviço de raiamento de rodas para bicicletas e motocicletas.",
    icone: <ApiOutlined />,
  },
  {
    id: 4,
    nome: "Revisão Completa",
    descricao:
      "Check-up para a sua bicicleta.",
    icone: <CheckOutlined />,
  },
];

function MaintenanceServices() {
  return (
    <section className="maintenanceSection" id="manutencao">
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

            <WhatsAppButton texto="Tenho interesse" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default MaintenanceServices;
