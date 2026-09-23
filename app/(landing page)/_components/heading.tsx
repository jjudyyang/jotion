"use client";
import { Button } from "@/components/ui/button";

const Heading = () => {
    return ( <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            your ideas, docs, plans unified. welcome to <span className="underline"> JOTION</span>
        </h1>
        <h3>Jotion is connected workspace where better, sexier work happens</h3>
        <Button>Enter Jotion</Button>
    </div> );
}
 
export default Heading;
