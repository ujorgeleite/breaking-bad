import { CharacterModel } from 'src/app/character-list/models/character.model';
import { CharacterViewModel } from 'src/app/character-list/models/character-view.model';
import { AstMemoryEfficientTransformer } from '@angular/compiler';



export class MapCharacterCharacterViewModel {

     public static mapToCharacterViewModel({maxPerPage , currentPage, maxPages, previousPage, nextPage }, characters: CharacterModel[]) {
        return new CharacterViewModel(previousPage, currentPage, nextPage, maxPages, characters.slice(0, maxPerPage));
    }
}
