import { LoaderCircle } from 'lucide-react'
import { Button } from './ui/button'
import { ReactNode } from 'react'

export default function LoaderButton({
  onClick,
  condition,
  children,
}: {
  onClick?: () => void
  condition: boolean
  children: ReactNode
}) {
  return (
    <Button onClick={onClick} disabled={condition}>
      {condition ? (
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
