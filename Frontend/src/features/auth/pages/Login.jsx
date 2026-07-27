import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import AuthInput from '../components/AuthInput'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { handleLogin } = useAuth()

  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Login form data:', formData)

    try {
      await handleLogin(formData)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.35),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.25),_transparent_20%),linear-gradient(135deg,_#050816_0%,_#120a25_42%,_#06070d_100%)] px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative hidden flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.35),_transparent_24%),linear-gradient(135deg,_rgba(88,28,135,0.85),_rgba(3,7,18,0.95))] p-10 lg:flex">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.06)_50%,transparent_100%)] opacity-40" />
            <div className="absolute -left-8 top-20 h-40 w-40 rounded-full bg-fuchsia-500/25 blur-3xl" />
            <div className="absolute bottom-10 right-0 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur">
                <span className="text-sm font-semibold tracking-[0.3em] text-slate-100 uppercase">Perplexity</span>
              </div>
              <h2 className="max-w-lg text-4xl font-semibold leading-tight text-white">
                Design fast. Move with intent.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                A premium workspace for teams who want clarity, momentum, and a seamless experience from first click to final launch.
              </p>
            </div>

            <div className="relative z-10 space-y-3">
              {[
                ['01', 'Thoughtful onboarding'],
                ['02', 'Intelligent collaboration'],
                ['03', 'Focused execution'],
              ].map(([step, title]) => (
                <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 backdrop-blur">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-violet-200">
                    {step}
                  </div>
                  <p className="text-sm text-slate-300">{title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center p-6 sm:p-8 lg:p-10">
            <div className="w-full max-w-md animate-[fadeIn_0.6s_ease-out]">
              <div className="mb-8 text-center lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">Welcome back</p>
                <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Welcome Back</h1>
                <p className="mt-2 text-sm text-slate-400">Sign in to continue with your workspace.</p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <AuthInput
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  autoComplete="email"
                />

                <AuthInput
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />

                <div className="flex items-center justify-end">
                  <a href="#" className="text-sm font-medium text-violet-400 transition hover:text-violet-300">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 px-4 py-3.5 font-semibold text-white shadow-[0_18px_45px_rgba(139,92,246,0.28)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_22px_55px_rgba(139,92,246,0.35)]"
                >
                  Login
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-400">
                Don&apos;t have an account?{' '}
                <Link to="/register" className="font-semibold text-violet-400 transition hover:text-violet-300">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
