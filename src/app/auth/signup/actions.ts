'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  // Se redirige al usuario a la misma pagina pero con el mensaje de error para activar la alerta
  if (error) {
    redirect(`/auth/signup?message=${encodeURIComponent(error.message)}`)
  }

  revalidatePath('/', 'layout')

  // se redirige al usuario a la vista de espera de confirmación
  redirect('/auth/signup?confirmation=true')
}
