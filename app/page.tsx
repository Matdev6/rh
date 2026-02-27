import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ForCompanies from "./components/ForCompanies";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
				<Header />
				<HomeSection />
				<About />
				<Services />
				<ForCompanies />
				<Testimonials />
				<Contact />
				<Footer />
			</main>
		</div>
	);
}
