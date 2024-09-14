'use client'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from './ui/menubar'
import { logout } from './actions'

export default function Logout({ email }: { email: string | undefined }) {

  async function handleClick(){
    await logout()
  }
 
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Mi Cuenta</MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled>{email}</MenubarItem>
          <MenubarItem onClick={handleClick}>Cerrar Sesión</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
