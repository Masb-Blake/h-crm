import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Separator } from "@/components/ui/separator";
import { MenuIcon } from "lucide-react";

export function NavigationMenuDemo() {

    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)
    const [isOpen, setIsOpen] = useState(false)


    window.addEventListener("resize", (event: UIEvent) => {
        const e = event.target as Window
        setWidth(e.innerWidth)
        setHeight(e.innerHeight)
    })

    const isMobile = width < 1024 || height < 768;

    return isMobile ? (<div>

        <div className="absolute left-0 ml-4 mt-2 pb-4">
            <a href="/">
                <img src="/logo.png" className="cursor-pointer w-10 h-10" />
            </a>
        </div>
        <div className="absolute right-0">
            {/*@TODO: Fix the stupid ass reset glitch*/}
            <Drawer open={isOpen} onOpenChange={() => setIsOpen(!isOpen)} preventScrollRestoration>
                <DrawerTrigger asChild className="m-2">
                    <Button variant="outline" onClick={() => setIsOpen(!isOpen)} size={"icon"}>
                        <MenuIcon />
                    </Button>
                </DrawerTrigger>
                <DialogTitle />
                <DrawerContent>
                    <div className="flex flex-col items-center justify-center w-full p-4">
                        <Button variant="ghost" className="w-full m-2" asChild>
                            <a href="#features">
                                Features
                            </a>
                        </Button>
                        <Separator />
                        <Button variant="ghost" className="w-full m-2" asChild onClick={() => setIsOpen(!isOpen)}>
                            <a href="#pricing">
                                Pricing
                            </a>
                        </Button>
                    </div>
                    <DrawerFooter>
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline">Login</Button>
                            <Button>Sign Up</Button>
                        </div>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    </div >) : (
        <div className="fixed">
            <div className="flex justify-center items-center p-4 min-w-screen fixed bg-backgroundk">
                <div className="absolute left-0 h-10 w-10 ml-4">
                    <a href="/">
                        <img src="/logo.png" className="cursor-pointer" />
                    </a>
                </div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                <a href="#features">
                                    Features
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuItem className={navigationMenuTriggerStyle()} asChild>
                                <a href="#pricing">
                                    Pricing
                                </a>
                            </NavigationMenuItem>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="grid grid-cols-2 absolute right-0 p-3 gap-2">
                    <Button variant={"ghost"}>Login</Button>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </div >
    )
}

