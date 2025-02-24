import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed authors
    const author1 = await prisma.author.create({
        data: {
            firstName: 'Yukinobu',
            lastName: 'Tatsu',
            affiliation: 'Shueisha',
        },
    });

    const author2 = await prisma.author.create({
        data: {
            firstName: 'Robert',
            lastName: 'Kiyosaki',
            affiliation: 'Plata Publishing',
        },
    });

    const author3 = await prisma.author.create({
        data: {
            firstName: 'Adolf',
            lastName: 'Hitler',
            affiliation: 'German Publishing',
        },
    });

    const author4 = await prisma.author.create({
        data: {
            firstName: 'Andrzej',
            lastName: 'Sapkowski',
            affiliation: 'the Polish Writers Association',
        },
    });

    const author5 = await prisma.author.create({
        data: {
            firstName: 'Muneyuki',
            lastName: 'Kaneshiro',
            affiliation: 'Kodansha',
        },
    });

    const author6 = await prisma.author.create({
        data: {
            firstName: 'George',
            lastName: 'Orwell',
            affiliation: 'Secker & Warburg',
        },
    });

    const author7 = await prisma.author.create({
        data: {
            firstName: 'J.K.',
            lastName: 'Rowling',
            affiliation: 'Bloomsbury',
        },
    });

    const author8 = await prisma.author.create({
        data: {
            firstName: 'J.R.R.',
            lastName: 'Tolkien',
            affiliation: 'Allen & Unwin',
        },
    });

    // Seed books
    await prisma.book.createMany({
        data: [
            {
                title: 'Chainsaw Man',
                isbn: '9781974709939',
                category: 'Manga',
                authorId: author1.id,
            },
            {
                title: 'Dandadan',
                isbn: '9786165891523',
                category: 'Manga',
                authorId: author1.id,
            },
            {
                title: 'Rich Dad Poor Dad',
                isbn: '9780446677455',
                category: 'Investing',
                authorId: author2.id,
            },
            {
                title: 'Hitler Letters and Notes',
                isbn: '9780553064933',
                category: 'History',
                authorId: author3.id,
            },
            {
                title: 'The Witcher',
                isbn: '9786161840754',
                category: 'Novel',
                authorId: author4.id,
            },
            {
                title: '1984',
                isbn: '9780451524935',
                category: 'Dystopian',
                authorId: author6.id,
            },
            {
                title: 'Harry Potter and the Philosopher\'s Stone',
                isbn: '9780747532699',
                category: 'Fantasy',
                authorId: author7.id,
            },
        ],
    });

    // Seed members
    const member1 = await prisma.member.create({
        data: {
            memberId: 'M001',
            firstName: 'Ibrahima',
            lastName: 'Konaté',
            phoneNumber: '087-275-9658',
        },
    });

    const member2 = await prisma.member.create({
        data: {
            memberId: 'M002',
            firstName: 'Dominic',
            lastName: 'Solanke',
            phoneNumber: '098-765-4321',
        },
    });

    const member3 = await prisma.member.create({
        data: {
            memberId: 'M003',
            firstName: 'Warren',
            lastName: 'Buffett',
            phoneNumber: '091-784-5971',
        },
    });

    const member4 = await prisma.member.create({
        data: {
            memberId: 'M004',
            firstName: 'Timothée',
            lastName: 'Chalamet',
            phoneNumber: '053-482-6682',
        },
    });

    const member5 = await prisma.member.create({
        data: {
            memberId: 'M005',
            firstName: 'John',
            lastName: 'Cena',
            phoneNumber: '062-885-9295',
        },
    });

    const member6 = await prisma.member.create({
        data: {
            memberId: 'M006',
            firstName: 'Emma',
            lastName: 'Watson',
            phoneNumber: '081-234-5678',
        },
    });

    const member7 = await prisma.member.create({
        data: {
            memberId: 'M007',
            firstName: 'Chris',
            lastName: 'Evans',
            phoneNumber: '082-345-6789',
        },
    });

    const member8 = await prisma.member.create({
        data: {
            memberId: 'M008',
            firstName: 'Scarlett',
            lastName: 'Johansson',
            phoneNumber: '083-456-7890',
        },
    });

    // Seed borrowing
    await prisma.borrowing.createMany({
        data: [
            {
                memberId: member1.id,
                bookId: 1,
                borrowedAt: new Date('2023-11-01'),
                dueDate: new Date('2023-12-01'),
                returnedAt: null,
            },
            {
                memberId: member2.id,
                bookId: 2,
                borrowedAt: new Date('2023-10-15'),
                dueDate: new Date('2023-11-15'),
                returnedAt: new Date('2023-11-10'),
            },
            {
                memberId: member3.id,
                bookId: 3,
                borrowedAt: new Date('2023-09-01'),
                dueDate: new Date('2023-10-01'),
                returnedAt: null,
            },
            {
                memberId: member4.id,
                bookId: 4,
                borrowedAt: new Date('2023-08-01'),
                dueDate: new Date('2023-09-01'),
                returnedAt: new Date('2023-08-30'),
            },
            {
                memberId: member5.id,
                bookId: 5,
                borrowedAt: new Date('2023-07-01'),
                dueDate: new Date('2023-08-01'),
                returnedAt: null,
            },
            {
                memberId: member6.id,
                bookId: 6,
                borrowedAt: new Date('2023-06-01'),
                dueDate: new Date('2023-07-01'),
                returnedAt: new Date('2023-06-30'),
            },
        ],
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });