"use client"

import { Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { getsession } from "@/lib/auth/auth";
import {DropdownMenu , DropdownMenuTrigger , DropdownMenuItem , DropdownMenuLabel , DropdownMenuContent, DropdownMenuGroup} from '@/components/ui/dropdown-menu'
import { Avatar , AvatarFallback } from "@/components/ui/avatar";
import {signoutButton} from '@/components/Sign-Out-btn'
import { useSession } from "@/lib/auth/auth-client";


export default  function Navbar(){
    const {data:session}=useSession()
    return(
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-center px-4 justify-between">
                <Link href="/" className="flex text-xl gap-x-2 items-center font-semibold text-primary">
                    <Briefcase/>
                    job Tracker
                </Link>
                <div className="flex items-center gap-x-4">

                    {session?.user?<>
                    <Link href="/Dashboard">
                        <Button
                            variant="ghost"
                            className="text-gray-700 hover:text-black"
                        >
                            Dashboard
                        </Button>
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="ghost">
                                <Avatar>
                                    <AvatarFallback className='bg-primary text-white font-bold'>
                                        {session.user.name[0].toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>
                                    <div>
                                        <p>{session.user.name}</p>
                                        <p>{session.user.email}</p>
                                    </div>
                                </DropdownMenuLabel>
                                <signoutButton/>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </>
                    :
                    <>
                    <Link href="Sign-In">
                        <Button variant="ghost" className="text-gray-700 hover:text-black cursor-pointer">Log-In</Button>
                    </Link>

                    <Link href="Sign-Up">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 cursor-pointer">start for free</Button>
                    </Link>
                    </>}

                </div>
            </div>
        </nav>
    )
}