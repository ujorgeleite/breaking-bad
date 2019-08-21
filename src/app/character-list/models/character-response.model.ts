export class CharacterResponseModel {
    constructor(public char_id: number,
                public name?: string,
                public birthday?: string,
                public occupation?: [],
                public img?: string,
                public status?: string,
                public nickname?: string,
                public appearance?: string,
                public portrayed?: string) {}
}
