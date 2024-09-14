'use client'
import { LoaderCircle } from 'lucide-react'
import { Button, ButtonProps } from './ui/button'
import { useFormStatus } from 'react-dom'

export default function LoaderButton({ children }: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending} size={'lg'}>
      {pending ? (
        <>
          <LoaderCircle className="w-5 animate-spin" />
          Cargando
        </>
      ) : (
        children
      )}
    </Button>
  )
}
