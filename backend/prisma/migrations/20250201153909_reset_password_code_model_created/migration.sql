-- CreateTable
CREATE TABLE "ResetPasswordCode" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResetPasswordCode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ResetPasswordCode" ADD CONSTRAINT "ResetPasswordCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
