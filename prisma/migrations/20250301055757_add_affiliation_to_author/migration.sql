/*
  Warnings:

  - Added the required column `affiliation` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Author` ADD COLUMN `affiliation` VARCHAR(191) NOT NULL;
