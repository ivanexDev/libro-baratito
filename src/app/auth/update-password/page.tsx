import { Metadata } from 'next'
import UpdatePasswordForm from './components/UpdatePasswordForm'

export const metadata: Metadata = {
  title: 'Libro Baratito! 📚 - Actualizar contraseña',
  description: 'Your Description',
}

export default function UpdatePasswordPage() {
  return <UpdatePasswordForm />
}
