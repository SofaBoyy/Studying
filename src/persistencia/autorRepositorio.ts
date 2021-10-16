import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";

export async function criar(autor: Autor): Promise<Autor> {
    return AutorModel.create(autor); //retorna uma Promise
}

export async function buscar(): Promise<Autor[]> {
    let consulta = AutorModel.find();
    return consulta.exec(); //retorna uma Promise
}

export async function buscarPorUltimoNome(lastName: string): Promise<Autor[]> {
    let consulta = await AutorModel.find({ultimo_nome: lastName}).exec();
    return consulta;
}

export async function buscarPorPrimeiroNome(firstName:string): Promise<Autor[]> {
    let consulta = await AutorModel.find({primeiro_nome: firstName}).exec();
    return consulta;
}

export async function alterarRegistro(_id: string, firstName?: string, lastName?: string) {
    if(firstName != undefined && lastName != undefined) {
        let consulta = await AutorModel.findById(_id).updateOne({primeiro_nome: firstName, ultimo_nome: lastName}).exec();
        console.log("Primeiro e último nome alterado com sucesso!");
    }else if(firstName != undefined) {
        let consulta = await AutorModel.findById(_id).updateOne({primeiro_nome: firstName}).exec();
        console.log("Primeiro nome alterado com sucesso!")
    }else if(lastName != undefined) {
        let consulta = await AutorModel.findById(_id).updateOne({ultimo_nome: lastName}).exec();
        console.log("Ultimo nome alterado com sucesso!")
    }

    return await AutorModel.findById(_id).exec();
}

