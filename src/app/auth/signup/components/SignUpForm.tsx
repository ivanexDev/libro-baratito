import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { signUp } from './actions'
import LoaderButton from '@/components/LoaderButton'

export default async function SignUpForm() {
  return (
    <form
      action={signUp}
      className="flex h-full w-full flex-col items-center justify-center gap-4 bg-white"
    >
      <h4 className="text-3xl font-bold">Crea tu cuenta</h4>

      {/* Campo de Email */}
      <div className="w-full">
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Introduce tu email"
          required
        />
      </div>

      {/* Campo de Contraseña */}
      <div className="w-full">
        <label htmlFor="password">Contraseña:</label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Introduce tu contraseña"
          required
          minLength={6}
        />
      </div>

      {/* Campo confirmación de Contraseña */}
      <div className="w-full">
        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirma tu contraseña"
          required
        />
      </div>

      <div className="flex w-full items-center justify-between">
        <Link className="w-full hover:underline" href="/auth/reset-password">
          ¿Olvidaste tu contraseña?
        </Link>

        <LoaderButton className='bg-blue-500'>Registrarse</LoaderButton>
      </div>
      <Link className="w-full hover:underline" href="/auth/login">
        Ir a iniciar sesión
      </Link>
    </form>
  )
}
