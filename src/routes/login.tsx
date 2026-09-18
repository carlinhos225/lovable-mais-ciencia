import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { ArrowLeft, LogIn } from 'lucide-react'

export const Route = createFileRoute('/login')({
  component: Login,
})

function Login() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-lg">
         <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <LogIn className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Entrar no Portal</h2>
          </div>
          <p className="text-sm text-gray-500">
            Acesse sua conta para visualizar suas disciplinas, atividades e notificações.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: '/dashboard' });
        }}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail ou Identificador
              </label>
              <input
                id="email"
                type="text"
                placeholder="seu@email.com"
                className="mt-1 block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 block w-full rounded-xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Acessar Plataforma
          </button>
        </form>
      </div>
    </div>
  )
}