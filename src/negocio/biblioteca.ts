/*
import * as LivroRepositorio from '../persistencia/livroRepositorio';
import * as EmprestimoRepositorio from '../persistencia/emprestimoRepositorio';
import { Emprestimo } from '../entidades/emprestimo'

export async function emprestarLivro(isbn: string) {
    const livro = await LivroRepositorio.buscarPorIsbn(isbn);
    if(livro == null){
        throw new Error('livro não encontrado!');
    }
    const emprestimo: Emprestimo = {
        livro: livro;
    }
}
*/
