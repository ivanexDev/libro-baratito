'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CircleAlert } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

export default function SignUpFeedback() {
  const searchParams = useSearchParams()
  const message = searchParams.get('message')

  if (message) {
    return (
      <Alert className="fixed right-0 top-0 m-5 h-auto w-auto">
        <CircleAlert className="h-4 w-4" />
        <AlertTitle>Ha ocurrido un error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    )
  }
  return null
}
