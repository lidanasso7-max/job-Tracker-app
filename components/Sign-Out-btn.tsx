"use client"
import {DropdownMenuItem} from './ui/dropdown-menu'
import {signOut} from '@/lib/auth/auth'
export default function signoutButton(){
    return(
        <DropdownMenuItem onClick={async=>}>
            log-out
        </DropdownMenuItem>
    )
}