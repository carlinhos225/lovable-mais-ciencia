import { createFileRoute, useNavigate } from '@tanstack/react-router'
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Bell,
  Menu,
  X,
  LogOut,
  User,
  GraduationCap,
  ClipboardList
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const navigation = [
    { name: 'Visão Geral', icon: LayoutDashboard, current: true },
    { name: 'Disciplinas', icon: BookOpen, current: false },
    { name: 'Frequência', icon: ClipboardList, current: false },
    { name: 'Horários', icon: CalendarDays, current: false },
  ]

  const handleLogout = () => {
    navigate({ to: '/login' })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4 shadow-xl">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex shrink-0 items-center px-4 gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-gray-900">Portal Escolar</span>
            </div>
            <div className="mt-8 flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    className={`group w-full flex items-center rounded-md px-2 py-2 text-base font-medium ${item.current ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                  >
                    <item.icon
                      className={`mr-4 h-6 w-6 flex-shrink-0 ${item.current ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500'}`}
                    />
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
            <div className="mt-auto p-4">
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-base font-medium text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-6 w-6" />
                Sair
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col border-r border-gray-200 bg-white">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex shrink-0 items-center px-6 gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Portal Escolar</span>
          </div>
          <nav className="mt-8 flex-1 space-y-1 px-4 text-sm font-medium">
            {navigation.map((item) => (
              <button
                key={item.name}
                className={`group w-full flex items-center rounded-xl px-3 py-2.5 transition-colors ${item.current ? 'bg-primary/5 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 flex-shrink-0 ${item.current ? 'text-primary' : 'text-gray-400 group-hover:text-gray-500'}`}
                />
                {item.name}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-100">
           <button
             onClick={handleLogout}
             className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
           >
             <LogOut className="h-5 w-5" />
             Sair
           </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex flex-1 flex-col md:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Notificações</span>
                <Bell className="h-6 w-6" />
              </button>
              <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />
              <div className="flex items-center gap-x-3 p-1.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 border border-gray-200">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <span className="hidden lg:flex lg:items-center">
                  <span className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                    Aluno / Professor
                  </span>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Bem-vindo(a) ao seu Painel</h1>
                <p className="text-sm text-gray-500 mt-1">Aqui está o resumo das suas atividades e últimas informações.</p>
              </div>
            </div>

            {/* Mock Dashboard Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-50 p-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Disciplinas Ativas</h3>
                    <p className="text-2xl font-bold text-gray-900">8</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-green-50 p-3">
                    <ClipboardList className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Desempenho (Média)</h3>
                    <p className="text-2xl font-bold text-gray-900">8.5</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-purple-50 p-3">
                    <CalendarDays className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Próxima Aula</h3>
                    <p className="text-lg font-bold text-gray-900 pt-1 leading-tight">Matemática</p>
                    <p className="text-xs text-gray-500 mt-1">Hoje, 09:30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions or Feed */}
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-900">Quadro de Avisos</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { title: 'Reunião de Pais e Mestres', date: 'Há 2 dias', desc: 'A reunião do primeiro bimestre será realizada no próximo sábado pontualmente às 08h.' },
                  { title: 'Trabalho de História', date: 'Há 5 dias', desc: 'Data de entrega estendida para a próxima sexta-feira conforme combinado em sala.' }
                ].map((aviso, idx) => (
                  <div key={idx} className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900">{aviso.title}</h4>
                      <span className="text-xs text-gray-500">{aviso.date}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{aviso.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}
