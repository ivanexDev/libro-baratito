import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { login } from './actions'
import LoginFeedback from './components/LoginFeedback'

export default function LoginPage() {
  return (
    <>
      <section className="flex h-[100vh] w-full items-center justify-center">
        <form className="flex min-w-[500px] flex-col gap-2 rounded-xl border-2 border-gray-300 bg-white p-8">
          <h4 className="text-2xl font-bold">Entra a tu cuenta</h4>
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
          <div className="flex items-center justify-between">
            <Link href="/auth/reset-password">¿Olvidaste tu contraseña?</Link>
            <Button formAction={login}>Entrar</Button>
          </div>

          <Link href="/auth/signup">¿No tienes cuenta?</Link>
        </form>
      </section>
      <LoginFeedback />
    </>
  )
}
