import { NavigationMenuDemo } from "@/components/landing/components/NavBar";
import FeaturesSection from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"


export default function Landing() {
    return (
        <div className="flex min-w-screen min-h-screen flex-col">
            <div className="fixed">
                <div className="flex justify-center items-center p-4 min-w-screen fixed">
                    <div className="absolute left-0 h-10 w-10 ml-12">
                        <a href="/">
                            <img src="/logo.png" className="cursor-pointer" />
                        </a>
                    </div>
                    <NavigationMenuDemo />
                    <div className="grid grid-cols-2 absolute right-0 p-3 gap-2">
                        <Button variant={"ghost"}>Login</Button>
                        <Button>Sign Up</Button>
                    </div>
                </div>
                <Separator />
            </div>
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
