'use client'

import LoaderButton from '@/components/LoaderButton'
import { Input } from '@/components/ui/input'
import { createClient } from '@/utils/supabase/client'
import { ErrorMessage, Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import EmailSent from './components/EmailSent'

const validationSchema = yup.object({
  email: yup
    .string()
    .email('El email no es válido')
    .required('El email es obligatorio'),
})

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  async function resetPassword(values: { email: string }) {
    setIsLoading(true)
    let { data, error } = await supabase.auth.resetPasswordForEmail(
      values.email,
      {
        redirectTo: 'http://localhost:3000/auth/update-password',
      },
    )

    if (error)
      router.push(
        `/reset-password?message=${encodeURIComponent(error.message)}`,
      )
      else router.replace(`/auth/reset-password?email-sent=true`)

    setIsLoading(false)
  }
  return (
    <>
    <section className="flex h-[100vh] w-full items-center justify-center">
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true)
          resetPassword(values).finally(() => setSubmitting(false))
        }}
      >
        {({ isSubmitting, handleChange, values }) => (
          <Form className="flex min-w-[500px] flex-col gap-2 rounded-xl border-2 border-gray-300 bg-white p-8">
            <h4 className="text-2xl font-bold">Recuperar Contraseña</h4>
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

            {/* Botón de Enviar */}
            <div className="flex items-center justify-between">
              <Link href="/auth/reset-password">Ir a Iniciar Sesión</Link>

              <LoaderButton condition={isSubmitting || isLoading}>
                Enviar
              </LoaderButton>
            </div>

            <Link href="/auth/signup">¿No tienes cuenta?</Link>
          </Form>
        )}
      </Formik>
    </section>

    <EmailSent/>
    </>
  )
}
