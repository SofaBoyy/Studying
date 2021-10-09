/*
Ex. 1

class circulo {

    private _x: number;
    private _y: number;
    private _raio: number;

    constructor(x: number, y: number, raio: number){

        this._x = x;
        this._y = y;
        this._raio = raio;  
    }

    get x(): number{return this._x};
    get y(): number{return this._y};
    get raio(): number{return this._raio};

    area () {return Math.PI*this._raio**2};
    comp () {return 2*Math.PI*this._raio};
}

let teste = new circulo(12, 3, 14);

console.log(teste.area());
console.log(teste.comp());
*/

class Moeda {

    private valor: number;
    private nome: string;

    constructor(value: number, name: string = 'centavos') {
        
        this.valor = value;
        this.nome = name;
    }

    get Valor(): number {return this.valor};
    get Nome(): string {return this.nome};
}

class Cofrinho {

    cofre: Array <Moeda> = [];

    constructor(){}

    adicionar (m: Moeda): void {

        this.cofre.push(m);
    }

    calcularTotal (): number {

        let total = 0;

        if(this.cofre.length == 0){
            return total;
        }

        for(let i = 0; i < this.cofre.length; i++){
            
            total += this.cofre[i].Valor;
        }

        return total;
    }

    menorMoedaValor (): number | string {

        let total: number = 100;

        if(this.cofre.length == 0){
            return 'Não tem moedas no cofre!';
        }

        for(let i of this.cofre){
            if(i.Valor < total){
                total = i.Valor;            }
        }

        return total;
    }

    menorMoeda (): Moeda | string{

        let menor = new Moeda(100);

        if(this.cofre.length == 0){
            return 'Não tem moedas no cofre!';
        }

        for(let i of this.cofre){
            if(i.Valor < menor.Valor){
                menor = i;
            }
        }

        return menor;
    }

    freqMoedas (): Map <string, string> {

        let k: Map <string, string> = new Map();
        
        let sorted = this.cofre;
        
        sorted = sorted.sort(function (a, b) {
            
            return (a.Valor > b.Valor ? 1 : (a.Valor < b.Valor ? -1 : 0));
          });
        
        let frequency: number = 0;

        let current: Moeda = sorted[0];

        console.log(current);

        for(let i = 0; i <= sorted.length; i++){

            if(i == sorted.length){

                k.set(`${current.Valor} ${current.Nome}`, `${frequency}`);

                continue;
            }

            if(sorted[i].Valor != current.Valor){
                
                k.set(`${current.Valor} ${current.Nome}`, `${frequency}`);

                frequency = 0;
                
                current = sorted[i];
            }

            frequency ++;

        }
        
        
        return k;
    }
}
// 1 centavo, 5 centavos, 10 centavos, 25 centavos, 50 centavos, 1 real
let cofrinho = new Cofrinho();
let oneCent = new Moeda(1);
let fiveCent = new Moeda(5);
let tenCent = new Moeda(10);
let twentyFiveCent = new Moeda(25);
let fiftyCent = new Moeda(50);
let oneReal = new Moeda(1, 'real');

cofrinho.adicionar(fiveCent);
cofrinho.adicionar(tenCent);
cofrinho.adicionar(tenCent);
cofrinho.adicionar(tenCent);
cofrinho.adicionar(fiveCent);
cofrinho.adicionar(oneReal);
cofrinho.adicionar(fiveCent);
cofrinho.adicionar(fiftyCent);
cofrinho.adicionar(twentyFiveCent);
cofrinho.adicionar(fiftyCent);
cofrinho.adicionar(fiftyCent);
cofrinho.adicionar(twentyFiveCent);
cofrinho.adicionar(fiftyCent);
cofrinho.adicionar(oneReal);

console.log(cofrinho.freqMoedas());


