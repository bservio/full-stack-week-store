/*
  Warnings:

  - You are about to drop the column `imaageUrl` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imaageUrl",
ADD COLUMN     "imageUrls" TEXT[];
