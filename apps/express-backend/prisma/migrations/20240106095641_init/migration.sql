/*
  Warnings:

  - You are about to drop the column `allCoursesId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the `allCourses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_allCoursesId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "allCoursesId";

-- DropTable
DROP TABLE "allCourses";
