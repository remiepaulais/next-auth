import { Button } from '@/components/ui/button'
import { auth, signIn } from '../auth'
import { BsGithub } from 'react-icons/bs'
import { redirect } from 'next/navigation'

export default async function Login() {
  const session = await auth()

  if (session?.user) {
    redirect('/')
  }

  return (
    <main className='flex flex-col justify-center items-center'>
      <h1 className='sr-only'>Sign In with Github</h1>
      <div className='w-full flex my-4'>
        <form
          action={async () => {
            'use server'
            await signIn('github')
          }}
          className='flex-1 flex'
        >
          <Button className='w-full' type='submit'>
            <BsGithub />
            Continue with Github
          </Button>
        </form>
      </div>
    </main>
  )
}
