
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Pricinginfo } from "@/lib/types/pricing"
import PricingCard from "./components/PricingCard"
export default function Pricing() {

    const prices: Pricinginfo[] = [
        {
            plan: 'Free',
            use: 'Perfect for getting started',
            cost: 0,
            duration: 'Lifetime Free',
            features: ['Basic Task Management', 'Up to 50 Contacts', 'Email Reminders', 'Basic Analytics']
        },
        {
            plan: 'Basic',
            use: 'Perfect for the weekend warrior',
            cost: 15.99,
            duration: 'Per Month',
            features: ['Basic Task Management', 'Up to 150 Contacts', 'SMS & Email Reminders', 'Basic Analytics & Reporting', 'Calendar integrations']
        },

        {
            plan: 'Premium',
            use: 'Perfect for growing businesses',
            cost: 29.99,
            duration: 'Per Month',
            features: ['Advanced Task Management', 'Unlimited Contacts', 'SMS & Email Reminders', 'Advanced Analytics & Reporting', 'Calendar integrations',
                'Schedule Automation', 'Plugins?']
        }
    ]

    return (
        <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        Choose the plan that's right for your business.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                {prices.map((price, i) => <PricingCard info={price} key={i} />)}
            </div>
        </div>
    )
}
