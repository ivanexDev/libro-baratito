'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function signUp(formData: FormData) {
  const supabase = createClient()
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  if (password !== confirmPassword) {
    redirect(
      `/auth/login?message=${encodeURIComponent('Las contraseñas no coinciden')}`,
    )
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    redirect(`/auth/signup?message=${encodeURIComponent(error.message)}`)
  } else {
    redirect('/auth/signup?confirmation=true')
  }
}
