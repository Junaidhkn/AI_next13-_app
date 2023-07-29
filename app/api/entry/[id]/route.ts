import { revalidate } from '@/utils/actions'
import { analyzeEntry } from '@/utils/ai'
import { getUserFromClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

type Params = {
  params: {
    id: string
  }
}

export const DELETE = async (request: Request, { params }: Params) => {
  const user = await getUserFromClerkID()

  await prisma.journalEntry.delete({
    where: {
      userId_id: {
        id: params.id,
        userId: user.id,
      },
    },
  })

  revalidate(['/journal'])

  return NextResponse.json({ data: { id: params.id } })
}

export const PATCH = async (request: Request, { params }: Params) => {
  const { content } = await request.json()
  const user = await getUserFromClerkID()
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: {
      content: content,
    },
  })

  const analysis = await analyzeEntry(updatedEntry.content)

  const updated = await prisma.entryAnalysis.upsert({
    where: {
      entryId: updatedEntry.id,
    },
    create: {
      userId: user.id,
      entryId: updatedEntry.id,
      ...analysis,
    },
    update: analysis,
  })

  return NextResponse.json({ data: { ...updatedEntry, analysis: updated } })
  // return NextResponse.json({ data: updatedEntry })
}
