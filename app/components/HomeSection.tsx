"use client";

import { Users, TrendingDown, Building2, ClipboardCheck, ArrowRight, Sparkles, LucideIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type Services = {
    icon: LucideIcon,
    title: string,
    description: string
}

const services: Services[] = [
    {
        icon: Users,
        title: "Recrutamento & Seleção",
        description: "Atração e retenção dos melhores talentos para sua empresa.",
    },
    {
        icon: ClipboardCheck,
        title: "Departamento Pessoal",
        description: "Gestão completa de folha, admissões e conformidade legal.",
    },
    {
        icon: Building2,
        title: "Facilities",
        description: "Infraestrutura e ambiente de trabalho de alta performance.",
    },
    {
        icon: TrendingDown,
        title: "Redução de Custos",
        description: "Diagnóstico e otimização para resultados sustentáveis.",
    },
];

const animDelays = [
    "[animation-delay:0ms]",
    "[animation-delay:80ms]",
    "[animation-delay:160ms]",
    "[animation-delay:240ms]",
];

export default function HomeSection() {
    return (
        <section id="home" className="relative min-h-[calc(100dvh-92px)] w-full flex items-center bg-cream font-sans overflow-hidden px-6 py-14">

            {/* Background blobs */}
            <div className="pointer-events-none absolute -top-40 -right-24 w-150 h-150 rounded-full bg-brand/6 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-28 left-[8%] w-100 h-100 rounded-full bg-gold/[0.07] blur-[80px]" />
            {/* Subtle grid overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-100"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(15,30,60,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(15,30,60,0.03) 1px,transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Main grid */}
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                {/* ── Left: Image ── */}
                <div className="relative w-full max-w-lg mx-auto lg:mx-0">

                    {/* Gold accent ring */}
                    <div className="absolute -top-4 -left-4 right-4 -bottom-4 rounded-[20px] border-2 border-gold/30 pointer-events-none" />

                    {/* Image */}
                    <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(15,30,60,0.18)]">
                        <Image
                            src="/teste.png"
                            fill
                            alt="Consultoria de RH"
                            className="object-cover"
                        />
                        {/* Badge */}
                        <motion.div
                            initial={{ x: -120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gold/30 rounded-full px-4 py-2 shadow-md"
                        >
                            <Sparkles size={13} className="text-gold" />
                            <span className="text-[11px] font-semibold text-navy tracking-wide">Parceiro Estratégico</span>
                        </motion.div>
                    </div>

                    {/* Stats card */}
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute -bottom-5 -right-5 flex items-center gap-6 bg-navy rounded-2xl px-7 py-5 shadow-[0_16px_48px_rgba(15,30,60,0.28)]">
                        <div className="flex flex-col items-center gap-0.5">
                            <span className="font-serif text-[28px] leading-none text-gold-light">98%</span>
                            <span className="text-[10px] font-medium tracking-widest uppercase text-white/50">Satisfação</span>
                        </div>
                        <div className="w-px h-9 bg-white/10" />
                        <div className="flex flex-col items-center gap-0.5">
                            <span className="font-serif text-[28px] leading-none text-gold-light">+500</span>
                            <span className="text-[10px] font-medium tracking-widest uppercase text-white/50">Empresas</span>
                        </div>
                    </motion.div>
                </div>

                {/* ── Right: Text + Cards ── */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6">

                    {/* Eyebrow */}
                    <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-brand">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                        Consultoria Especializada
                    </div>

                    {/* Headline */}

                    <h1 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-navy font-normal">
                        Consultoria estratégica em RH, DP, Facilities e Redução de Custos{" "}
                    </h1>

                    {/* Description */}
                    <p className="text-base leading-[1.8] text-navy/60 max-w-130">
                        Atuamos como parceiros estratégicos das empresas, diagnosticando, estruturando e otimizando pessoas, processos e recursos para gerar eficiência operacional e resultados sustentáveis.

                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col md:flex-row gap-2 items-center w-full">
                        <button className="flex items-center gap-2 justify-center py-3.5 bg-navy w-full md:w-1/2 hover:bg-navy-mid cursor-pointer text-white text-[15px] font-semibold rounded-xl shadow-[0_4px_20px_rgba(15,30,60,0.25)] hover:shadow-[0_8px_28px_rgba(15,30,60,0.32)] hover:-translate-y-0.5 transition-all duration-200">
                            Solicitar proposta
                            <ArrowRight size={16} />
                        </button>
                        <button className="py-3.5  border border-navy/20 w-full md:w-1/2 text-center hover:border-navy/40 cursor-pointer hover:bg-cream-dark backdrop-blur-lg bg-neutral-50/10 text-navy text-[15px] font-medium rounded-xl transition-all duration-200">
                            Falar com um especialista
                        </button>
                    </div>

                    {/* Service cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                        {services.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={i}
                                    className={`flex items-start gap-3 p-4 bg-white border border-navy/[0.07] rounded-xl shadow-sm hover:border-brand/20 hover:shadow-[0_6px_20px_rgba(34,86,199,0.08)] hover:-translate-y-0.5 transition-all duration-200 animate-fade-up ${animDelays[i]}`}
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-brand/10 to-brand/5 flex items-center justify-center">
                                        <Icon size={19} className="text-brand" />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <h3 className="text-[13px] font-semibold text-navy leading-snug">{service.title}</h3>
                                        <p className="text-[12px] text-navy/55 leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
