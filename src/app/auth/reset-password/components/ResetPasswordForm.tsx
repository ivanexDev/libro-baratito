import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { resetPassword } from './actions'
import LoaderButton from '@/components/LoaderButton'

export default function ResetPasswordForm() {
  return (
    <form
      action={resetPassword}
      className="flex h-full w-full flex-col items-center justify-center gap-4 bg-white"
    >
      <h4 className="text-3xl font-bold">Recuperar Contraseña</h4>
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

      <div className="flex w-full items-center justify-between">
        <Link className="hover:underline" href="/auth/login">
          Ir a Iniciar Sesión
        </Link>

        <LoaderButton>Enviar</LoaderButton>
      </div>

      <Link className="w-full hover:underline" href="/auth/signup">
        ¿No tienes cuenta?
      </Link>
    </form>
  )
}
