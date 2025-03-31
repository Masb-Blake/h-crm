import { Button } from "@/components/ui/button"
import { FooterInfo } from "@/lib/types/footer"
import FooterRow from "./components/FootRow"
import { Check, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
export default function Footer() {

    const footInfos: FooterInfo[] = [
        {
            header: 'Company',
            infolinks: [{ name: 'About', link: '#' }, { name: 'Careers', link: '#' }, { name: 'Contact', link: '#' }]
        },
        {
            header: 'Legal',
            infolinks: [{ name: 'Privacy Policy', link: '#', }, { name: 'Terms of Service', link: '#' }, { name: 'Cookie Policy', link: '#' }]
        }
    ]

    return (
        <footer className="w-full border-t bg-background py-6 md:py-12">
            <div className="px-4 md:px-6">
                <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                    {footInfos.map((info, i) => <FooterRow info={info} key={i} />)}
                </div>
                <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t pt-6 md:flex-row">
                    <p className="text-center text-sm text-muted-foreground md:text-left">
                        © 2025 Side Hustle CRM. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
                            <a href="#">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </Button>
                        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
                            <a href="#">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                        </Button>
                        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
                            <a href="#">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </Button>
                        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
                            <a href="#">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </footer >
    )
}
