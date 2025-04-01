import { NavigationMenuDemo } from "@/components/landing/components/NavBar";
import FeaturesSection from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import { Button } from "@/components/ui/button";


export default function Landing() {
    return (
        <div className="flex min-w-screen min-h-screen flex-col">
            <NavigationMenuDemo />
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" >
                <HeroSection />
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="features" >
                <FeaturesSection />
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="pricing" >
                <Pricing />
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" >
                <Testimonials />
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" >
                <Footer />
            </section>
        </div>
    )
}
