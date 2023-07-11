/*
  Warnings:

  - Added the required column `totalPaid` to the `TripReservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TripReservation" ADD COLUMN     "totalPaid" DECIMAL(8,2) NOT NULL;
