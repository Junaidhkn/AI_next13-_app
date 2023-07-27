import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()
  let link = userId ? '/journal' : '/new-user'

  let links = [
    { href: '/journal', label: 'Journal' },
    { href: '/sign-up', label: 'Sign Up' },
    { href: '/sign-in', label: 'Sign In' },
  ]
  const isloggedIn = async () => {
    if (userId) {
      return (links = [
        { href: '/journal', label: 'Journal' },
        { href: '/sign-out', label: 'Sign Out' },
      ])
    }
  }
  isloggedIn()

  return (
    <>
      <nav className="bg-slate-800 text-white w-full h-16 absolute flex justify-between items-center">
        <h3 className="font-extrabold font-mono text-3xl ml-10">Emotrack</h3>
        <ul className="flex justify-end items-center mx-16">
          {links.map((link) => (
            <li
              key={link.href}
              className="px-7 mx-5 cursor-pointer py-2 text-xl border border-gray-300 rounded-full"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="w-screen h-screen bg-black flex justify-center items-center text-white">
        <div className="w-full max-w-[600px] mx-auto mt-24">
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
            you gain a deeper understanding of your emotional well-being.
            Embrace the power of EmoTrack and embark on a transformative
            emotional exploration like never before.
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
    </>
  )
}
