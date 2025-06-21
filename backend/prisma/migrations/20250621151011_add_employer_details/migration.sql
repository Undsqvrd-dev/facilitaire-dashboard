/*
  Warnings:

  - Added the required column `companyName` to the `Employer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `industry` to the `Employer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationType` to the `Employer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Employer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `privacyAccepted` to the `Employer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employer" ADD COLUMN     "companyName" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "industry" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "organizationType" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "position" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "privacyAccepted" BOOLEAN NOT NULL DEFAULT false;
