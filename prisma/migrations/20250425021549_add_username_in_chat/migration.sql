/*
  Warnings:

  - Added the required column `username` to the `GroupChat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `PrivateChat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GroupChat" ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PrivateChat" ADD COLUMN     "username" TEXT NOT NULL;
