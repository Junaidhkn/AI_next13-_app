import { getUserFromClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const JournalPage = async () => {
  const user = await getUserFromClerkID()
  const entries = await prisma.user.findMany({
    where: {
      userId: user.id as string,
    },
    orderBy: {
      createdAt: 'desc',
    },
  }
  return entries
  
  )
}
return <div>JournalPage</div>

}

export default JournalPage
