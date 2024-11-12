import express from 'express';
import router from './src/route';
import 'dotenv/config';

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})