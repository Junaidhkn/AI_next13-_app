import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <SignUp
        path="/sign-up"
        afterSignUpUrl="/new-user"
        redirectUrl="/new-user"
      />
    </main>
  )
}

export default SignUpPage
