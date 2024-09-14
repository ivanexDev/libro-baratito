import LoginForm from './components/LoginForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Libro Baratito! 📚 - Iniciar Sesion',
  description: 'Your Description',
}

export default function LoginPage() {
  return <LoginForm />
}
