'use client'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function updatePassword(formData: FormData) {
  const supabase = createClient()

  const password = formData.get('newPassword') as string
  const confirmationPassword = formData.get('confirmPassword') as string

  if (password !== confirmationPassword) {
    redirect(
      `/auth/update-password?message=${encodeURIComponent('Las contraseñas no coinciden')}`,
    )
  }

  const { data, error } = await supabase.auth.updateUser({
    password,
  })

  console.log(data)

  if (error) {
    console.log(error)
    redirect(
      `/auth/update-password?message=${encodeURIComponent(error.message)}`,
    )
  } else {
    redirect(`/auth/login`)
  }
}
