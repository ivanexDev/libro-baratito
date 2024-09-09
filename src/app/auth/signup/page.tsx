import ConfirmationSending from './components/ConfirmationSending'
import Alert from '@/components/Alert'
import SignUpForm from './components/SignUpForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Libro Baratito! 📚 - Crear Cuenta',
  description: 'Your Description',
}

export default function SignUpPage() {
  return (
    <>
      <section className="flex h-[100vh] w-full items-center justify-center">
        <SignUpForm />
      </section>

      <ConfirmationSending />
      <Alert />
    </>
  )
}
