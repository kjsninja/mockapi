-- CreateTable
CREATE TABLE "Phases" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "program_id" INTEGER NOT NULL,
    "number" TEXT NOT NULL,
    "allocation" TEXT NOT NULL,
    "from_year" INTEGER NOT NULL,
    "to_year" INTEGER NOT NULL
);
