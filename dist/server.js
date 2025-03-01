"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authorRoutes_1 = __importDefault(require("./routes/authorRoutes"));
const bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
const memberRoutes_1 = __importDefault(require("./routes/memberRoutes"));
const borrowingRoutes_1 = __importDefault(require("./routes/borrowingRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/authors', authorRoutes_1.default);
//http://localhost:3000/authors
app.use('/books', bookRoutes_1.default);
//http://localhost:3000/books
app.use('/members', memberRoutes_1.default);
//http://localhost:3000/members
app.use('/borrowings', borrowingRoutes_1.default);
//http://localhost:3000/borrowings
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
