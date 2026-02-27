import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Empresas", href: "/empresas" },
    { label: "Contato", href: "/contato" },
];

const services = [
    "Recrutamento & Seleção",
    "Departamento Pessoal",
    "Facilities",
    "Redução de Custos",
];

export default function Footer() {
    return (
        <footer className="relative w-full bg-cream border-t border-navy/8 overflow-hidden">

            {/* Background blob */}
            <div className="pointer-events-none absolute bottom-0 right-0 w-100 h-75 rounded-full bg-brand/4 blur-[80px]" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

                {/* Top grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-navy/[0.07]">

                    {/* Brand */}
                    <div className="flex flex-col gap-5 lg:col-span-1">
                        <a href="/" className="flex items-center gap-2 group w-fit">
                            <span className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center shadow-sm">
                                <span className="font-serif text-gold-light text-base leading-none">L</span>
                            </span>
                            <span className="font-serif text-xl text-navy tracking-tight">Logo</span>
                        </a>
                        <p className="text-[13px] leading-relaxed text-navy/50 max-w-55">
                            Consultoria estratégica em RH, DP, Facilities e Redução de Custos.
                        </p>
                        <div className="flex flex-col gap-2.5">
                            <a href="https://wa.me/55" className="flex items-center gap-2 text-[12px] text-navy/50 hover:text-navy transition-colors">
                                <Phone size={13} className="text-brand shrink-0" /> ( ) -
                            </a>
                            <a href="mailto:contato@empresa.com.br" className="flex items-center gap-2 text-[12px] text-navy/50 hover:text-navy transition-colors">
                                <Mail size={13} className="text-brand shrink-0" /> contato@empresa.com.br
                            </a>
                            <span className="flex items-center gap-2 text-[12px] text-navy/50">
                                <MapPin size={13} className="text-brand shrink-0" /> Todo o Brasil
                            </span>
                        </div>
                    </div>

                    {/* Nav */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-navy/40">Navegação</h4>
                        <ul className="flex flex-col gap-2.5">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-[13px] text-navy/60 hover:text-navy transition-colors duration-150">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-navy/40">Serviços</h4>
                        <ul className="flex flex-col gap-2.5">
                            {services.map((s) => (
                                <li key={s}>
                                    <a href="/servicos" className="text-[13px] text-navy/60 hover:text-navy transition-colors duration-150">
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-navy/40">Comece agora</h4>
                        <p className="text-[13px] leading-relaxed text-navy/50">
                            Pronto para transformar a gestão da sua empresa?
                        </p>
                        <a
                            href="/proposta"
                            className="w-fit px-5 py-2.5 bg-navy hover:bg-navy-mid text-white text-[13px] font-semibold rounded-xl shadow-[0_4px_14px_rgba(15,30,60,0.2)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(15,30,60,0.28)] transition-all duration-200"
                        >
                            Solicitar proposta
                        </a>
                        <a
                            href="/curriculo"
                            className="w-fit px-5 py-2.5 border border-navy/20 hover:border-navy/40 hover:bg-cream-dark text-navy text-[13px] font-medium rounded-xl transition-all duration-200"
                        >
                            Enviar currículo
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-[12px] text-navy/35">
                    <span>© 2026 Empresa de RH e Recrutamento. Todos os direitos reservados.</span>
                    <div className="flex items-center gap-1">
                        <span>Feito com</span>
                        <span className="text-gold">♥</span>
                        <span>no Brasil</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
