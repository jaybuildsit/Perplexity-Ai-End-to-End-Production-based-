import React from 'react'

const AuthInput = ({ label, type = 'text', name, value, onChange, placeholder, autoComplete }) => {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="w-full rounded-2xl border border-white/10 bg-[#1b1b1b] px-4 py-3.5 text-sm text-slate-100 shadow-inner shadow-black/20 outline-none transition duration-300 placeholder:text-slate-500 focus:border-violet-400/70 focus:ring-2 focus:ring-violet-400/25"
      />
    </label>
  )
}

export default AuthInput
