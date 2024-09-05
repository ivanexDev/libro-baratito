import React from 'react'
import { Button } from './ui/button'
import { User } from '@supabase/supabase-js'
import Link from 'next/link'

export default function Navbar({
  user,
  logout,
}: {
  user: User
  logout: () => {}
}) {
  const routes = [
    {
      label: 'Mis Libros',
      path: '/account/my-books',
    },
    {
      label: 'Añadir Libro',
      path: '/account/add-book',
    },
    {
      label: 'Notificaciónes',
      path: '/account/notifications',
    },
  ]
  return (
    <nav className="fixed inset-x-0 top-0 flex h-[80px] w-full items-center justify-between border-b-2 border-gray-300 px-8">
      <h1 className="text-xl font-extrabold uppercase">Librito facil 📚</h1>
      <ul className="flex items-center gap-4 font-bold uppercase text-neutral-900">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.label}</Link>
          </li>
        ))}

        <li>{user.email}</li>
        <form>
          <Button formAction={logout}>Salir</Button>
        </form>
      </ul>
    </nav>
  )
}
