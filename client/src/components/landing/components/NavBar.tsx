import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <a href="#features">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Features
                        </NavigationMenuLink>
                    </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <a href="#pricing">
                        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                            Pricing
                        </NavigationMenuItem>
                    </a>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

