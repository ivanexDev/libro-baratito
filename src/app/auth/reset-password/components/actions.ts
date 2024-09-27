'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function resetPassword(formData: FormData) {
  const email = formData.get('email') as string
  const supabase = createClient()
  let { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3000/auth/update-password',
  })

  if (error)
    redirect(`/reset-password?message=${encodeURIComponent(error.message)}`)
  else redirect(`/auth/reset-password?email-sent=true`)
}
