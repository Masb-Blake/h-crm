
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            Simplify Your Side Hustle Management
                        </h1>
                        <p className="text-muted-foreground md:text-xl">
                            A modern CRM tailored for individuals growing their business.
                        </p>
                    </div>
                    <div className="min-[400px]:flex-row">
                        <Button size="lg" className="px-8">
                            Get Started for Free
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
