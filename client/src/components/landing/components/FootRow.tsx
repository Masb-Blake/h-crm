import { FooterInfo } from "@/lib/types/footer";
import { Button } from "@/components/ui/button"

export default function FooterRow({ info }: { info: FooterInfo }) {
    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold ml-4">{info.header}</h4>
            <ul className="space-y-2">
                {info.infolinks.map(l => {
                    return (
                        <li>
                            <Button asChild variant="ghost" className="text-muted-foreground">
                                <a href={l.link}>{l.name}</a>
                            </Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
