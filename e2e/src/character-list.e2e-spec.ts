import { CharacterListPage } from './helpers/character-list.po';

describe('workspace-project Character List', () => {
    let page: CharacterListPage;

    beforeAll(() => {
        page = new CharacterListPage();
    });
    describe('Given that the character list page is called', () => {
        beforeAll(() => {
            page.navigateTo();
        });

        /*it('Then the loader for character list page is show', () => {
            expect(page.getLoader()).toBe(true);
        });

        it('then the background image for character list page is show', () => {
            expect(page.getBackground()).toBe(true);
        });*/

        it('then the pagination nav is displayed', () => {
            expect(page.getPagination()).toBe(true);
        });

        describe('and given that the user navigate to page 2 ', () => {
            beforeAll(() => {
                page.navigateToPage(2);
            });

            it('then the list should have the character with name Hector Salamanca', () => {
                expect(page.getCharacterName(10)).toEqual('Hector Salamanca');
            });

            it('then the list should have the character with image for Walter White Jr', () => {
                expect(page.getCharacterImage(10)).toContain('Hector_BCS.jpg/revision/latest?cb=20170810091606');
            });

            it('then the list should have the character with nickname Don Hector', () => {
                expect(page.getCharacterNickName(10)).toEqual('Don Hector');
            });

            it('then the notification modal isn\'t displayed', () => {
                expect(page.getNotificationContent()).toBe(false);
            });

        });

        describe('and given that the user navigate to page 10 ', () => {
            beforeAll(() => {
                page.navigateToPage(10);
            });

            it('then the list should have the character with name Jack Welker ', () => {
                expect(page.getCharacterName(57)).toEqual('Jack Welker');
            });

            it('then the list should have the character with image for Jack Welker ', () => {
                expect(page.getCharacterImage(57)).toContain('breakingbad/images/c/ce/Jack5x13.png/revision/latest?cb=20130912225922');
            });

            it('then the list should have the character with nickname Uncle Jack', () => {
                expect(page.getCharacterNickName(57)).toEqual('Uncle Jack');
            });

            it('then the notification modal isn\'t displayed', () => {
                expect(page.getNotificationContent()).toBe(false);
            });
        });
    });

});
