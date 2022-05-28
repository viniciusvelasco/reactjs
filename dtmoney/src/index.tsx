import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salario',
          value: 20,
          category: 'Renda',
          type: 'deposit',
          createdAt: new Date('2020-05-20 09:00:00'),
        },
        {
          id: 2,
          title: 'Lanche',
          value: 10,
          category: 'Alimentação',
          type: 'withdraw',
          createdAt: new Date('2020-05-20 09:00:00'),
        },]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
