import { Observable } from 'rxjs';

import { ApiService } from '../services/api.service';
import { CharacterResponseModel } from 'src/app/character-list/models/character-response.model';
export class CharacterRestService {

    constructor(private apiService: ApiService) {

    }

    getWithPagination(characterPerPage: number, initialCharacterId: number): Observable<CharacterResponseModel[]> {
        return this.apiService.get(`characters?limit=${characterPerPage}&offset=${initialCharacterId}`);
    }

    get(): Observable<CharacterResponseModel[]> {
        return this.apiService.get('characters');
    }

    getById(id: number): Observable<CharacterResponseModel> {
        return this.apiService.getById(`characters/${id}`);
    }


}
