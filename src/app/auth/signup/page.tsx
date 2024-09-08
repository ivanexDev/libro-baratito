'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import ConfirmationSending from './components/ConfirmationSending'
import { useState } from 'react'
import * as yup from 'yup'
import Alert from '@/components/Alert'
import { ErrorMessage, Form, Formik } from 'formik'
import { LoaderCircle } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

const validationSchema = yup.object({
  email: yup
    .string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
  password: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
    .required('La confirmación de contraseña es obligatoria'),
})

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function signup(values: { email: string; password: string }) {
    const supabase = createClient()

    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    })

    if (error) {
      router.replace(`/auth/login?message=${encodeURIComponent(error.message)}`)
    } else {
      router.replace('/auth/signup?confirmation=true')
    }

    setIsLoading(false)
  }
  return (
    <>
      <section className="flex h-[100vh] w-full items-center justify-center">
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true)
            signup(values).finally(() => setSubmitting(false))
          }}
        >
          {({ isSubmitting, values, handleChange }) => (
            <Form className="flex min-w-[500px] flex-col gap-2 rounded-xl border-2 border-gray-300 bg-white p-8">
              <h4 className="text-2xl font-bold">Crea tu cuenta</h4>
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
              {/* Campo confirmación de Contraseña */}
              <div>
                <label htmlFor="password">Confirmar Contraseña:</label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirma tu contraseña"
                  required
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <Link href="/auth/-reset-password">
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
              <Link href="/auth/login"> ir a iniciar sesión</Link>
            </Form>
          )}
        </Formik>
      </section>

      <ConfirmationSending />
      <Alert />
    </>
  )
}
