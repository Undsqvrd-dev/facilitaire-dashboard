/*
  Warnings:

  - Added the required column `expiresAt` to the `VerificationCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VerificationCode" ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL;
