"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const Navbar = () => {
    const scrolled = useScrollTop();
    return (
        <div
            className={cn(
                "z-50 bg-background fixed top-0 left-0 flex h-[var(--navbar-height)] items-center w-full px-6",
                scrolled && "border-b shadow-sm"
            )}
        >
            <Logo />
            <div className="ml-auto flex items-center gap-x-2">
                <Button type="button" variant="ghost" size="sm">
                    Log in
                </Button>
            </div>
        </div>
    );
}
 
export default Navbar;
