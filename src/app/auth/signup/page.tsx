import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { signup } from './actions'
import ConfirmationSending from './components/ConfirmationSending'
import SignUpFeedback from './components/SignUpFeedback'

export default function SingUpPage() {
  return (
    <>
      <section className="flex h-[100vh] w-full items-center justify-center">
        <form className="flex min-w-[500px] flex-col gap-2 rounded-xl border-2 border-gray-300 bg-white p-8">
          <h4 className="text-2xl font-bold">Crea tu cuenta</h4>
          <div>
            <label htmlFor="email">Email:</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Introduce tu email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Introduce tu contraseña"
              required
            />
          </div>
          {/**
        * 
        * 
        *  <div>
          <label htmlFor="password">Confirmar Contraseña:</label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirma tu contraseña"
            required
          />
        </div>
        */}
          <div className="flex items-center justify-between">
            <Link href="/auth/-reset-password">¿Olvidaste tu contraseña?</Link>
            <Button formAction={signup}>Crear</Button>
          </div>
          <Link href="/auth/login"> ir a iniciar sesión</Link>
        </form>
      </section>

      <ConfirmationSending />
      <SignUpFeedback />
    </>
  )
}
