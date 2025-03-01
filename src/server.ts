import express from 'express';
import authorRoutes from './routes/authorRoutes';
import bookRoutes from './routes/bookRoutes';
import memberRoutes from './routes/memberRoutes';
import borrowingRoutes from './routes/borrowingRoutes';

const app = express();
app.use(express.json());

app.use('/authors', authorRoutes);
//http://localhost:3000/authors
app.use('/books', bookRoutes);
//http://localhost:3000/books
app.use('/members', memberRoutes);
//http://localhost:3000/members
app.use('/borrowings', borrowingRoutes);
//http://localhost:3000/borrowings

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});