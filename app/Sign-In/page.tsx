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
export default function SignIn(){
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
            <form action="">
                <CardContent className="flex flex-col gap-y-3">
                    <div className="flex flex-col gap-y-3">
                        <Label htmlFor="email" className="text-xl text-gray-700">
                            email
                        </Label>
                        <Input id="email" type="email" placeholder="lidansso7@gmail.com" className="border-gray-300 focus:border-primary focus:ring-primary" required/>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <Label htmlFor="password" className="text-xl text-gray-700">
                            password
                        </Label>
                        <Input id="password" type="password" className="border-gray-300 focus:border-primary focus:ring-primary" required/>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button  className="w-full bg-primary hover:bg-primary/90">
                        sign-in
                    </Button>
                    <p className="text-center cursor-pointer text-sm text-gray-600">dont't have and Account ? <Link  className="font-medium text-primary hover:underline" href="/Sign-Up">sign-up</Link></p>
                </CardFooter>
            </form>
        </Card>
       </div>
    )
}