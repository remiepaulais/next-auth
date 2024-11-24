import { auth, signOut } from '@/app/auth'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

export default async function Navbar() {
  const session = await auth()

  if (!session?.user) return null

  return (
    <div className='bg-neutral-900 text-neutral-50 flex items-center justify-end gap-2 fixed top-0 w-full p-4'>
      <span className='hidden text-sm sm:inline-flex'>
        <Avatar className='h-8 w-8'>
          {session.user.image ? (
            <AvatarImage
              src={session.user.image}
              alt={session.user.name ?? undefined}
            />
          ) : (
            <AvatarFallback>UI</AvatarFallback>
          )}
        </Avatar>
      </span>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <Button variant='outline'>Sign Out</Button>
      </form>
    </div>
  )
}
