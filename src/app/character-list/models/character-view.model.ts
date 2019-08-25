import { CharacterModel } from './character.model';
import { PageButtonModel } from 'src/app/commons/models/page-buttons.model';

export class CharacterViewModel {

    constructor(public currentPage: number = 1,
                public maxPageId: number = 0,
                public pageButtons: PageButtonModel [] = [],
                public characters: CharacterModel [] = []) {}

}
