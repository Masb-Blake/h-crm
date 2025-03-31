
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Testimonial } from "@/lib/types/testimonials"
import TestimonialCard from "./TestimonialCard"

export default function Testimonials() {

    const monials: Testimonial[] = [
        {
            name: 'Sarah Johnson',
            description: 'Freelance Designer',
            testimonial: 'This platform has completely transformed how I manage my freelance business. The task management and client organization features are game-changers.',
            profile: 'https://github.com/shadcn.png'

        }
    ]

    return (
        <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Trusted by entrepreneurs like you
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        See what our customers have to say about our platform.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {monials.map(t => <TestimonialCard testimonial={t} />)}
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-lg">Michael Chen</CardTitle>
                                <CardDescription>E-commerce Entrepreneur</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            "The analytics dashboard gives me insights I never had before. I can now make data-driven decisions
                            for my business with confidence."
                        </p>
                    </CardContent>
                </Card>
                <Card className="md:col-span-2 lg:col-span-1">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <div>
                                <CardTitle className="text-lg">Jessica Martinez</CardTitle>
                                <CardDescription>Social Media Consultant</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            "The automated reminders have saved me countless hours and helped me maintain strong relationships
                            with my clients. I couldn't run my business without it."
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
