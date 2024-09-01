-- CreateTable
CREATE TABLE "Rates" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "description" TEXT,
    "note" INTEGER NOT NULL,

    CONSTRAINT "Rates_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rates" ADD CONSTRAINT "Rates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
