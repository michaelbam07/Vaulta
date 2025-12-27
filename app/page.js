"use client"

import Link from "next/link"
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Smartphone, 
  Lock, 
  Globe 
} from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-secondary/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-3">
              <ShieldCheck size={14} />
              Bank-Grade Security
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary leading-[0.9]">
              Banking <br />
              <span className="text-secondary">Redefined.</span>
            </h1>

            <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Vaulta gives you the power of a global bank with the simplicity of a modern app. Track, transfer, and grow your wealth with total transparency.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 w-full sm:w-auto">
              <Link
                href="/auth/login"
                className="group px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
              >
                Open Your Vault
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="px-8 py-4 rounded-xl border-2 border-border font-bold hover:bg-muted transition-all">
                View Demo
              </button>
            </div>
          </div>

          {/* Feature Visual */}
          <div className="relative group perspective-1000 hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative rounded-3xl border border-border bg-card p-4 shadow-2xl transition-transform duration-500 hover:rotate-y-[-5deg]">
              <div className="aspect-[4/3] rounded-2xl bg-muted/50 overflow-hidden flex flex-col p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="h-8 w-24 bg-primary/20 rounded-lg animate-pulse" />
                  <div className="h-10 w-10 rounded-full bg-secondary/20 animate-pulse" />
                </div>
                <div className="space-y-4">
                  <div className="h-24 w-full bg-primary/10 rounded-xl animate-pulse" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-secondary/5 rounded-xl animate-pulse" />
                    <div className="h-32 bg-primary/5 rounded-xl animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card border-y border-border relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-secondary mb-4">Features</h2>
            <p className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Everything you need in a modern bank.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Overview",
                desc: "Instant insight into your total net worth and daily cash flow.",
                icon: <BarChart3 className="text-secondary" />,
              },
              {
                title: "Instant Transfers",
                desc: "Send money across the globe in seconds, not days.",
                icon: <Zap className="text-secondary" />,
              },
              {
                title: "Smart Insights",
                desc: "AI-powered spending categories help you save more every month.",
                icon: <Smartphone className="text-secondary" />,
              },
              {
                title: "AES-256 Encryption",
                desc: "Your data is locked behind the same security banks use.",
                icon: <Lock className="text-secondary" />,
              },
              {
                title: "Minimalist Design",
                desc: "No fine print. No hidden menus. Just pure utility.",
                icon: <Globe className="text-secondary" />,
              },
              {
                title: "Global Accessibility",
                desc: "Manage your vault from any device, anywhere in the world.",
                icon: <Smartphone className="text-secondary" />,
              },
            ].map((feature, idx) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl border border-border bg-background hover:border-secondary/50 transition-all hover:shadow-lg"
              >
                <div className="mb-4 p-3 rounded-xl bg-secondary/10 w-fit group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-primary">{feature.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/CTA Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        {/* Abstract Circle Decoration */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to secure your financial future?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-12">
            Join 50,000+ users who trust Vaulta to manage their money every day.
          </p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center gap-2 bg-secondary text-primary px-10 py-5 rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-2xl shadow-secondary/20"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </main>
  );
}