"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ImageTabs(){
      const [ActiveTab , setActiveTab] = useState("organize")

    return(
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* tabs */}
              <div className="flex gap-2 justify-center mb-3">
                <Button onClick={()=>setActiveTab("organize")} className={`rounded-lg ${ActiveTab==="organize"? "bg-primary text-white": "bg-gray-700 text-white"} cursor-pointer`}>organize Application</Button>
                <Button onClick={()=>setActiveTab("hired")} className={`rounded-lg ${ActiveTab==="hired"? "bg-primary text-white": "bg-gray-700 text-white"} cursor-pointer`}>get hired</Button>
                <Button onClick={()=>setActiveTab("boards")} className={`rounded-lg ${ActiveTab==="boards"? "bg-primary text-white": "bg-gray-700 text-white"} cursor-pointer`}>manage boards</Button>
              </div>
              {/* images */}
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">

                {ActiveTab==="organize"&&<Image src="/hero-section/hero1.png"
                        alt="organize Application"
                        width={1200}
                        height={800}/>}

                {ActiveTab==="hired"&&<Image src="/hero-section/hero2.png"
                        alt="organize Application"
                        width={1200}
                        height={800}/>}

                {ActiveTab==="boards"&&<Image src="/hero-section/hero3.png"
                        alt="organize Application"
                        width={1200}
                        height={800}/>}

              </div>
            </div>
          </div>
        </section>
    )
}