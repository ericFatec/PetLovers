import Pet from "../modelo/pet";

export default class PegarPet {
    private pets: Array<Pet>;

    constructor(pets: Array<Pet>) {
        this.pets = pets;
    }

    public selecionar(nome: string): Pet | null {
        const petAlvo = this.pets.find(pet => nome === pet.getNome);
        return petAlvo || null;
    }
}
