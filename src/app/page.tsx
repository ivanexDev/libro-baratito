import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Libro Baratito! 📚 - Inicio',
  description: 'Your Description',
}

export default async function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-books">
        <section className="flex h-[100vh] w-full items-center">
          <div className="flex h-full w-1/2 items-center justify-center border-r bg-white">
            <div className="m-auto flex w-[90%] flex-col items-start justify-center gap-5">
              <h1 className="text-5xl font-bold">
                Recibe notificaciones de{' '}
                <span className="text-blue-500 underline">precios bajos</span>{' '}
                de tus{' '}
                <span className="text-orange-500 underline">
                  libros favoritos
                </span>
              </h1>

              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                molestiae iure aperiam illo enim, earum quae autem aliquid magni
                voluptatibus?
              </p>

                <Link className='text-xl px-8 py-4 bg-blue-500 rounded-md text-white font-bold hover:bg-blue-500/90' href="auth/signup">Comenzar</Link>
            </div>
          </div>

          <Image
            src="/hero.png"
            className="w-1/2"
            width="1000"
            height="1000"
            alt=""
          />
        </section>
      </main>
    </>
  )
}
