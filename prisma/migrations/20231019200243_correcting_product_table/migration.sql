/*
  Warnings:

  - You are about to drop the column `dasePrice` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `discountaPercentage` on the `Product` table. All the data in the column will be lost.
  - Added the required column `basePrice` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "dasePrice",
DROP COLUMN "discountaPercentage",
ADD COLUMN     "basePrice" DECIMAL(8,2) NOT NULL,
ADD COLUMN     "discountPercentage" INTEGER NOT NULL DEFAULT 0;
