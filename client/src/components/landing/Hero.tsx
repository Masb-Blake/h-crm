
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            Simplify Your Side Hustle Management
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            A modern CRM tailored for individuals growing their business.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button size="lg" className="px-8">
                            Get Started for Free
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
