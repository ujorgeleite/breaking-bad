import { browser, by, element } from 'protractor';

export class CharacterListPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    navigateToPage(pageNumber: number) {
        return element(by.id(`page${pageNumber}`)).click();
    }

    getLoader(): Promise<boolean> {
        return element(by.id('loading')).isDisplayed() as Promise<boolean>;
    }

    getCharacterName(id: number): Promise<string> {
        return element(by.id(`character_name_${id}`)).getText() as Promise<string>;
    }

    getCharacterNickName(id: number): Promise<string> {
        return element(by.id(`character_nick_name_${id}`)).getText() as Promise<string>;
    }

    getCharacterImage(id: number): Promise<string> {
        return element(by.id(`character_image_${id}`)).getAttribute('src') as Promise<string>;
    }

    getBackground(): Promise<boolean> {
        return element(by.id('backround_image')).isDisplayed() as Promise<boolean>;
    }

    getPagination(): Promise<boolean> {
        return element(by.id('pagination')).isDisplayed() as Promise<boolean>;
    }

    getNotificationContent(): Promise<boolean> {
        return element(by.id('notification_content')).isPresent() as Promise<boolean>;
    }
}
