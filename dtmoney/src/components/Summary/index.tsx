import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function Summary() {

    const { transactions } = useTransactions();

    const sumary = transactions.reduce((accumulator, transaction) => {
        accumulator[transaction.type] += transaction.value;
        accumulator.total += transaction.type == 'deposit' ? transaction.value : transaction.value * -1;
        return accumulator;
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{Intl.NumberFormat("pt-br", { style: 'currency', currency: 'BRL' }).format(sumary.deposit)}</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>- {Intl.NumberFormat("pt-br", { style: 'currency', currency: 'BRL' }).format(sumary.withdraw)}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>{Intl.NumberFormat("pt-br", { style: 'currency', currency: 'BRL' }).format(sumary.total)}</strong>
            </div>
        </Container>
    );
}