import {
  Users,
  ClipboardCheck,
  Building2,
  TrendingDown,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Recrutamento e Seleção Consultivo",
    description:
      "Atuação estratégica desde o diagnóstico do perfil até a contratação, garantindo profissionais alinhados à cultura, aos objetivos e ao momento do negócio.",
  },
  {
    icon: ClipboardCheck,
    title: "Departamento Pessoal (DP) Consultivo",
    description:
      "Gestão trabalhista com visão estratégica: admissões, demissões, folha, encargos, benefícios e orientação contínua para redução de riscos e passivos trabalhistas.",
  },
  {
    icon: Building2,
    title: "Facilities Estratégico",
    description:
      "Gestão e otimização de serviços essenciais com foco em eficiência operacional, controle de custos e qualidade na entrega.",
  },
  {
    icon: TrendingDown,
    title: "Redução de Custos Inteligente",
    description:
      "Análise detalhada de despesas, revisão de contratos e processos, identificação de desperdícios e implementação de soluções que reduzem custos sem comprometer a operação.",
  },
];

const differentials = [
  "Atuação consultiva e personalizada",
  "Soluções integradas (RH + DP + Facilities)",
  "Foco em eficiência, governança e redução de custos",
  "Segurança jurídica e conformidade legal",
  "Visão estratégica de negócio",
  "Metodologia personalizada",
  "Processos ágeis e assertivos",
  "Foco em cultura organizacional",
  "Atendimento humanizado",
  "Confidencialidade e ética",
];

export default function Services() {
  return (
    <>
      {/* ═══════════════════════════════════════
          NOSSOS SERVIÇOS
      ═══════════════════════════════════════ */}
      <section id="services" className="relative w-full bg-navy overflow-hidden px-6 py-24">

        {/* Background blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-125 h-125 rounded-full bg-brand/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 left-0 w-100 h-100 rounded-full bg-gold/10 blur-[80px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-14">

          {/* Header */}
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              O que fazemos
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-white font-normal">
              Soluções que{" "}
              <em className="text-gold italic">transformam</em> sua operação
            </h2>
            <p className="text-base leading-[1.8] text-white/50">
              Cada serviço é entregue com visão consultiva, metodologia própria e
              foco total nos resultados do seu negócio.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group flex gap-5 p-7 bg-white/4 border border-white/8 rounded-2xl hover:bg-white/[0.07] hover:border-gold/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center mt-0.5">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white text-[15px] leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-white/50">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DIFERENCIAIS
      ═══════════════════════════════════════ */}
      <section className="relative w-full bg-cream overflow-hidden px-6 py-24">

        {/* Background */}
        <div className="pointer-events-none absolute top-0 right-0 w-125 h-125 rounded-full bg-brand/5 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-100 h-100 rounded-full bg-gold/6 blur-[80px]" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,30,60,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(15,30,60,0.03) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

          {/* Left: text */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-brand">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              Por que nos escolher
            </div>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-navy font-normal">
              Diferenciais que fazem a{" "}
              <em className="text-brand italic">diferença</em>
            </h2>
            <p className="text-base leading-[1.8] text-navy/60">
              Nossa abordagem combina profundidade técnica com visão de negócio,
              entregando soluções que vão além do operacional e impactam
              diretamente os resultados da sua empresa.
            </p>
            <a
              href="/proposta"
              className="self-start mt-2 px-7 py-3.5 bg-navy hover:bg-navy-mid text-white text-[14px] font-semibold rounded-xl shadow-[0_4px_20px_rgba(15,30,60,0.22)] hover:shadow-[0_8px_28px_rgba(15,30,60,0.3)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Solicitar proposta
            </a>
          </div>

          {/* Right: differentials list */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {differentials.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 bg-white border border-navy/[0.07] rounded-xl shadow-sm hover:border-brand/20 hover:shadow-[0_6px_20px_rgba(34,86,199,0.08)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-linear-to-br from-brand/15 to-brand/5 flex items-center justify-center mt-0.5">
                  <Check size={13} className="text-brand" strokeWidth={2.5} />
                </div>
                <span className="text-[13px] font-medium text-navy/75 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
