"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        label: "Telefone / WhatsApp",
        value: "( ) -",
        href: "https://wa.me/55",
    },
    {
        icon: Mail,
        label: "E-mail",
        value: "contato@empresa.com.br",
        href: "mailto:contato@empresa.com.br",
    },
    {
        icon: MapPin,
        label: "Localização",
        value: "Atendimento em todo o Brasil",
        href: null,
    },
];

export default function Contact() {
    const [form, setForm] = useState({
        name: "", company: "", email: "", phone: "", message: "",
    });
    const [sent, setSent] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // TODO: conectar ao backend/email
        setSent(true);
    }

    return (
        <section className="relative w-full bg-navy overflow-hidden px-6 py-24">

            {/* Background */}
            <div className="pointer-events-none absolute -top-40 right-0 w-125 h-125 rounded-full bg-brand/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 left-0 w-100 h-100 rounded-full bg-gold/10 blur-[80px]" />
            <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

                {/* ── Left: info ── */}
                <div className="w-full lg:w-2/5 flex flex-col gap-8 lg:sticky lg:top-28">

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-gold">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                            Fale conosco
                        </div>
                        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.15] text-white font-normal">
                            Vamos conversar sobre o{" "}
                            <em className="text-gold italic">seu negócio</em>
                        </h2>
                        <p className="text-base leading-[1.8] text-white/50">
                            Preencha o formulário ou entre em contato diretamente pelos
                            canais abaixo. Respondemos em até 24 horas.
                        </p>
                    </div>

                    {/* Contact cards */}
                    <div className="flex flex-col gap-3">
                        {contactInfo.map((item, i) => {
                            const Icon = item.icon;
                            const inner = (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 p-5 bg-white/4 border border-white/8 rounded-xl hover:bg-white/[0.07] hover:border-gold/20 transition-all duration-200"
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center">
                                        <Icon size={18} className="text-gold" />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[11px] font-semibold tracking-wider uppercase text-white/35">{item.label}</span>
                                        <span className="text-[14px] font-medium text-white/80">{item.value}</span>
                                    </div>
                                    {item.href && (
                                        <ArrowRight size={15} className="text-white/20 ml-auto shrink-0" />
                                    )}
                                </div>
                            );

                            return item.href ? (
                                <a key={i} href={item.href} target="_blank" rel="noreferrer" className="group">
                                    {inner}
                                </a>
                            ) : (
                                <div key={i}>{inner}</div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Right: form ── */}
                <div className="w-full lg:w-3/5">
                    <div className="bg-white/4 border border-white/8 rounded-2xl p-8 md:p-10">

                        {sent ? (
                            <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                                <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                                    <Send size={24} className="text-gold" />
                                </div>
                                <h3 className="font-serif text-2xl text-white">Mensagem enviada!</h3>
                                <p className="text-white/50 text-base max-w-sm">
                                    Recebemos seu contato e retornaremos em até 24 horas.
                                </p>
                                <button
                                    onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", phone: "", message: "" }); }}
                                    className="mt-2 text-[13px] font-medium text-gold/70 hover:text-gold underline underline-offset-4 transition-colors"
                                >
                                    Enviar outra mensagem
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[11px] font-semibold tracking-wider uppercase text-white/35">Nome</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Seu nome completo"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/1 rounded-xl text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-gold/40 focus:bg-white/[0.07] transition-all duration-200"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[11px] font-semibold tracking-wider uppercase text-white/35">Empresa</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            placeholder="Nome da empresa"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/1 rounded-xl text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-gold/40 focus:bg-white/[0.07] transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[11px] font-semibold tracking-wider uppercase text-white/35">E-mail</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="seu@email.com.br"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/1 rounded-xl text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-gold/40 focus:bg-white/[0.07] transition-all duration-200"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-[11px] font-semibold tracking-wider uppercase text-white/35">Telefone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="(  ) 9 ----  ----"
                                            className="w-full px-4 py-3 bg-white/5 border border-white/1 rounded-xl text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-gold/40 focus:bg-white/[0.07] transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[11px] font-semibold tracking-wider uppercase text-white/35">Mensagem</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Conte um pouco sobre o que você precisa..."
                                        className="w-full px-4 py-3 bg-white/5 border border-white/1 rounded-xl text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-gold/40 focus:bg-white/[0.07] transition-all duration-200 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-gold hover:bg-gold-light text-navy text-[15px] font-semibold rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_8px_28px_rgba(201,168,76,0.35)] hover:-translate-y-0.5 transition-all duration-200 mt-1"
                                >
                                    <Send size={16} />
                                    Enviar mensagem
                                </button>

                            </form>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}
