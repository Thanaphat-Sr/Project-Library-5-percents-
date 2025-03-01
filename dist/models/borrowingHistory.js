"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrowing = void 0;
class Borrowing {
    constructor(borrower, numberOfBooks, dueDate, returnTime) {
        this.borrower = borrower;
        this.numberOfBooks = numberOfBooks;
        this.dueDate = dueDate;
        this.returnTime = returnTime;
    }
}
exports.Borrowing = Borrowing;
