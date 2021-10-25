import { connect, disconnect } from 'mongoose';
import * as AutorRepositorio from './persistencia/autorRepositorio';
import * as LivroRepositorio from './persistencia/livroRepositorio';
import * as EmprestimoRepositorio from './persistencia/emprestimoRepositorio'

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

        
        console.log('Alterando autores...');
        let autores = await AutorRepositorio.alterarRegistro("616b0ed607c4eed792b7e580", undefined, 'buribubu');
        console.log(autores);
        

        /*
        console.log('Adicionando livros...');
        let autores = await AutorRepositorio.buscarPorPrimeiroNome("Mary");
        let l1 = await LivroRepositorio.criar({titulo: 'segundo teste', autores: autores, isbn: '112'});
        console.log(l1);
        */
        
        /*
        console.log("Buscando livros");
        let livros = await LivroRepositorio.buscar();
        livros.forEach(livro => console.log(livro));
        */
        
        /*
        console.log('Filtrando livro por AutorId');
        let livros = await LivroRepositorio.buscarPorAutorId("616b0ed607c4eed792b7e580");
        livros.forEach(livro => console.log(livro));
       */

        /*
        let livros = await LivroRepositorio.buscar();
        const emprestimo = await EmprestimoRepositorio.criar({
            livro: livros[0],
            dataEntrega: new Date(2021, 10, 18),
            dataRetirada: new Date(2021, 10, 25),
        });
        */
        
    } catch (error) {
        console.log(`Erro: ${error}`);
    } finally {
        await disconnect();
        console.log('Desconectado do MongoDb Atlas');
    }
}

main();



