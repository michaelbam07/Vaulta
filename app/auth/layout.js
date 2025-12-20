export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-zinc-200 rounded-2xl shadow-sm p-8">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold">Vaulta</h1>
          <p className="text-sm text-zinc-500 mt-1">
            Secure access to your account
          </p>
        </div>

        {children}
      </div>
    </div>
  )
}
