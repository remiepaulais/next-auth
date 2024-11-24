import { auth } from './auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  return (
    <div>
      <h1 className='text-3xl font-bold my-4'>You are logged in</h1>
      <div className='flex flex-col gap-4'>
        <p>
          User: <span className='font-bold'>{session.user.name}</span>
        </p>
        <p>
          Email: <span className='font-bold'>{session.user.email}</span>
        </p>
        <p>
          Token expires the:{' '}
          <span className='font-bold'>
            {new Date(session.expires).toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  )
}
