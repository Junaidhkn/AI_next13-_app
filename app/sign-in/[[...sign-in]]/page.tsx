import { SignIn } from '@clerk/nextjs'

const SignInPage = () => (
  <main className="w-screen h-screen flex justify-center items-center">
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </main>
)

export default SignInPage
