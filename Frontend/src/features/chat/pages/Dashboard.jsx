import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useChat } from '../hooks/useChat'
import {
  ArrowUp,
  ChevronDown,
  Compass,
  FileText,
  Globe2,
  Image,
  Menu,
  Mic,
  PanelLeft,
  Plus,
  Search,
  Sparkles,
} from 'lucide-react'

const quickActions = [
  { icon: Search, label: 'Search the web', color: 'text-violet-300' },
  { icon: FileText, label: 'Summarize text', color: 'text-sky-300' },
  { icon: Image, label: 'Generate ideas', color: 'text-pink-300' },
]

const suggestions = [
  'Explain quantum computing like I am five',
  'Create a roadmap to learn full-stack development',
  'What are the latest trends in artificial intelligence?',
]

const Dashboard = () => {
  const { initializeSocketConnection } = useChat()
  const { user } = useSelector((state) => state.auth)

  const [message, setMessage] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const userName = user?.username || user?.name || 'DeepAI'
  const firstName = userName.split(' ')[0]

  useEffect(() => {
    initializeSocketConnection()
  }, [initializeSocketConnection])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!message.trim()) return

    console.log('Message:', message)
    setMessage('')
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] font-[Helvetica,Arial,sans-serif] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(116,79,255,0.18),transparent_28%),radial-gradient(circle_at_82%_82%,rgba(67,56,202,0.1),transparent_25%)]" />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[274px] flex-col border-r border-white/[0.07] bg-[#101014]/85 p-4 backdrop-blur-2xl transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-center justify-between px-2 pt-1">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-gray-950 to-indigo-600 ">
              <Sparkles size={18} fill="currentColor" />
            </div>

            <span className="text-lg font-medium tracking-tight">
              Tatvam <span className="text-violet-300 font-bold">AI</span>
            </span>
          </div>

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/5 hover:text-white lg:hidden"
          >
            <PanelLeft size={18} />
          </button>
        </div>

        <button className="mb-7 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.045] px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-violet-400/30 hover:bg-violet-500/10">
          <Plus size={18} className="text-white" />
          New conversation
        </button>

        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
          Recent chats
        </p>

        <div className="space-y-1">
          {[
            'Building a modern portfolio',
            'React state management guide',
            'Best AI tools for developers',
          ].map((chat) => (
            <button
              key={chat}
              className="w-full truncate rounded-lg px-3 py-2.5 text-left text-sm text-zinc-500 transition hover:bg-white/[0.05] hover:text-zinc-200"
            >
              {chat}
            </button>
          ))}
        </div>

        <div className="mt-auto border-t border-white/[0.07] pt-4">
          <button className="flex w-full items-center gap-3 rounded-xl p-2 transition hover:bg-white/[0.05]">
            <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from fill-gray-950 to to-black text-sm font-semibold">
              {firstName.charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0 text-left">
              <p className="truncate text-sm font-medium text-zinc-200">{userName}</p>
              <p className="text-xs text-zinc-500">Free plan</p>
            </div>

            <ChevronDown size={16} className="ml-auto text-zinc-500" />
          </button>
        </div>
      </aside>

      {isSidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
        />
      )}

      <section className="relative min-h-screen lg:pl-[274px]">
        <header className="flex items-center justify-between px-5 py-5 sm:px-8">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white lg:hidden"
          >
            <Menu size={21} />
          </button>

          <div className="hidden items-center gap-2 text-sm text-zinc-500 sm:flex">
            <Compass size={16} />
            <span>Your intelligent search companion</span>
          </div>

          <button className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-xs text-zinc-400 transition hover:border-white/15 hover:bg-white/[0.07]">
            <Globe2 size={15} />
            <span>English</span>
            <ChevronDown size={14} />
          </button>
        </header>

        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl flex-col items-center justify-center px-5 pb-20 pt-6 sm:px-8">
          <div className="relative mb-8 grid size-24 place-items-center sm:size-28">
            <div className="absolute inset-[-32px] rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute inset-0 rounded-full border border-violet-300/30 bg-[radial-gradient(circle_at_35%_28%,#d8ccff_0%,#9e84ff_20%,#5d3dcc_54%,#25135c_76%,#120b2b_100%)] shadow-[inset_-12px_-15px_28px_rgba(14,5,49,0.7),inset_10px_8px_18px_rgba(255,255,255,0.3),0_0_45px_rgba(124,92,255,0.45)]" />
            <div className="absolute size-9 rounded-full border border-white/25 bg-white/10 blur-[1px]" />
            <Sparkles className="relative text-white" size={25} fill="currentColor" />
          </div>

          <div className="mb-9 text-center">
            <p className="mb-3 text-sm font-medium tracking-[0.16em] text-violet-300 uppercase">
              {/* Welcome to Tatvam AI */}
            </p>

            <h1 className="text-3xl font-medium tracking-[-0.045em] text-white sm:text-5xl">
              Let's Build Something, {firstName},
              <span className=" m-5 block bg-gradient-to-r from-violet-300 via-white to-indigo-300 bg-clip-text text-transparent">
                {/* {firstName}? */}
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
              Ask anything. Explore ideas, discover answers, and turn curiosity into
              clarity with Tatvam.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full rounded-[1.4rem] border border-white/[0.1] bg-[#15151b]/80 p-3 shadow-[0_22px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl transition focus-within:border-violet-400/45 focus-within:shadow-[0_22px_80px_rgba(85,55,200,0.18)]"
          >
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={3}
              placeholder="Ask Tatvam anything..."
              className="w-full resize-none bg-transparent px-3 py-2 text-base text-zinc-100 outline-none placeholder:text-zinc-600"
            />

            <div className="flex flex-wrap items-center justify-between gap-3 px-1 pt-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-zinc-100"
                >
                  <Globe2 size={16} className="text-violet-300" />
                  Search web
                </button>

                <button
                  type="button"
                  className="grid size-9 place-items-center rounded-lg text-zinc-500 transition hover:bg-white/[0.06] hover:text-zinc-200"
                >
                  <Mic size={17} />
                </button>
              </div>

              <button
                type="submit"
                disabled={!message.trim()}
                className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 text-white shadow-[0_8px_20px_rgba(109,75,255,0.32)] transition hover:scale-105 hover:shadow-[0_10px_28px_rgba(109,75,255,0.48)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
              >
                <ArrowUp size={19} strokeWidth={2.5} />
              </button>
            </div>
          </form>

          <div className="mt-6 grid w-full gap-3 sm:grid-cols-3">
            {quickActions.map(({ icon: Icon, label, color }) => (
              <button
                key={label}
                onClick={() => setMessage(label)}
                className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-violet-500/[0.06]"
              >
                <div className="grid size-9 place-items-center rounded-xl bg-white/[0.06] transition group-hover:bg-violet-500/15">
                  <Icon size={18} className={color} />
                </div>

                <span className="text-sm font-medium text-zinc-400 transition group-hover:text-zinc-100">
                  {label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 flex w-full flex-wrap justify-center gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setMessage(suggestion)}
                className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 text-xs text-zinc-500 transition hover:border-violet-400/25 hover:bg-violet-500/[0.08] hover:text-zinc-200"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <p className="mt-7 text-center text-xs text-zinc-600">
            Tatvam can make mistakes. Verify important information.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Dashboard