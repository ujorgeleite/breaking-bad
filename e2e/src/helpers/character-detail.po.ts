import { browser, by, element } from 'protractor';

export class CharacterDetailPage {
    navigateTo() {
        return browser.get(`${browser.baseUrl}characterDetail/8`) as Promise<any>;
    }

    getCharacterName(): Promise<string> {
        return element(by.id(`character_name`)).getText() as Promise<string>;
    }

    getCharacterNickName(): Promise<string> {
        return element(by.id(`character_nick_name`)).getText() as Promise<string>;
    }

    getCharacterStatus(): Promise<string> {
        return element(by.id(`character_status`)).getText() as Promise<string>;
    }

    getCharacterImage(): Promise<string> {
        return element(by.id(`character_image`)).getAttribute('src') as Promise<string>;
    }

    getClickBackListButton() {
        return element(by.id('back_list')).click();
    }

}
