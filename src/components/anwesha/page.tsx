"use client"
import Hero from "@/components/nupur/hero";
import Gallery from "@/components/anwesha/gallary/gallery";
import Sponsorship from "@/components/anwesha/sponsorship/sponser";
import FAQ from "@/components/anwesha/faq/faq";
export default function Home() {
  return (
   <>
   <main className="flex flex-col items-center justify-center ">
      <Hero />
      <Sponsorship/>
      <Gallery/>
      <FAQ/>
    </main>
  </>
  );
}