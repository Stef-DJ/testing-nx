import express from 'express';
import {serverLibsDbLibrary} from '@testing-nx/server-libs/db-library'
// import {javascriptLibrary} from '@testing-nx/javascript-library';
import { typescriptLibrary } from '@testing-nx/typescript-library';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: `Hello from server 1 using ${serverLibsDbLibrary()}` });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

export function sayHello() {
  return "hello from Server1 ";
}
