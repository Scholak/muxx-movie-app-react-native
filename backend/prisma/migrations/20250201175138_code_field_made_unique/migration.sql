/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `ResetPasswordCode` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ResetPasswordCode_code_key" ON "ResetPasswordCode"("code");
