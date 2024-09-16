import express from 'express';
import {typescriptLibrary} from '@testing-nx/typescript-library';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const app = express();
app.get('/', (req, res) => {
  res.send({ message: `Hello API and ${typescriptLibrary()}` });
});
app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
