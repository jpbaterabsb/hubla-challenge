/*
  Warnings:

  - You are about to drop the column `products` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `product` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "products",
ADD COLUMN     "product" TEXT NOT NULL;
