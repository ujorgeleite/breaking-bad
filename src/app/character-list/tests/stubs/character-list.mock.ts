import { CharacterModel } from '../../models/character.model';
import { Observable, of } from 'rxjs';
import { CharacterViewModel } from '../../models/character-view.model';
import { CharacterResponseModel } from '../../models/character-response.model';

export class CharacterListMock {


    public static getAllCharacterList(startSlice: number = 0, endSlice: number = 25): CharacterModel[] {
        const characters: CharacterModel[] = [];
        characters.push(new CharacterModel(1, 'Walter White', [], 'https://images.amcnetworks.com/cast_bb_700x1000_walter-white-lg.jpg', 'Heisenberg'));
        characters.push(new CharacterModel(2, 'Jesse Pinkman', [], 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg', 'Cap nCook'));
        characters.push(new CharacterModel(3, 'Skyler White', [], 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg', 'Sky'));
        characters.push(new CharacterModel(4, 'Walter White Jr.', [], 'https://media1.popsugar-assets.com/files/thumbor/W…f3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg', 'Flynn'));
        characters.push(new CharacterModel(5, 'Henry Schrader', [], 'https://upload.wikimedia.org/220px-Hank_Schrader2.jpg', 'Hank'));
        characters.push(new CharacterModel(6, 'Marie Schrader', [], 'https://vignette.wikia.nocookie.net/latest?cb=20120617211645', 'Marie'));
        characters.push(new CharacterModel(7, 'Mike Ehrmantraut', [], 'https://images.amcnetworks.com/amc.com/wp-content/700x1000_mike-ehrmantraut-lg.jpg', 'Mike'));
        characters.push(new CharacterModel(8, 'Saul Goodman', [], 'https://vignette.wikia.nocookie.net/breakingbad/im…aul_Goodman.jpg/revision/latest?cb=20120704065846', 'Jimmy McGill'));

        characters.push(new CharacterModel(9, 'Gustavo Fring', [], 'https://images.amcnetworks.com/cast_bb_700x1000_walter-white-lg.jpg', 'Gus'));
        characters.push(new CharacterModel(10, 'Hector Salamanca', [], 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg', 'Don Hector'));
        characters.push(new CharacterModel(11, 'Domingo Molina', [], 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg', 'Krazy-8'));
        characters.push(new CharacterModel(12, 'Tuco Salamanca', [], 'https://media1.popsugar-assets.com/files/thumbor/W…f3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg', 'Tuco'));
        characters.push(new CharacterModel(13, 'Marco & Leonel Salamanca', [], 'https://upload.wikimedia.org/220px-Hank_Schrader2.jpg', 'The Cousins'));
        characters.push(new CharacterModel(14, 'Lydia Rodarte-Quayle', [], 'https://vignette.wikia.nocookie.net/latest?cb=20120617211645', 'Lydia'));
        characters.push(new CharacterModel(15, 'Todd Alquist', [], 'https://images.amcnetworks.com/amc.com/wp-content/700x1000_mike-ehrmantraut-lg.jpg', 'Ricky Hitler'));
        characters.push(new CharacterModel(16, 'Jane Margolis', [], 'https://vignette.wikia.nocookie.net/breakingbad/im…aul_Goodman.jpg/revision/latest?cb=20120704065846', 'Apology Girl'));


        characters.push(new CharacterModel(17, 'Skinny Pete', [], 'https://images.amcnetworks.com/cast_bb_700x1000_walter-white-lg.jpg', 'Skinny'));
        characters.push(new CharacterModel(18, 'Brandon Mayhew', [], 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg', 'Badger'));
        characters.push(new CharacterModel(19, 'Huell Babineaux', [], 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg', 'Gomie'));
        characters.push(new CharacterModel(20, 'Steven Gomez', [], 'https://media1.popsugar-assets.com/files/thumbor/W…f3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg', 'Ted'));
        characters.push(new CharacterModel(21, 'Theodore Beneke', [], 'https://upload.wikimedia.org/220px-Hank_Schrader2.jpg', 'GB'));
        characters.push(new CharacterModel(22, 'Gale Boetticher', [], 'https://vignette.wikia.nocookie.net/latest?cb=20120617211645', 'Andrea'));
        characters.push(new CharacterModel(23, 'Andrea Cantillo', [], 'https://images.amcnetworks.com/amc.com/wp-content/700x1000_mike-ehrmantraut-lg.jpg', 'Brock'));
        characters.push(new CharacterModel(24, 'Brock Cantillo', [], 'https://vignette.wikia.nocookie.net/breakingbad/im…aul_Goodman.jpg/revision/latest?cb=20120704065846', 'last'));

        return characters.slice(startSlice, endSlice);
    }

    public static getAllCharacterResponseList(startSlice: number = 0, endSlice: number = 25): CharacterResponseModel[] {
        const characters: CharacterResponseModel[] = [];
        characters.push(new CharacterResponseModel(1, 'Walter White', 'birthday', [], 'https://images.amcnetworks.com/cast_bb_700x1000_walter-white-lg.jpg', 'Presumed dead', 'Heisenberg'));
        characters.push(new CharacterResponseModel(2, 'Jesse Pinkman', 'birthday', [], 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg', 'Presumed dead', 'Cap nCook'));
        characters.push(new CharacterResponseModel(3, 'Skyler White', 'birthday', [], 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg', 'Presumed dead', 'Sky'));
        characters.push(new CharacterResponseModel(4, 'Walter White Jr.', 'birthday', [], 'https://media1.popsugar-assets.com/files/thumbor/W…f3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg', 'Presumed dead', 'Flynn'));
        characters.push(new CharacterResponseModel(5, 'Henry Schrader', 'birthday', [], 'https://upload.wikimedia.org/220px-Hank_Schrader2.jpg', 'Presumed dead', 'Hank'));
        characters.push(new CharacterResponseModel(6, 'Marie Schrader', 'birthday', [], 'https://vignette.wikia.nocookie.net/latest?cb=20120617211645', 'Presumed dead', 'Marie'));
        characters.push(new CharacterResponseModel(7, 'Mike Ehrmantraut', 'birthday', [], 'https://images.amcnetworks.com/amc.com/wp-content/700x1000_mike-ehrmantraut-lg.jpg', 'Presumed dead', 'Mike'));
        characters.push(new CharacterResponseModel(8, 'Saul Goodman', 'birthday', [], 'https://vignette.wikia.nocookie.net/breakingbad/im…aul_Goodman.jpg/revision/latest?cb=20120704065846', 'Presumed dead', 'Jimmy McGill'));

        characters.push(new CharacterResponseModel(9, 'Gustavo Fring', 'birthday', [], 'https://images.amcnetworks.com/cast_bb_700x1000_walter-white-lg.jpg', 'Presumed dead', 'Gus'));
        characters.push(new CharacterResponseModel(10, 'Hector Salamanca', 'birthday', [], 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg', 'Presumed dead', 'Don Hector'));
        characters.push(new CharacterResponseModel(11, 'Domingo Molina', 'birthday', [], 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg', 'Presumed dead', 'Krazy-8'));
        characters.push(new CharacterResponseModel(12, 'Tuco Salamanca', 'birthday', [], 'https://media1.popsugar-assets.com/files/thumbor/W…f3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg', 'Presumed dead', 'Tuco'));
        characters.push(new CharacterResponseModel(13, 'Marco & Leonel Salamanca', 'birthday', [], 'https://upload.wikimedia.org/220px-Hank_Schrader2.jpg', 'Presumed dead', 'The Cousins'));
        characters.push(new CharacterResponseModel(14, 'Lydia Rodarte-Quayle', 'birthday', [], 'https://vignette.wikia.nocookie.net/latest?cb=20120617211645', 'Presumed dead', 'Lydia'));
        characters.push(new CharacterResponseModel(15, 'Todd Alquist', 'birthday', [], 'https://images.amcnetworks.com/amc.com/wp-content/700x1000_mike-ehrmantraut-lg.jpg', 'Presumed dead', 'Ricky Hitler'));
        characters.push(new CharacterResponseModel(16, 'Jane Margolis', 'birthday', [], 'https://vignette.wikia.nocookie.net/breakingbad/im…aul_Goodman.jpg/revision/latest?cb=20120704065846', 'Presumed dead', 'Apology Girl'));


        characters.push(new CharacterResponseModel(17, 'Skinny Pete', 'birthday', [], 'https://images.amcnetworks.com/cast_bb_700x1000_walter-white-lg.jpg', 'Presumed dead', 'Skinny'));
        characters.push(new CharacterResponseModel(18, 'Brandon Mayhew', 'birthday', [], 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Jesse_Pinkman2.jpg/220px-Jesse_Pinkman2.jpg', 'Presumed dead', 'Badger'));
        characters.push(new CharacterResponseModel(19, 'Huell Babineaux', 'birthday', [], 'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg', 'Presumed dead', 'Gomie'));
        characters.push(new CharacterResponseModel(20, 'Steven Gomez', 'birthday', [], 'https://media1.popsugar-assets.com/files/thumbor/W…f3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg', 'Presumed dead', 'Ted'));
        characters.push(new CharacterResponseModel(21, 'Theodore Beneke', 'birthday', [], 'https://upload.wikimedia.org/220px-Hank_Schrader2.jpg', 'Presumed dead', 'GB'));
        characters.push(new CharacterResponseModel(22, 'Gale Boetticher', 'birthday', [], 'https://vignette.wikia.nocookie.net/latest?cb=20120617211645', 'Presumed dead', 'Andrea'));
        characters.push(new CharacterResponseModel(23, 'Andrea Cantillo', 'birthday', [], 'https://images.amcnetworks.com/amc.com/wp-content/700x1000_mike-ehrmantraut-lg.jpg', 'Presumed dead', 'Brock'));
        characters.push(new CharacterResponseModel(24, 'Brock Cantillo', 'birthday', [], 'https://vignette.wikia.nocookie.net/breakingbad/im…aul_Goodman.jpg/revision/latest?cb=20120704065846', 'Presumed dead', 'last'));

        return characters.slice(startSlice, endSlice);
    }

    public static getCharacterViewModel(): Observable<CharacterViewModel> {

        const characterViewModel: CharacterViewModel = new CharacterViewModel();
        characterViewModel.maxPages = 1;
        characterViewModel.characters = CharacterListMock.getAllCharacterList();
        characterViewModel.currentPage = 1;
        characterViewModel.nextPage = 1;
        characterViewModel.previousPage = 1;

        return of(characterViewModel);
    }

}

