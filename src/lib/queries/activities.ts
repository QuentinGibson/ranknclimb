"use server"
import { db } from "@/server/db"
import { auth } from "@clerk/nextjs/server"

export const createUserCardActivity = async (cardId: string, userChoiceIndex: number, isCorrect: boolean) => {
  const {userId} = await auth()

  if (!userId) {
    // throw new Error('User not authenticated to create user card activity. Found no userId.')
    console.error('User not authenticated to create user card activity. Found no userId.')
    return
  }

  try {
    await db.userCardResult.create({
      data: {
        userId,
        cardId,
        userChoiceIndex,
        isCorrect,
      },
    });
  } catch (e) {
    console.error("Error creating user card activity")
    console.error(e)
  }
}