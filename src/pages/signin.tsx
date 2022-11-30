import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
export default function Page() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Link href={"/protected"}><button>a protected site</button></Link>
        <div></div>
        Signed in as {session.user!.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>

      <Link href={"/protected"}><button>a protected site</button></Link>
      <div></div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
