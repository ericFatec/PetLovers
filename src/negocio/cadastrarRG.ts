import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import RG from "../modelo/rg"

export default function cadastrarRG(cliente: Cliente) {
    let entrada = new Entrada()

    let valorRG = entrada.receberTexto(`Insira o seu número de RG: `)
    let dataRG = entrada.receberTexto(`Insira a data de emissão do RG. (Ex:) 09/09/2020: `);

    let partesDataRG = dataRG.split('/')
    let anoRG = new Number(partesDataRG[2].valueOf()).valueOf()
    let mesRG = new Number(partesDataRG[1].valueOf()).valueOf()
    let diaRG = new Number(partesDataRG[0].valueOf()).valueOf()

    let dataEmissaoRG = new Date(anoRG, mesRG, diaRG)
    let rg = new RG(valorRG, dataEmissaoRG)
    cliente.adicionarRG(rg)
}