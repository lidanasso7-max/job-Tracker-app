"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { signUp } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

// //////////////////////////////////////////////////////////

export default function SignUp(){

    const [name , setname] = useState("")
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    const [error , seterror] = useState("")
    const [loading , setloading] = useState(false)
    const router = useRouter()

    // handle the submition of the form 
    async function handlesubmit(e : React.SubmitEvent){

        e.preventDefault()
        setloading(true)
         try{
            const result =await signUp.email({
                name,
                email,
                password
            })
            if(result.error){
                seterror(result.error.message??"failed to sign-up")
            }else{
                router.push("/Dashboard")
            }
         }catch{
            seterror("an Unexpected error ocured")
         }finally{
            setloading(false)
         }
    }

    return(
       <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
        <Card className="w-full max-w-md border-gray-200 shadow-lg">
            <CardHeader className="flex flex-col gap-y-2">
                <CardTitle>
                    Sign up
                </CardTitle>
                <CardDescription>
                    create and acount to start tracking your job application
                </CardDescription>
            </CardHeader>
            <form onSubmit={handlesubmit}>
                <CardContent className="flex flex-col gap-y-3">
                   {error && (
                    <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                        {error}
                    </div>
                    )}
                    <div className="flex flex-col gap-y-3">
                        <Label htmlFor="name" className="text-xl text-gray-700">
                            Name
                        </Label>
                        <Input value={name} onChange={(e)=>setname(e.target.value)} id="name" type="text" placeholder="john dow" className="border-gray-300 focus:border-primary focus:ring-primary" required/>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <Label htmlFor="email" className="text-xl text-gray-700">
                            email
                        </Label>
                        <Input value={email} onChange={(e)=>setemail(e.target.value)} id="email" type="email" placeholder="lidansso7@gmail.com" className="border-gray-300 focus:border-primary focus:ring-primary" required/>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <Label htmlFor="password" className="text-xl text-gray-700">
                            password
                        </Label>
                        <Input value={password} onChange={(e)=>setpassword(e.target.value)} id="password" type="password" className="border-gray-300 focus:border-primary focus:ring-primary" required/>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 cursor-pointer">
                        
                        {loading?'creating an account':'sign up'}
                    </Button>
                    <p className="text-center text-sm text-gray-600">already have an Acount ? <Link  className="font-medium text-primary hover:underline" href="/Sign-In">sign-in</Link></p>
                </CardFooter>
            </form>
        </Card>
       </div>
    )
}