import { clothes } from "../assets/data/filter";

export function getClothes() {
    const clothesList = clothes;
    return clothesList;
}

export function filterCloth(currentFit) {
    // let filtredPokemon = getPokemon().filter(type => type.tipo === pokeType);
    let filteredCloth = clothes.filter(cloth => cloth.fit === currentFit);
    return filteredCloth;
}
