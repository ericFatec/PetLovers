export interface Endereco {
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    codigoPostal: string;
    informacoesAdicionais: string;
}

export interface Telefone {
    numero: string;
    ddd: string;
}

export interface Cliente {
    nome: string;
    nomeSocial: string;
    email: string | null;
    endereco: Endereco;
    telefones: Telefone[];
}