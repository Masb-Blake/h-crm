import { Pricinginfo } from "@/lib/types/pricing";
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function PricingCard({ info }: { info: Pricinginfo }) {

    return (

        <Card>
            <CardHeader>
                <CardTitle>{info.plan} Plan</CardTitle>
                <CardDescription>{info.use}</CardDescription>
                <div className="mt-4 text-4xl font-bold">${info.cost}</div>
                <p className="text-muted-foreground">{info.duration}</p>
            </CardHeader>
            <CardContent>
                <ul className="grid gap-2">
                    {info.features.map(feature => {
                        return (

                            <li className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary" />
                                <span>{feature}</span>
                            </li>
                        )
                    })}
                </ul>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Choose {info.plan} Plan</Button>
            </CardFooter>
        </Card>
    )

}
