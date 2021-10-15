
import * as mdb from 'mongodb';
import { type } from 'os';
import {Pessoa} from './pessoa';

const uri = 'mongodb+srv://nick:nick@cluster0.ooubl.mongodb.net/Teste?retryWrites=true&w=majority';
const client = new mdb.MongoClient(uri);

async function main () {
    try{
        await client.connect();
        console.log('Conectado ao MongoDB Atlas');

        const database = client.db('Teste');
        const collection = database.collection<Pessoa>('pessoas');

        const pessoa: Pessoa = {
            nome: 'Volney',
            idade: 19,
        };

       // const resultado = await collection.insertOne(pessoa);
        const resultado2 = await collection.find({idade: 19});

       // console.log(`Inserido: ${resultado.insertedId}`);
        console.log(resultado2);

    } catch(e) {
        console.log(e);
    } finally {
        await client.close();
    }
}

main();