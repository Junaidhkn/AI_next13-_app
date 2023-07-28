import { getUserFromClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getEntries = async () => {
  const user = await getUserFromClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id as string,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()
  console.log(entries)
  return <div>JournalPage</div>
}

export default JournalPage
