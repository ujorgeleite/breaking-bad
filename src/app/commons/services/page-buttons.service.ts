import { Injectable, ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core';
import { PageButtonModel } from '../models/page-buttons.model';

@Injectable()
export class PageButtonsService {
    private pageButtons: PageButtonModel[];
    constructor() {
        this.pageButtons = [];
    }

    pushPageButton(pageId: number, charactersPerPage: number) {
        if (pageId !== 1 && (pageId % charactersPerPage) !== 0) { return; }
        const pageNumber = this.pageButtons.length + 1;
        this.pageButtons.push(new PageButtonModel(pageNumber, pageId));
    }

    getPageButtonList(): PageButtonModel[] {
        return this.pageButtons;
    }
}
