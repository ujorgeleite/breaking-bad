import { CharacterModel } from 'src/app/character-list/models/character.model';
import { CharacterViewModel } from 'src/app/character-list/models/character-view.model';
import { AstMemoryEfficientTransformer } from '@angular/compiler';



export class MapCharacterCharacterViewModel {

     public static mapToCharacterViewModel({maxPerPage, currentPage, maxPageId, pageButtons }, characters: CharacterModel[]) {
        return new CharacterViewModel(currentPage, maxPageId, pageButtons, characters.slice(0, maxPerPage));
    }
}
