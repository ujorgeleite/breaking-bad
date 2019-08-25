import { PageButtonModel } from '../models/page-buttons.model';

export class PageParamsModel {
    constructor(public maxPerPage: number,
                public currentPage: number,
                public maxPageId: number,
                public pageButtons: PageButtonModel[]) {

    }
}
