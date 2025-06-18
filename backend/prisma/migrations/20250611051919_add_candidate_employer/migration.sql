-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employer" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Employer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_userId_key" ON "Candidate"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_userId_key" ON "Employer"("userId");

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employer" ADD CONSTRAINT "Employer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
