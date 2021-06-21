export class HeroiModel {

    id: string;
    nome: string;
    poder: string;
    vivo: boolean;

    constructor() {
        this.vivo = true;
        this.id = '';
        this.nome = '';
        this.poder = '';
    }
}