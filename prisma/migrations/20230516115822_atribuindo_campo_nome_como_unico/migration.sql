/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Golfinho` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Golfinho_name_key" ON "Golfinho"("name");
