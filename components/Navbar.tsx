import { Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button";
export default function Navbar(){
    return(
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">
                <Link href="/" className="flex text-xl gap-x-2 items-center font-semibold text-primary">
                    <Briefcase/>
                    job Tracker
                </Link>
                <div className="flex items-center gap-x-4">

                    <Link href="Sign-In">
                        <Button variant="ghost" className="text-gray-700 hover:text-black cursor-pointer">Log-In</Button>
                    </Link>

                    <Link href="Sign-Up">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 cursor-pointer">start for free</Button>
                    </Link>

                </div>
            </div>
        </nav>
    )
}