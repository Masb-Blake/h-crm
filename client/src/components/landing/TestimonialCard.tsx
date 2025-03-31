import { Testimonial } from "@/lib/types/testimonials";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={testimonial.profile} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.description}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{testimonial.testimonial}</p>
            </CardContent>
        </Card>
    )
}
