'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import LoaderButton from './LoaderButton'

export default function Logout() {
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  async function logout() {
    setIsLoading(true)
    const { error } = await supabase.auth.signOut()

    if (error)
      router.push('/?message=No se puedo cerrar la sesion, intente nuevamente')
    else router.replace('/auth/login')

    setIsLoading(false)
  }
  return (
    <LoaderButton onClick={logout} condition={isLoading}>
      Salir
    </LoaderButton>
  )
}
