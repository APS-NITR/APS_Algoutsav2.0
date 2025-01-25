"use client"
import Hero from "@/components/nupur/hero/hero";
import Gallery from "@/components/Anwesha/gallary";
import Sponsorship from "@/components/Anwesha/sponsorship";
import FAQ from "@/components/Anwesha/faq";
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
