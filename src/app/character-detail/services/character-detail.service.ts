import { from, Observable } from 'rxjs';

import { CharacterResponseModel } from 'src/app/character-list/models/character-response.model';
import { CharacterRestService } from 'src/app/commons/rest-services/character.rest.service';

export class CharacterDetailService {

    constructor(private characterRestService: CharacterRestService) {

    }

    getCharacter(id: number): Observable<CharacterResponseModel> {
        return from(this.characterRestService.getById(id));
    }

}
