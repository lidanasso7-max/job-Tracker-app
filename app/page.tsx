import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="felx-1">
        {/* hero section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-5xl font-bold">
              abetter way to check your job application
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              keep your job application organized in one place
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/Sign-Up">
                <Button size="lg" className="h-12 px-8 text-lg font-medium">
                    start for free <ArrowRight className="ml-2"/>
                </Button>
              </Link>
                
              <p className="text-sm text-muted-foreground">Free forever. no credit card required </p>
            </div>
          </div>
        </section>

        {/* hero image section with tabs */}

        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* tabs */}
              <div className="flex gap-2 justify-center mb-3">
                <Button>organize Application</Button>
                <Button>get hired</Button>
                <Button>manage boards</Button>
              </div>
              {/* images */}
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">

                <Image src="/hero-section/hero1.png"
                        alt="organize Application"
                        width={1200}
                        height={800}/>

                <Image src="/hero-section/hero2.png"
                        alt="organize Application"
                        width={1200}
                        height={800}/>

                <Image src="/hero-section/hero3.png"
                        alt="organize Application"
                        width={1200}
                        height={800}/>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
