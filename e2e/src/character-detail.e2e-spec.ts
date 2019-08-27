import { CharacterDetailPage } from './helpers/character-detail.po';

describe('Given that is open character detail page withe the id param 9', () => {
    const page = new CharacterDetailPage();
    let imgUrl = 'https://vignette.wikia.nocookie.net/';
    imgUrl += 'breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846';

    beforeAll(() => {
        page.navigateTo();
    });

    it(`Then the image is populated with the url ${imgUrl}`, () => {
        expect(page.getCharacterImage()).toEqual(imgUrl);
    });
    it(`Then the name is populated with the name Saul Goodman`, () => {
        expect(page.getCharacterName()).toEqual('Saul Goodman');
    });

    it(`Then the nickname is populated with the nickname Jimmy McGill`, () => {
        expect(page.getCharacterNickName()).toEqual('Jimmy McGill');
    });

    it(`Then the status is populated with the status Alive`, () => {
        expect(page.getCharacterStatus()).toEqual('Alive');
    });


});
