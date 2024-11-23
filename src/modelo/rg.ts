export default class RG {
    private dataEmissao: Date
    private valor: string
    constructor(valor: string, dataEmissao: Date) {
        this.dataEmissao = dataEmissao
        this.valor = valor
    }
    public get getDataEmissao(): Date {
        return this.dataEmissao
    }
    public get getValor(): string {
        return this.valor
    }
}