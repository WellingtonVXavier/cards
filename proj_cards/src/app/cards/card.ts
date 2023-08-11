export class Card{
    static nextID = 0;
    id: number = 1;
    title: string;
    file?: null;
    fileName: string;
    fileUrl: string;

    constructor() {
        this.id = Card.nextID++,
        this.title = '',
        this.file = null,
        this.fileName = '',
        this.fileUrl = ''
    }
}