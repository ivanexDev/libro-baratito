'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function LoginPage() {
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
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
        <h4 className="text-2xl font-bold">Entra a tu cuenta</h4>
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
        <div className="flex items-center justify-between">
          <Link href="/auth/reset-password">¿Olvidaste tu contraseña?</Link>
          <Button>Entrar</Button>
        </div>

        <Link href="/auth/signup">¿No tienes cuenta?</Link>
      </form>
    </section>
  )
}
