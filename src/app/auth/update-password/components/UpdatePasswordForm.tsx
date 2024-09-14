'use client'

import LoaderButton from '@/components/LoaderButton'
import { Input } from '@/components/ui/input'
import { createClient } from '@/utils/supabase/client'
import { ErrorMessage, Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import * as yup from 'yup'

const validationSchema = yup.object({
  newPassword: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Las contraseñas deben coincidir')
    .required('La confirmación de contraseña es obligatoria'),
})

export default function UpdatePasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  async function updatePassword(values: {
    newPassword: string
    confirmPassword: string
  }) {
    setIsLoading(true)
    const { data, error } = await supabase.auth.updateUser({
      password: values.newPassword,
    })

    console.log(data)

    if (error) {
      console.log(error)
      router.push(
        `/auth/update-password?message=${encodeURIComponent(error.message)}`,
      )
    } else {
      router.replace(`/auth/login`)
    }

    setIsLoading(false)
  }

  return (
    <Formik
      initialValues={{ newPassword: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        updatePassword(values).finally(() => setSubmitting(false))
      }}
    >
      {({ isSubmitting, handleChange, values }) => (
        <Form className="flex h-full w-full flex-col items-center justify-center gap-4 bg-white">
          <h4 className="text-3xl font-bold">Actualizar Contraseña</h4>
          {/* Campo de Contraseña */}
          <div className='w-full'>
            <label htmlFor="newPassword">Nueva Contraseña:</label>
            <Input
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="Introduce tu nueva contraseña"
              required
              value={values.newPassword}
              onChange={handleChange}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-sm text-red-500"
            />
          </div>
          {/* Campo confirmación de Contraseña */}
          <div className='w-full'>
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
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

          {/* Botón de Enviar */}
          <div className="flex items-center justify-between w-full">
            <Link className='hover:underline' href="/auth/login">Ir a Iniciar Sesión</Link>

            <LoaderButton>
              Guardar
            </LoaderButton>
          </div>
        </Form>
      )}
    </Formik>
  )
}
