export class Borrowing {
    constructor(
        public borrower: string,
        public numberOfBooks: number,
        public dueDate: Date,
        public returnTime?: Date
    ) {}
}