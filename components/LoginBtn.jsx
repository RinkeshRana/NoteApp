import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"

const LoginBtn = () => {
  const router = useRouter()
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as  {session.user.email}
        <Image className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
        />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => router.push("/signin")}>Sign in</button>
    </>
  )
}

export default LoginBtn