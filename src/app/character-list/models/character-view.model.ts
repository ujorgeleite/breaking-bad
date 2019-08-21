import { CharacterModel } from './character.model';

export class CharacterViewModel {

    constructor(public previousPage: number = 0,
                public currentPage: number = 0,
                public nextPage: number = 0,
                public maxPages: number = 0,
                public characters: CharacterModel [] = []) {}

}
