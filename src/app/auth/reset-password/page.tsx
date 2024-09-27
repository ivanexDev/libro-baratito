import { Metadata } from 'next'
import EmailSent from './components/EmailSent'
import ResetPasswordForm from './components/ResetPasswordForm'

export const metadata: Metadata = {
  title: 'Libro Baratito! 📚 - Recuperar Contraseña',
  description: 'Your Description',
}


export default function ResetPasswordPage() {
  return (
    <>
      <ResetPasswordForm />
      <EmailSent />
    </>
  )
}
