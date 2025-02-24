/*
  Warnings:

  - You are about to drop the column `borrowDate` on the `Borrowing` table. All the data in the column will be lost.
  - You are about to drop the column `returnDate` on the `Borrowing` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[isbn]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[memberId]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `borrowedAt` to the `Borrowing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Borrowing` DROP COLUMN `borrowDate`,
    DROP COLUMN `returnDate`,
    ADD COLUMN `borrowedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `returnedAt` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Book_isbn_key` ON `Book`(`isbn`);

-- CreateIndex
CREATE UNIQUE INDEX `Member_memberId_key` ON `Member`(`memberId`);
