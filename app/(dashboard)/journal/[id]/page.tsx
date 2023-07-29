import Editor from '@/components/Editor'
import { getUserFromClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

const getEntry = async (id: string) => {
  const user = await getUserFromClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id: id,
      },
    },
    include: {
      EntryAnalysis: true,
    },
  })

  return entry
}

const JournalEditorPage: React.FC<{ params: Params }> = async ({ params }) => {
  const entry = await getEntry(params.id)

  return (
    <div className="w-full h-full">
      <Editor entry={entry} />
    </div>
  )
}

export default JournalEditorPage
