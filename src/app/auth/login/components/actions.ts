'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const supabase = createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) {
    handleError(error.message)
  } else {
    redirect('/')
  }

  revalidatePath('/')
}

function handleError(error: string) {
  switch (error) {
    case 'Invalid login credentials':
      redirect(
        `/auth/login?message=${encodeURIComponent('Email o Contraseña invalidos')}`,
      )
    default:
      redirect(`/auth/login?message=${encodeURIComponent(error)}`)
  }
}
