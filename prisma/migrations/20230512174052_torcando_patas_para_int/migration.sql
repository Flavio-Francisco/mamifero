/*
  Warnings:

  - You are about to alter the column `paws` on the `Mamifero` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mamifero" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "paws" INTEGER NOT NULL
);
INSERT INTO "new_Mamifero" ("id", "name", "paws", "race") SELECT "id", "name", "paws", "race" FROM "Mamifero";
DROP TABLE "Mamifero";
ALTER TABLE "new_Mamifero" RENAME TO "Mamifero";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
