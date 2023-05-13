/*
  Warnings:

  - You are about to drop the `Mamifero` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Mamifero";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Golfinho" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "paws" INTEGER NOT NULL
);
