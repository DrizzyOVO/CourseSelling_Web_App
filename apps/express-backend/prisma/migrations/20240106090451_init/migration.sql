/*
  Warnings:

  - A unique constraint covering the columns `[password]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_password_key" ON "Admin"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");
