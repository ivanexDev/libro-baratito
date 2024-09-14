'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from './ui/menubar'

export default function Logout({ email }: { email: string | undefined }) {
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
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Mi Cuenta</MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled>{email}</MenubarItem>
          <MenubarItem onClick={logout}>Cerrar Sesión</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

