'use server'

// import { revalidateTag } from 'next/cache'
import { revalidatePath } from 'next/cache'

type paths = string[]

// export const revalidate = (paths: paths) =>
//   paths.forEach((p) => revalidateTag(p))
export const revalidate = (paths: paths) =>
  paths.forEach((p) => revalidatePath(p))
