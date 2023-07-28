'use server'

import { revalidatePath } from 'next/cache'

type paths = string[]

export const revalidate = (paths: paths) =>
  paths.forEach((p) => revalidatePath(p))
