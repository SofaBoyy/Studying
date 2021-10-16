import { connect, disconnect } from 'mongoose';
import * as AutorRepositorio from './persistencia/autorRepositorio';

const uri = 'mongodb+srv://nick:nick@atividade5db.54mse.mongodb.net/Atividade5DB?retryWrites=true&w=majority';

async function main() {
    try {
        const cliente = await connect(uri);
        console.log('Conectado ao MongoDb Atlas');

        /*
        console.log('Adicionando autores...');
        let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Matutu'});
        console.log(`Autor inserido: ${a1}`);
        let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a2}`);
        */

        console.log('Alterando altores...');
        let autores = await AutorRepositorio.alterarRegistro("616b0ed607c4eed792b7e580", "Nicolau", "Cara de Pau");
        console.log(autores);
    } catch (error) {
        console.log(`Erro: ${error}`);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }
}

main();