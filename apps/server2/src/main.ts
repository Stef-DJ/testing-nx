import express from 'express';
import {sayHello} from '@testing-nx/server1';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3100;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: `Hello form server 2 using ${sayHello()}` });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
