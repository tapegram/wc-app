-- CreateTable
CREATE TABLE "ShiftAssignment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workerId" INTEGER NOT NULL,
    "shiftId" INTEGER NOT NULL,
    CONSTRAINT "ShiftAssignment_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Worker" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ShiftAssignment_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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
    "shiftId" INTEGER,
    CONSTRAINT "Worker_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Worker" ("addressId", "email", "employmentStatus", "firstName", "id", "jobType", "lastName", "phone", "shiftId") SELECT "addressId", "email", "employmentStatus", "firstName", "id", "jobType", "lastName", "phone", "shiftId" FROM "Worker";
DROP TABLE "Worker";
ALTER TABLE "new_Worker" RENAME TO "Worker";
CREATE UNIQUE INDEX "Worker_addressId_key" ON "Worker"("addressId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "ShiftAssignment_workerId_shiftId_key" ON "ShiftAssignment"("workerId", "shiftId");

-- CreateIndex
CREATE UNIQUE INDEX "ShiftAssignment_workerId_key" ON "ShiftAssignment"("workerId");
