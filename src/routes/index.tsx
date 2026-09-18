import { createFileRoute, Link } from '@tanstack/react-router'
import { GraduationCap, LogIn, UserPlus } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Portal Escolar</h1>
          <p className="text-sm text-gray-500">Acompanhe a sua vida acadêmica em um só lugar.</p>
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <LogIn className="h-5 w-5" />
            Entrar no Portal
          </Link>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">ou</span>
            </div>
          </div>

          <Link
            to="/primeiro-acesso"
            className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-colors hover:bg-gray-50"
          >
            <UserPlus className="h-5 w-5" />
            Primeiro acesso (Código da Turma)
          </Link>
        </div>
      </div>
    </div>
  )
}