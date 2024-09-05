import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState } from 'react'

export default function SingUpPage() {
  const [form, setForm] = useState<{
    email: string
    password: string
    confirmPassword: string
  }>({
    email: '',
    password: '',
    confirmPassword: '',
  })

  function handleChange(e: any) {
    const { name, value } = e.target

    setForm((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <section className="flex h-[100vh] w-full items-center justify-center bg-gradient-to-tr from-orange-300 to-orange-500">
      <form className="flex min-w-[500px] flex-col gap-2 rounded-xl border-2 border-gray-300 bg-white p-8">
        <h4 className="text-2xl font-bold">Crea tu cuenta</h4>
        <fieldset>
          <label htmlFor="email">Email:</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Introduce tu email"
            required
            value={form?.email}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Contraseña:</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Introduce tu contraseña"
            required
            value={form?.password}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Confirmar Contraseña:</label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirma tu contraseña"
            required
            value={form?.confirmPassword}
            onChange={handleChange}
          />
        </fieldset>
        <div className="flex items-center justify-between">
          <Link href="/auth/-reset-password">¿Olvidaste tu contraseña?</Link>
          <Button>Crear</Button>
        </div>
        <Link href="/auth/login"> ir a iniciar sesión</Link>
      </form>
    </section>
  )
}
