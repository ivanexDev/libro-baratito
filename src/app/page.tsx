import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from './actions'
import Navbar from '@/components/Navbar'

export default async function Home() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth/login')
  }

  return (
    <main>
      <Navbar user={data.user} logout={logout} />
    </main>
  )
}
