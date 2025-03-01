/*
  Warnings:

  - You are about to drop the column `affiliation` on the `Author` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Book_isbn_key` ON `Book`;

-- DropIndex
DROP INDEX `Member_memberId_key` ON `Member`;

-- AlterTable
ALTER TABLE `Author` DROP COLUMN `affiliation`;
