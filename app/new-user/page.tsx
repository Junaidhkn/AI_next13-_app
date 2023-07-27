import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const createUser = async () => {
  const user = (await currentUser()) as any

  const match = await prisma.user.findUnique({
    where: {
      id: user.id as string,
    },
  })

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id as string,
        email: user?.emailAddresses[0].emailAddress as string,
      },
    })
  }
  redirect('/journal')
}

const NewUserPage = async () => {
  await createUser()
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white text-8xl">
      Loading ....
    </div>
  )
}

export default NewUserPage
