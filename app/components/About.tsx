import Image from "next/image";
import { Target, Eye, Heart } from "lucide-react";

const mvv = [
    {
        icon: Target,
        title: "Missão",
        description: "Gerar valor às empresas por meio da organização estratégica de pessoas, processos e recursos.",
    },
    {
        icon: Eye,
        title: "Visão",
        description: "Ser referência em consultoria estratégica e eficiência operacional para empresas em crescimento.",
    },
    {
        icon: Heart,
        title: "Valores",
        description: "Ética, transparência, inovação e compromisso com resultados sustentáveis.",
    },
];

export default function About() {
    return (
        <section id="about" className="h-screen relative w-full flex justify-center bg-cream overflow-hidden px-6 py-14">

          

            <div className="relative z-10 w-full max-w-7xl flex flex-col gap-20">

                {/* ── Top: image + text ── */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-14">

                    {/* Image */}
                    <div className="relative w-full lg:w-3/5 shrink-0">

                        {/* Gold accent ring */}
                        <div className="absolute -top-4 -left-4 right-4 -bottom-4 rounded-[20px] border-2 border-gold/30 pointer-events-none" />

                        <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(15,30,60,0.15)]">
                            <Image
                                src="/imgtemp.jpg"
                                alt="Sobre a empresa"
                                fill
                                className="object-cover"
                            />
                            {/* Dark linear overlay at bottom */}
                            <div className="absolute inset-0 bg-linear-to-t from-navy/30 via-transparent to-transparent" />

                            {/* Years badge */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-gold/30 rounded-2xl px-5 py-3 shadow-md">
                                <span className="font-serif text-3xl text-navy leading-none">+10</span>
                                <p className="text-[11px] font-semibold tracking-widest uppercase text-navy/50 mt-0.5">Anos de mercado</p>
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="w-full lg:w-2/5 flex flex-col gap-6">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-brand">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                            Quem somos
                        </div>

                        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-navy font-normal">
                            Uma consultoria feita para{" "}
                            <em className="text-brand italic">gerar resultados</em>
                        </h2>

                        <p className="text-base leading-[1.8] text-navy/60">
                            Somos uma empresa de consultoria em RH, Departamento Pessoal, Facilities e
                            Redução de Custos, especializada em apoiar empresas na tomada de decisões
                            estratégicas, garantindo eficiência, conformidade e crescimento sustentável.
                        </p>

                        <p className="text-base leading-[1.8] text-navy/60">
                            Atuamos com diagnóstico preciso, visão estratégica e foco em performance,
                            garantindo otimização de custos, segurança trabalhista e melhoria contínua
                            dos processos internos, sempre alinhados ao negócio do cliente.
                        </p>

                        <a
                            href="/sobre"
                            className="self-start mt-2 px-7 py-3.5 bg-navy hover:bg-navy-mid text-white text-[14px] font-semibold rounded-xl shadow-[0_4px_20px_rgba(15,30,60,0.22)] hover:shadow-[0_8px_28px_rgba(15,30,60,0.3)] hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Conheça nossa história
                        </a>
                    </div>
                </div>

                {/* ── Bottom: Missão / Visão / Valores ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {mvv.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={i}
                                className="group relative flex flex-col items-center text-center gap-4 p-6 bg-white border border-navy/[0.07] rounded-2xl shadow-sm hover:border-brand/20 hover:shadow-[0_8px_28px_rgba(34,86,199,0.09)] hover:-translate-y-1 transition-all duration-200"
                            >
                                {/* Top gold bar */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-linear-to-r from-gold/40 via-gold to-gold/40 rounded-full" />

                                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-brand/10 to-brand/5 flex items-center justify-center mt-2">
                                    <Icon size={22} className="text-brand" />
                                </div>

                                <h3 className="font-serif text-xl text-navy">{item.title}</h3>

                                <p className="text-[14px] leading-relaxed text-navy/55">{item.description}</p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
