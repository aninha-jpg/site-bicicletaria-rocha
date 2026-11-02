import "./payments.css";
import { CreditCard, Wallet } from "lucide-react";
import PixLogo from "../../assets/pix.png";

function PixIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 5L24 12L31 5C33 3 36 3 38 5L43 10L31 22L24 15L17 22L5 10L10 5C12 3 15 3 17 5Z"
        fill="currentColor"
      />
      <path
        d="M5 14L17 26L24 19L31 26L43 14L43 19L31 31L24 24L17 31L5 19V14Z"
        fill="currentColor"
      />
      <path
        d="M5 24L17 36L24 29L31 36L43 24V29L38 34C36 36 33 36 31 34L24 27L17 34C15 36 12 36 10 34L5 29V24Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Payments() {
  return (
    <section className="payments">
      <div className="payments-content">
        <div className="payments-heading">
          <h2>Facilidade na hora de pagar!</h2>
          <p>Aceitamos diferentes formas de pagamento.</p>
        </div>

        <div className="payments-methods">
          <div className="payment-method">
            <img src={PixLogo} alt="Pix" className="pix-logo" />
            <span>Pix</span>
          </div>

          <div className="payment-method">
            <CreditCard size={32} strokeWidth={1.6} />
            <span>Cartão de crédito</span>
          </div>

          <div className="payment-method">
            <Wallet size={32} strokeWidth={1.6} />
            <span>Cartão de débito</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payments;