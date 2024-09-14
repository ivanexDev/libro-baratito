import { Input } from '@/components/ui/input'
import LoaderButton from '@/components/LoaderButton'
import { login } from './actions'
import Link from 'next/link'

export default function LoginForm() {
  return (
    <form
      action={login}
      className="flex h-full w-full flex-col items-center justify-center gap-4 bg-white"
    >
      <h4 className="text-3xl font-bold">Entra a tu cuenta</h4>
      <p className="w-3/4 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
        nam.
      </p>

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
        />
      </div>

      {/* Botón de Enviar */}
      <div className="flex w-full items-center justify-between">
        <Link href="/auth/reset-password" className="hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>

        <LoaderButton>Entrar</LoaderButton>
      </div>

      <Link className="w-full hover:underline" href="/auth/signup">
        ¿No tienes cuenta?
      </Link>
    </form>
  )
}
