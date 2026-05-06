export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Freelance Profitability
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Your True{" "}
          <span className="text-[#58a6ff]">Profit Margin</span>
          {" "}on Every Project
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ProfitTrack combines time tracking and expense management to reveal exactly how much you actually earn — per client, per project, per hour.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking Profit — $10/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "⏱", title: "Time Tracking", desc: "Log hours per project with one click. See billable vs non-billable time instantly." },
          { icon: "💸", title: "Expense Tracking", desc: "Attach expenses to projects. Software, contractors, tools — all counted against profit." },
          { icon: "📊", title: "Profit Analytics", desc: "Real-time dashboards show margin per client, project type, and time period." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$10</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited projects & clients",
              "Time + expense tracking",
              "Profit margin dashboards",
              "CSV export",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How is this different from a simple time tracker?",
              a: "Most time trackers only show hours. ProfitTrack subtracts all your project expenses — software, subcontractors, tools — so you see your actual take-home profit, not just revenue."
            },
            {
              q: "Can I track multiple clients and project types?",
              a: "Yes. You can create unlimited clients and projects, tag them by type, and filter your analytics to compare profitability across any dimension."
            },
            {
              q: "What happens if I cancel?",
              a: "You can cancel anytime from your billing portal. Your data remains accessible for 30 days after cancellation so you can export everything."
            }
          ].map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} ProfitTrack. All rights reserved.
      </footer>
    </main>
  );
}
