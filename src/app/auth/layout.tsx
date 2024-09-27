import Alert from '@/components/Alert'
import Navbar from '@/components/Navbar'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
    <Navbar/>
      <main className="bg-books flex h-[100vh] w-full items-center justify-center p-4">
        <div className="flex flex-col max-w-[600px] rounded-xl border-2 border-gray-300 bg-white shadow-2xl overflow-hidden">
          <div className='w-full h-10 bg-gradient-to-r from-orange-400 to-blue-300'></div>
          <div className="mx-auto flex h-full w-[90%] flex-col gap-20 px-8 pb-8 pt-20">
            {children}
            <Alert />

            <p className="w-full text-center">
              Al hacer clic en continuar, aceptas nuestros{' '}
              <a href="" className="underline">
                Términos
              </a>{' '}
              de{' '}
              <a href="" className="underline">
                Servicio
              </a>{' '}
              y{' '}
              <a href="" className="underline">
                Política de Privacidad
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
