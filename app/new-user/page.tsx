import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const createUser = async () => {
  const user = (await currentUser()) as any
  console.log(user)

  const match = await prisma.user.findUnique({
    where: {
      id: user.id as string,
    },
  })

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id as string,
        email: user.email as string,
      },
    })
  }
  redirect('/journal')
}

const NewUserPage = () => {
  return <div>new user page</div>
}

export default NewUserPage
