"use client";


import { useScrollTop } from "@/hooks/use-scroll-top";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import Link from "next/link";

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
                <Button asChild>
                    <Link href="/documents">Enter Jotion</Link>
                </Button>
            </div>
        </div>
    );
}
 
export default Navbar;
