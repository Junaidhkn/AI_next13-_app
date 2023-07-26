import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/journal"
      />
    </main>
  )
}

export default SignUpPage
