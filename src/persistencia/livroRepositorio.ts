import { Livro } from "../entidades/livro";
import { LivroModel } from "../persistencia/livroModel"
import { AutorModel } from "./autorModel";

export async function criar(livro: Livro) {
    return LivroModel.create(livro);
}

export async function buscar(): Promise<Livro[]> {
    let consulta = LivroModel.find().populate('autores', {model: AutorModel});
    return consulta.exec();     
}

export async function buscarPorAutorId(_id: string) {
    let consulta = await LivroModel.where('autores._id').equals(_id).exec();
    console.log(consulta);
    return consulta;
}

export async function buscarPorIsbn(isbn: string): Promise<Livro | null> {
    let consulta = LivroModel.findOne({isbn: isbn}).populate('autores', {model: AutorModel});
    return consulta.exec();
}