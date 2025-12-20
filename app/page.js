import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-zinc-900 text-4xl md:text-5xl font-semibold tracking-tight">
            Banking made simple, secure, and transparent.
          </h1>

          <p className="mt-6 text-zinc-600 max-w-md">
            Vaulta helps you manage your money with clarity — 
            track spending, move funds, and stay in control.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/auth/login"
              className="px-6 py-3 rounded-lg bg-zinc-900 text-white text-sm hover:bg-zinc-800 inline-flex items-center justify-center"
            >
              Get Started
            </Link>


            <button className=" text-zinc-900 px-6 py-3 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100">
              Learn More
            </button>
          </div>
        </div>

        {/* Placeholder visual */}
        <div className="hidden md:block rounded-2xl bg-white border border-zinc-200 p-6 shadow-sm">
          <div className="h-64 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-400">
            Dashboard Preview
          </div>
        </div>
      </section>
      {/* Features */}
      <section className=" text-zinc-900 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-semibold text-center">
            Everything you need in a modern bank
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Clear account overview",
                desc: "Understand your balances and activity at a glance.",
              },
              {
                title: "Fast, reliable transfers",
                desc: "Move money securely with confidence.",
              },
              {
                title: "Smart insights",
                desc: "Visual tools to help you track and manage spending.",
              },
              {
                title: "Built-in security",
                desc: "Designed with privacy and protection in mind.",
              },
              {
                title: "Clean, simple interface",
                desc: "No clutter. No confusion. Just what you need.",
              },
              {
                title: "Accessible anywhere",
                desc: "Optimized for desktop and mobile devices.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-zinc-200 p-6"
              >
                <h3 className="font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Security */}
      <section className="bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-semibold">
            Designed with security at its core
          </h2>

          <p className="mt-4 text-zinc-600">
            We focus on strong design principles, transparency, and
            user-first security practices to keep your data protected.
          </p>

          <div className=" text-zinc-900 mt-10 grid sm:grid-cols-3 gap-6 text-sm">
            <div className="p-4 rounded-lg bg-white border border-zinc-200">
              Secure sessions
            </div>
            <div className="p-4 rounded-lg bg-white border border-zinc-200">
              Activity monitoring
            </div>
            <div className="p-4 rounded-lg bg-white border border-zinc-200">
              Privacy-focused design
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
 