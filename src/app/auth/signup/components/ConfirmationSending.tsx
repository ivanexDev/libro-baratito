'use client'

import { useSearchParams } from 'next/navigation'

export default function ConfirmationSending() {
  const searchParams = useSearchParams()
  const confirmationSent = searchParams.get('confirmation')

  if (confirmationSent) {
    return (
      <section className="fixed inset-0 z-10 flex h-[100vh] w-full items-center justify-center">
        <div>
          <p>Te hemos enviado un email para confirmar tu usuario</p>
        </div>
      </section>
    )
  }
  return null
}
