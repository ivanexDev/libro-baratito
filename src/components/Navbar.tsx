import { User } from '@supabase/supabase-js'
import Link from 'next/link'
import Alert from './Alert'
import Logout from './Logout'

export default function Navbar({ user }: { user: User }) {
  const routes = [
    {
      label: 'Mis Libros',
      path: '/my-books',
    },
    {
      label: 'Añadir Libro',
      path: '/add-book',
    },
    {
      label: 'Notificaciónes',
      path: '/notifications',
    },
  ]
  return (
    <>
      <nav className="fixed inset-x-0 top-0 flex h-[80px] w-full items-center justify-between border-b-2 border-gray-300 px-8">
        <h1 className="text-xl font-extrabold uppercase">Libro Baratito! 📚</h1>
        <ul className="flex items-center gap-4 font-bold uppercase text-neutral-900">
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}

          <li>{user.email}</li>
          <Logout />
        </ul>
      </nav>

      <Alert />
    </>
  )
}
