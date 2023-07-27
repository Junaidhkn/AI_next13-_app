import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()
  let link = userId ? '/journal' : '/sign-in'
  return (
    <main className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-5xl mb-4">
          EmoTrack: Capturing Your Life&apos;s Emotional Journey with AI
        </h1>
        <p className="text-2xl text-white/60 mb-4">
          The cutting-edge AI-powered web app designed to track and understand
          your emotions throughout life&apos;s incredible journey.
        </p>
        <p className="text-[16px] mb-6">
          Seamlessly connect with your inner self as you share your day&apos;s
          experiences through a simple paragraph. Our advanced AI algorithms
          will decipher your emotions, providing valuable insights and helping
          you gain a deeper understanding of your emotional well-being. Embrace
          the power of EmoTrack and embark on a transformative emotional
          exploration like never before.
        </p>
        <div>
          <Link href={link}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-lg">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
