import Alert from '@/components/Alert'
import LoginForm from './components/LoginForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Libro Baratito! 📚 - Iniciar Sesion',
  description: 'Your Description',
}

export default function LoginPage() {
  return (
    <>
      <section className="flex h-[100vh] w-full items-center justify-center">
        <LoginForm />
      </section>
      <Alert />
    </>
  )
}
