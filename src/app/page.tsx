import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Solutions />
            <Services />
            <Process />
            <Testimonials />
            <CTA />
            <Contact />
            <Footer />
        </main>
    );
}
