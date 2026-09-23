"use client"
import { useRouter } from 'next/navigation'
import {DropdownMenuItem} from './ui/dropdown-menu'
import {signOut} from '@/lib/auth/auth-client'

export default function SignOutButton(){

    const router = useRouter()
    return(
        <DropdownMenuItem className='text-primary font-bold text-md cursor-pointer' onClick={async()=>{
            const result = await signOut()
            if(!result.error){
                router.push("/Sign-In")
            }else{
                alert("Error signing out ")
            }
            
        }}>
            log-out
        </DropdownMenuItem>
    )
}