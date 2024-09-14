import Navbar from '@/components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Libro Baratito! 📚 - Inicio',
  description: 'Your Description',
}

export default async function Home() {
  return (
    <main>
      <Navbar />
    </main>
  )
}
