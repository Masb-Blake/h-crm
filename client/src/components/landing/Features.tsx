import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FeatureCard from "./components/FeatureCard"
import { Featureinfo } from "@/lib/types/featurecard"
export default function FeaturesSection() {

    const infos: Featureinfo[] = [{
        header: 'Task Management',
        info: 'Keep track of all your tasks and deadlines in one place.'
    },
    {
        header: 'Contact Organization',
        info: 'Organize your clients and leads with our powerful CRM tools.'
    },
    {
        header: 'Automated Reminders',
        info: 'Never miss a follow-up with automated reminders and notifications.'
    },
    {
        header: 'Analytics Dashboard',
        info: 'Gain insights into your business performance with detailed analytics.Gain insights into your business performance with detailed analytics.'

    }]

    return (
        <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Everything you need to grow your business
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        Our platform provides all the tools you need to manage your side hustle effectively.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                {infos.map(i => <FeatureCard feature={i} />)}
            </div>
        </div>
    )
}
