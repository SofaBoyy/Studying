import { EmprestimoModel } from "./emprestimoModel";
import { Emprestimo } from "../entidades/emprestimo";

export async function criar(emprestimo: Emprestimo): Promise<Emprestimo>{
    return await EmprestimoModel.create(emprestimo);
}

export async function buscarPorIsbn(isbn: string): Promise<Emprestimo[]> {
    return EmprestimoModel.where('livro.isbn').equals(isbn).exec();
}