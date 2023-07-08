/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "imageUrl",
ADD COLUMN     "imagesUrl" TEXT[];
