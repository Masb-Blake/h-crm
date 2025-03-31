import FeaturesSection from "@/components/landing/Features";
import HeroSection from "@/components/landing/Hero";
import Testimonials from "@/components/landing/Testimonials";

export default function Landing() {
    return (
        <div className="flex min-w-screen min-h-screen flex-col">
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" >
                <HeroSection />
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" >
                <FeaturesSection />
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" >
                <Testimonials />
            </section>

        </div>
    )
}
