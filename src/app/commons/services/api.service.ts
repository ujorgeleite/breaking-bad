import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponseModel } from 'src/app/character-list/models/character-response.model';


export class ApiService {
    baseUrl;

    constructor(private httpClient: HttpClient) {
        this.baseUrl = 'https://www.breakingbadapi.com/api/';
    }

    get(paramUrl: string): Observable<CharacterResponseModel[]> {
        return this.httpClient.get<CharacterResponseModel[]>(`${this.baseUrl}${paramUrl}`);
    }

}
