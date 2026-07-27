import React, { useState } from 'react'
import { Link } from 'react-router'
import AuthInput from '../components/AuthInput'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Register form data:', formData)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.28),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.24),_transparent_20%),linear-gradient(135deg,_#050816_0%,_#120a25_45%,_#06070d_100%)] px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative hidden flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.3),_transparent_25%),linear-gradient(135deg,_rgba(30,27,75,0.92),_rgba(2,6,23,0.98))] p-10 lg:flex">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.06)_50%,transparent_100%)] opacity-40" />
            <div className="absolute -left-6 top-16 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute bottom-8 right-0 h-52 w-52 rounded-full bg-fuchsia-500/20 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex rounded-2xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur">
                <span className="text-sm font-semibold tracking-[0.3em] text-slate-100 uppercase">Create</span>
              </div>
              <h2 className="max-w-lg text-4xl font-semibold leading-tight text-white">
                Launch with a refined first impression.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                Create your account and step into a calm, premium experience designed for modern product teams.
              </p>
            </div>

            <div className="relative z-10 space-y-3">
              {[
                ['01', 'Instant setup'],
                ['02', 'Secure by default'],
                ['03', 'Beautiful workflows'],
              ].map(([step, title]) => (
                <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 backdrop-blur">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-indigo-200">
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
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-400">Create account</p>
                <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Create your Account</h1>
                <p className="mt-2 text-sm text-slate-400">Start your journey with a secure, elegant setup.</p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <AuthInput
                  label="Username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a username"
                  autoComplete="username"
                />

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
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-4 py-3.5 font-semibold text-white shadow-[0_18px_45px_rgba(168,85,247,0.28)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_22px_55px_rgba(168,85,247,0.35)]"
                >
                  Create Account
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-400">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-violet-400 transition hover:text-violet-300">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
