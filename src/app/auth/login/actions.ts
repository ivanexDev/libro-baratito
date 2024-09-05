'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  // se redirge al usuario a la misma pagina pero con el mensaje de error para activar la alerta
  if (error) {
    redirect(`/auth/login?message=${encodeURIComponent(error.message)}`)
  }

  revalidatePath('/', 'layout')

  // se redirige al inicio si todo sale bien
  redirect('/')
}
