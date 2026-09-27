import { NextRequest , NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";


export default async function proxy(request : NextRequest){
    const session = await getSession()
   const isSignInPage = request.nextUrl.pathname.startsWith("/Sign-In")
   const isSignUpPage = request.nextUrl.pathname.startsWith("/Sign-Up")
   
    if((isSignInPage || isSignUpPage) && session?.user )
    {
        return NextResponse.redirect(new URL("/Dashboard" , request.url))
    }

    return NextResponse.next()
}