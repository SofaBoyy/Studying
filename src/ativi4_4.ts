abstract class Cliente {
    
    constructor(private _name: string) {};
    
    get name () {
        return this._name;
    }

    abstract getMensalidade (): number;
}

class ClienteFisico extends Cliente{

    constructor(name: string, private _idade: number, private _salario: number) {
        super(name);
    };

    get idade (): number {
        return this._idade;
    }

    set idade (umaIdade: number) {
     this._idade = umaIdade;
    }

    get salario (): number {
        return this._salario;
    }

    set salario (umSalario: number) {
        this._salario = umSalario;
    }

    getMensalidade (): number  {
        return (this._idade < 60 ? this._salario*0.1 : this._salario*0.15);
    }
}

class ClienteJuridico extends Cliente{

    constructor(name: string ,private _mensalidade: number) {
        super(name);
    }

    set mensalidade (umaMensalidade: number) {
        this._mensalidade = umaMensalidade;
    }

    getMensalidade (): number {
        return this._mensalidade;
    }
}

class CadastroClientes {

    private _lista: Array <ClienteFisico | ClienteJuridico> = [];
    
    constructor () {};

    get lista (): Array <ClienteFisico | ClienteJuridico> {
        return this._lista;
    }

    adicionarCliente (cliente: ClienteFisico | ClienteJuridico): void {

        this._lista.push(cliente);
    }

    listarCliente (): void {

        for (let client of this._lista) {

            console.log(`Nome: ${client.name} | Mensalidade: ${client.getMensalidade()}`);
        }
    }
}

let cli1 = new ClienteFisico ('Fábio', 23, 4000);
let cli2 = new ClienteJuridico ('Pedro', 1200);

let colecao = new CadastroClientes();

colecao.adicionarCliente(cli1);
colecao.adicionarCliente(cli2);

colecao.listarCliente();
