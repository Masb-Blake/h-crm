import { Featureinfo } from "@/lib/types/featurecard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function FeatureCard({ feature }: { feature: Featureinfo }) {

    return (
        <Card className="flex flex-col items-center">
            <CardHeader className="w-full">
                <div className="flex h-20 w-20 items-center justify-self-center rounded-full bg-primary/10">
                    <Check className="h-10 w-full text-primary justify-self-center" />
                </div>
                <CardTitle className="mt-4 justify-self-center">{feature.header}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{feature.info}</CardDescription>
            </CardContent>
        </Card>
    )
}
