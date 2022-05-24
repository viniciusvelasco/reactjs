import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Almoço</td>
                        <td className="deposit">R$ 20,00</td>
                        <td>Alimentação</td>
                        <td>20/05/2020</td>
                    </tr>
                    <tr>
                        <td>Lanche</td>
                        <td className="withdraw">- R$ 10,00</td>
                        <td>Alimentação</td>
                        <td>20/05/2020</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}