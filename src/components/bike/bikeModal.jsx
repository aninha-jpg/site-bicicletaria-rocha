import { useEffect } from "react";
import "./bikeModal.css";

function BikeModal({ bicicleta, onClose }) {
    useEffect(() => {
        if (!bicicleta) return;

        const overflowAnterior = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const fecharComEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", fecharComEscape);

        return () => {
            document.body.style.overflow = overflowAnterior;
            window.removeEventListener("keydown", fecharComEscape);
        };
    }, [bicicleta, onClose]);

    if (!bicicleta) return null;

    return (
        <div
            className="bikeModalOverlay"
            onClick={onClose}
        >
            <div
                className="bikeModalContent"
                role="dialog"
                aria-modal="true"
                aria-label={`Imagem ampliada: ${bicicleta.nome}`}
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="bikeModalClose"
                    aria-label="Fechar imagem ampliada"
                    onClick={onClose}
                >
                    &times;
                </button>

                <img
                    src={bicicleta.imagem}
                    alt={bicicleta.nome}
                    className="bikeModalImage"
                />

                <h3>{bicicleta.nome}</h3>
            </div>
        </div>
    );
}

export default BikeModal;