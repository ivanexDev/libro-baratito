import Link from 'next/link'
import Alert from './Alert'
import Logout from './Logout'
import { createClient } from '@/utils/supabase/server'
import { Button } from './ui/button'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from './ui/menubar'

export default async function Navbar() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()

  const routes = [
    { label: 'Mis Libros', path: '/my-books' },
    { label: 'Añadir Libro', path: '/add-book' },
    { label: 'Notificaciónes', path: '/notifications' },
  ]

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-10 flex h-[80px] w-full items-center justify-between border-b-2 border-gray-300 bg-white px-4 sm:px-8">
        <Link href="/" className="text-lg font-bold uppercase">
          Libro Baratito! 📚
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-4 text-neutral-900 sm:flex">
          <li>
            <Link href="/" className="hover:underline">Inicio</Link>
          </li>
          {data.user ? (
            <>
              {routes.map((route) => (
                <li key={route.path}>
                  <Link href={route.path} className="hover:underline">{route.label}</Link>
                </li>
              ))}
              <Logout email={data.user.email} />
            </>
          ) : (
            <>
              <li>
                <Button asChild variant="ghost">
                  <Link href="/auth/login">Iniciar Sesión</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="outline">
                  <Link href="/auth/signup">Registrarme</Link>
                </Button>
              </li>
            </>
          )}
        </ul>

        {/* Mobile menu */}
        <Menubar className="sm:hidden">
          <MenubarMenu>
            <MenubarTrigger>Menu</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href="/" className="w-full">Inicio</Link>
              </MenubarItem>
              {data.user ? (
                <>
                  {routes.map((route) => (
                    <MenubarItem key={route.path}>
                      <Link href={route.path} className="w-full">{route.label}</Link>
                    </MenubarItem>
                  ))}
                  <MenubarItem>
                    <Logout email={data.user.email} />
                  </MenubarItem>
                </>
              ) : (
                <>
                  <MenubarItem>
                    <Link href="/auth/login" className="w-full">Iniciar Sesión</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link href="/auth/signup" className="w-full">Registrarme</Link>
                  </MenubarItem>
                </>
              )}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </nav>
      <div className="h-[80px]"></div>
      <Alert />
    </>
  )
}
