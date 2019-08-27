import { CharacterModel } from 'src/app/character-list/models/character.model';
import { CharacterResponseModel } from 'src/app/character-list/models/character-response.model';


export class CharacterMapper {

    public static mapToCharacterModel(characterResponse: CharacterResponseModel): CharacterModel {
        return new CharacterModel(characterResponse.char_id,
            characterResponse.name,
            characterResponse.occupation,
            characterResponse.img,
            characterResponse.nickname,
            characterResponse.status);
    }
}
