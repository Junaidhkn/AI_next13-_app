import EntryCard from '@/components/EntryCard'
import NewEntryCard from '@/components/NewEntryCard'
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
  // const entries = await getEntries()
  // console.log(entries)
  return (
    <div className="p-10">
      <h2 className="text-3xl mb-8"></h2>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {/* {entries.map((entry) => {
        return <EntryCard key={entry.id} entry={entry} />
      })} */}
      </div>
    </div>
  )
}

export default JournalPage
