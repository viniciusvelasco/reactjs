import Modal from "react-modal";
import CloseImg from '../../assets/close.svg';
import { Container } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={CloseImg} alt="Fechar" />
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder="Titulo" />
                <input type="number" placeholder="Valor" />
                <input type="text" placeholder="Categoria" />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}