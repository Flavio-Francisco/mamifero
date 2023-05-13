/*
  Warnings:

  - You are about to drop the column `paws` on the `Golfinho` table. All the data in the column will be lost.
  - Added the required column `marine` to the `Golfinho` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Golfinho" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "characteristics" TEXT NOT NULL,
    "marine" BOOLEAN NOT NULL
);
INSERT INTO "new_Golfinho" ("characteristics", "id", "name", "species") SELECT "characteristics", "id", "name", "species" FROM "Golfinho";
DROP TABLE "Golfinho";
ALTER TABLE "new_Golfinho" RENAME TO "Golfinho";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
