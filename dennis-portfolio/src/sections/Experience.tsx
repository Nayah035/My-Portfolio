export function Experience() {
  const roles = [
    {
      org: "Rupsa Sacco",
      period: "June 2024 – Jan 2025",
      details: [
        "Maintained secure systems; implemented least-privilege access and audit trails.",
        "Contributed to internal tools improving operational efficiency.",
      ],
    },
    {
      org: "County Assembly of Kiambu",
      period: "—",
      details: [
        "Supported IT operations and assisted in network hardening tasks.",
      ],
    },
    {
      org: "Ruaraka Academy",
      period: "—",
      details: [
        "Worked on school systems and basic infrastructure management.",
      ],
    },
  ];

  return (
    <section id="experience" className="container py-16 md:py-24">
      <h2 className="font-display text-2xl md:text-3xl">Experience</h2>
      <div className="mt-8 relative">
        <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10" />
        <ol className="space-y-8">
          {roles.map((r) => (
            <li key={r.org} className="pl-8 relative">
              <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-accent" />
              <div className="flex items-baseline gap-2">
                <h3 className="text-lg font-medium">{r.org}</h3>
                <span className="text-xs text-muted">{r.period}</span>
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted space-y-1">
                {r.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


