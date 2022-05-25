import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get("transactions").then(response => { console.log(response.data) });
    }, []);

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