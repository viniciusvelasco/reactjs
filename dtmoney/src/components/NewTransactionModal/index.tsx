import { useState } from "react";
import Modal from "react-modal";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransctionTypeContainer } from "./styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');

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
                <img src={closeImg} alt="Fechar" />
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder="Titulo" />
                <input type="number" placeholder="Valor" />

                <TransctionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type === 'deposit'}
                        activeColor="green"
                        onClick={() => { setType('deposit') }}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        isActive={type === 'withdraw'}
                        activeColor="red"
                        onClick={() => { setType('withdraw') }}
                    >
                        <img src={outcomeImg} alt="Entrada" />
                        <span>Saída</span>
                    </RadioBox>
                </TransctionTypeContainer>

                <input type="text" placeholder="Categoria" />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}