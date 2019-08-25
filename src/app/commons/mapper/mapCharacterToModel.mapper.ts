import { CharacterModel } from 'src/app/character-list/models/character.model';
import { CharacterResponseModel } from 'src/app/character-list/models/character-response.model';


export class CharacterMapper {

    public static mapToCharacterModel(charactersResponse: CharacterResponseModel[]): CharacterModel[] {
        return charactersResponse.map(characterResponse => {
            return new CharacterModel(characterResponse.char_id,
                                        characterResponse.name,
                                        characterResponse.occupation,
                                        characterResponse.img,
                                        characterResponse.nickname); });
    }
}
