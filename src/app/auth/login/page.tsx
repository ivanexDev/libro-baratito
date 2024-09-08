'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LoaderCircle } from 'lucide-react'
import { ErrorMessage, Form, Formik } from 'formik'
import * as yup from 'yup'
import Alert from '@/components/Alert'

const validationSchema = yup.object({
  email: yup
    .string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
  password: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
})

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function login(values: { email: string; password: string }) {
    setIsLoading(true)
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    })

    if (error) {
      console.log(error.message === 'Invalid login credentials')
      handleError(error.message)
    } else {
      router.replace('/')
    }

    setIsLoading(false)
  }

  function handleError(error: string) {
    switch (error) {
      case 'Invalid login credentials':
        router.replace(
          `/auth/login?message=${encodeURIComponent('Email o Contraseña invalidos')}`,
        )
        break
      default:
        router.replace(`/auth/login?message=${encodeURIComponent(error)}`)
        break
    }
  }

  
  return (
    <>
      <section className="flex h-[100vh] w-full items-center justify-center">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true)
            login(values).finally(() => setSubmitting(false))
          }}
        >
          {({ isSubmitting, handleChange, values }) => (
            <Form className="flex min-w-[500px] flex-col gap-2 rounded-xl border-2 border-gray-300 bg-white p-8">
              <h4 className="text-2xl font-bold">Entra a tu cuenta</h4>
              {/* Campo de Email */}
              <div>
                <label htmlFor="email">Email:</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Introduce tu email"
                  required
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              {/* Campo de Contraseña */}
              <div>
                <label htmlFor="password">Contraseña:</label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Introduce tu contraseña"
                  required
                  value={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>

              {/* Botón de Enviar */}
              <div className="flex items-center justify-between">
                <Link href="/auth/reset-password">
                  ¿Olvidaste tu contraseña?
                </Link>
                <Button
                  disabled={isSubmitting || isLoading}
                  className="inline-flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <LoaderCircle className="w-5 animate-spin" />
                      Cargando
                    </>
                  ) : (
                    'Entrar'
                  )}
                </Button>
              </div>

              <Link href="/auth/signup">¿No tienes cuenta?</Link>
            </Form>
          )}
        </Formik>
      </section>
      <Alert />
    </>
  )
}
