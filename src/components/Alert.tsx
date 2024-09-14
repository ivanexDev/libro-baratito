'use client'

import {
  Alert as AlertCdn,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { CircleAlert } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

export default function Alert() {
  const searchParams = useSearchParams()
  const message = searchParams.get('message')

  if (message) {
    return (
      <AlertCdn className="fixed right-0 top-[85px] m-5 h-auto w-auto">
        <CircleAlert className="h-4 w-4" />
        <AlertTitle>Ha ocurrido un error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </AlertCdn>
    )
  }
  return null
}
