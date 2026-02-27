"use client"

export default function Header() {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)

        section?.scrollIntoView({ behavior: "smooth" })

    }

    return (
        <header className="w-full">
            {/* Adicionado aria-label para melhor acessibilidade */}
            <nav aria-label="Navegação Principal" className="h-24 flex justify-around items-center px-4 w-full bg-white border-b border-b-neutral-200">


                <a href="/" className="text-2xl font-semibold">
                    <h1 className="text-navy-mid">Logo</h1>
                </a>

                <ul className="flex gap-8 font-semibold">
                    <li><button onClick={() => scrollToSection("home")} className="hover:text-navy/30 cursor-pointer hover:scale-125 transition-all duration-500">Home</button></li>
                    <li><button onClick={() => scrollToSection("about")} className="hover:text-navy/30 cursor-pointer hover:scale-125 transition-all duration-500">Sobre</button></li>
                    <li><button onClick={() => scrollToSection("services")} className="hover:text-navy/30 cursor-pointer hover:scale-125 transition-all duration-500">Serviços</button></li>
                    <li><button onClick={() => scrollToSection("forCompanies")}  className="hover:text-navy/30 cursor-pointer hover:scale-125 transition-all duration-500">Empresas</button></li>
                </ul>
            </nav>
        </header>
    )
}