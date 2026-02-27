import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Processo rápido, transparente e muito profissional.",
        author: "Ana Lima",
        role: "Diretora de RH",
        company: "Empresa A",
        initials: "AL",
    },
    {
        quote: "Encontramos talentos alinhados com nossa cultura.",
        author: "Carlos Mendes",
        role: "CEO",
        company: "Empresa B",
        initials: "CM",
    },
    {
        quote: "A consultoria trouxe clareza e agilidade para nossos processos internos.",
        author: "Fernanda Costa",
        role: "Gerente Operacional",
        company: "Empresa C",
        initials: "FC",
    },
];

export default function Testimonials() {
    return (
        <section className="relative w-full bg-cream overflow-hidden px-6 py-24">

            {/* Background */}
            <div className="pointer-events-none absolute -top-40 right-0 w-125 h-125 rounded-full bg-brand/5 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-0 left-[5%] w-100 h-100 rounded-full bg-gold/6 blur-[80px]" />
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(15,30,60,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(15,30,60,0.03) 1px,transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-14">

                {/* Header */}
                <div className="flex flex-col gap-4 max-w-xl">
                    <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-brand">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                        Depoimentos
                    </div>
                    <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-navy font-normal">
                        O que nossos{" "}
                        <em className="text-brand italic">clientes dizem</em>
                    </h2>
                    <p className="text-base leading-[1.8] text-navy/60">
                        Resultados reais de empresas que escolheram uma consultoria estratégica
                        de verdade.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="group relative flex flex-col gap-6 p-8 bg-white border border-navy/[0.07] rounded-2xl shadow-sm hover:border-brand/20 hover:shadow-[0_8px_28px_rgba(34,86,199,0.09)] hover:-translate-y-1 transition-all duration-200"
                        >
                            {/* Top gold bar */}
                            <div className="absolute top-0 left-8 w-10 h-1 bg-linear-to-r from-gold/40 via-gold to-gold/40 rounded-full" />

                            {/* Quote icon */}
                            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand/10 to-brand/5 flex items-center justify-center mt-1">
                                <Quote size={18} className="text-brand" />
                            </div>

                            {/* Quote text */}
                            <p className="font-serif text-[1.1rem] leading-relaxed text-navy/80 italic flex-1">
                                "{t.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-navy/[0.07]">
                                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                                    <span className="text-[12px] font-semibold text-gold-light">{t.initials}</span>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-[13px] font-semibold text-navy">{t.author}</span>
                                    <span className="text-[12px] text-navy/45">{t.role} · {t.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
