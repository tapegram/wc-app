/*
  Warnings:

  - You are about to drop the column `shiftId` on the `Worker` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ShiftAssignment_workerId_key";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Worker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "addressId" INTEGER,
    "jobType" TEXT,
    "employmentStatus" TEXT NOT NULL DEFAULT 'active',
    CONSTRAINT "Worker_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Worker" ("addressId", "email", "employmentStatus", "firstName", "id", "jobType", "lastName", "phone") SELECT "addressId", "email", "employmentStatus", "firstName", "id", "jobType", "lastName", "phone" FROM "Worker";
DROP TABLE "Worker";
ALTER TABLE "new_Worker" RENAME TO "Worker";
CREATE UNIQUE INDEX "Worker_addressId_key" ON "Worker"("addressId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
