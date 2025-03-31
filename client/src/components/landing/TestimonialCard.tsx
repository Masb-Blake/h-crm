import { Testimonial } from "@/lib/types/testimonials";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (

        <Card>
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div>
                        <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                        <CardDescription>Freelance Designer</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    "This platform has completely transformed how I manage my freelance business. The task management and
                    client organization features are game-changers."
                </p>
            </CardContent>
        </Card>
    )
}
