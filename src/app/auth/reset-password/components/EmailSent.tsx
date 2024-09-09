'use client'

import { useSearchParams } from 'next/navigation'

export default function EmailSent() {
  const searchParams = useSearchParams()
  const confirmationSent = searchParams.get('email-sent')

  if (confirmationSent) {
    return (
      <section className="fixed inset-0 z-10 flex h-[100vh] w-full items-center justify-center bg-white">
        <div>
          <p>Te hemos enviado un email para que restablescas tu contraseña</p>
        </div>
      </section>
    )
  }
  return null
}
