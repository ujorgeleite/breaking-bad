export class PageParamsModel {
    constructor(public maxPerPage: number,
                public currentPage: number,
                public maxPages: number,
                public previousPage: number = 0,
                public nextPage: number = 0) {

    }}
