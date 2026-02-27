import {
	ArrowRight,
	Briefcase,
	Users,
	ShieldCheck,
	Target,
	Send,
	Star,
	Clock,
	Heart,
} from "lucide-react";

const companyBenefits = [
	{ icon: Target, label: "Foco no core business" },
	{ icon: ShieldCheck, label: "Segurança jurídica" },
	{ icon: Briefcase, label: "Decisões estratégicas" },
	{ icon: Users, label: "Gestão de pessoas" },
];

const candidateHighlights = [
	{ icon: Heart, title: "Processos humanizados", description: "Cada candidato é tratado com respeito e atenção em todas as etapas." },
	{ icon: Star, title: "Transparência total", description: "Comunicação clara sobre cada fase do processo seletivo." },
	{ icon: Clock, title: "Agilidade e organização", description: "Processos estruturados para respeitar o seu tempo." },
];

export default function ForCompanies() {
	return (
		<>
			{/* ═══════════════════════════════════════
          PARA EMPRESAS
      ═══════════════════════════════════════ */}
			<section id="forCompanies" className="relative w-full bg-cream overflow-hidden px-6 py-24">

				{/* Background */}
				<div className="pointer-events-none absolute -top-40 right-0 w-125 h-125 rounded-full bg-brand/6 blur-[100px]" />
				<div className="pointer-events-none absolute bottom-0 left-[10%] w-100 h-100 rounded-full bg-gold/6 blur-[80px]" />
				<div
					className="pointer-events-none absolute inset-0"
					style={{
						backgroundImage:
							"linear-gradient(rgba(15,30,60,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(15,30,60,0.03) 1px,transparent 1px)",
						backgroundSize: "48px 48px",
					}}
				/>

				<div className="relative z-10 w-full max-w-7xl mx-auto">
					<div className="flex flex-col lg:flex-row items-center gap-14">

						{/* Left: text */}
						<div className="w-full lg:w-1/2 flex flex-col gap-6">
							<div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-brand">
								<span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
								Para Empresas
							</div>

							<h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-navy font-normal">
								Seu negócio no centro,{" "}
								<em className="text-brand italic">nós cuidamos do resto</em>
							</h2>

							<p className="text-base leading-[1.8] text-navy/60 max-w-120">
								Atuamos como parceiros estratégicos da sua empresa, apoiando decisões
								em pessoas, processos e custos, para que você tenha foco total no
								core business.
							</p>

							{/* Benefit pills */}
							<div className="flex flex-wrap gap-3 mt-2">
								{companyBenefits.map((item, i) => {
									const Icon = item.icon;
									return (
										<div
											key={i}
											className="flex items-center gap-2 px-4 py-2.5 bg-white border border-navy/8 rounded-xl shadow-sm text-[13px] font-medium text-navy/70"
										>
											<Icon size={15} className="text-brand shrink-0" />
											{item.label}
										</div>
									);
								})}
							</div>

							<a
								href="/proposta"
								className="self-start mt-2 flex items-center gap-2 px-7 py-3.5 bg-navy hover:bg-navy-mid text-white text-[14px] font-semibold rounded-xl shadow-[0_4px_20px_rgba(15,30,60,0.22)] hover:shadow-[0_8px_28px_rgba(15,30,60,0.3)] hover:-translate-y-0.5 transition-all duration-200"
							>
								Solicitar proposta personalizada
								<ArrowRight size={16} />
							</a>
						</div>

						{/* Right: visual card */}
						<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
							<div className="relative w-full max-w-md">

								{/* Main card */}
								<div className="bg-navy rounded-2xl p-8 shadow-[0_32px_80px_rgba(15,30,60,0.2)]">
									<div className="flex flex-col gap-6">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center">
												<Briefcase size={18} className="text-gold" />
											</div>
											<div>
												<p className="text-white font-semibold text-[15px]">Parceria Estratégica</p>
												<p className="text-white/40 text-[12px]">Consultoria completa</p>
											</div>
										</div>

										<div className="h-px bg-white/10" />

										{["RH & Recrutamento", "Departamento Pessoal", "Facilities", "Redução de Custos"].map((item, i) => (
											<div key={i} className="flex items-center justify-between">
												<span className="text-white/60 text-[13px]">{item}</span>
												<span className="px-2.5 py-1 bg-gold/15 border border-gold/20 rounded-full text-[11px] font-semibold text-gold-light">Ativo</span>
											</div>
										))}

										<div className="h-px bg-white/10" />

										<div className="flex items-center justify-between">
											<span className="text-white/40 text-[12px]">Resultado médio</span>
											<span className="font-serif text-2xl text-gold-light">-32% custos</span>
										</div>
									</div>
								</div>

								{/* Floating accent */}
								<div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gold/10 border border-gold/20 backdrop-blur-sm -z-10" />
								<div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-brand/10 border border-brand/10 -z-10" />
							</div>
						</div>

					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════
          PARA COLABORADORES E CANDIDATOS
      ═══════════════════════════════════════ */}
			<section className="relative w-full bg-navy overflow-hidden px-6 py-24">

				{/* Background */}
				<div className="pointer-events-none absolute -top-32 left-0 w-125 h-125 rounded-full bg-brand/20 blur-[100px]" />
				<div className="pointer-events-none absolute bottom-0 right-0 w-100 h-100 rounded-full bg-gold/10 blur-[80px]" />
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
					<div className="flex flex-col gap-4 max-w-2xl mx-auto text-center items-center">
						<div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-gold">
							<span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
							Para Colaboradores e Candidatos
						</div>
						<h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-white font-normal">
							Processos feitos para{" "}
							<em className="text-gold italic">pessoas de verdade</em>
						</h2>
						<p className="text-base leading-[1.8] text-white/50">
							Atuamos com processos transparentes, humanizados e organizados,
							garantindo segurança e clareza em cada etapa.
						</p>
					</div>

					{/* Highlight cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
						{candidateHighlights.map((item, i) => {
							const Icon = item.icon;
							return (
								<div
									key={i}
									className="flex flex-col items-center text-center gap-4 p-8 bg-white/4 border border-white/8 rounded-2xl hover:bg-white/[0.07] hover:border-gold/20 hover:-translate-y-0.5 transition-all duration-200"
								>
									<div className="w-12 h-12 rounded-xl bg-linear-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center">
										<Icon size={22} className="text-gold" />
									</div>
									<h3 className="font-semibold text-white text-[15px]">{item.title}</h3>
									<p className="text-[14px] leading-relaxed text-white/50">{item.description}</p>
								</div>
							);
						})}
					</div>

					{/* CTA block */}
					<div className="flex flex-col items-center gap-6 text-center pt-4">
						<p className="text-white/60 text-base max-w-lg leading-relaxed">
							Confira nossas oportunidades e faça parte de processos seletivos
							transparentes e humanizados.
						</p>
						<a
							href="/curriculo"
							className="flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-navy text-[15px] font-semibold rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:shadow-[0_8px_28px_rgba(201,168,76,0.4)] hover:-translate-y-0.5 transition-all duration-200"
						>
							<Send size={16} />
							Enviar currículo
						</a>
					</div>

				</div>
			</section>
		</>
	);
}
