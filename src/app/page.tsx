"use client"
import Hero from "@/components/nupur/hero";
import About from "@/components/nupur/about";
import Prizes from "@/components/nupur/prizes";
export default function Home() {
  return (
   <>
   <main className="flex flex-col items-center justify-center ">
      <Hero />
      
    </main>
    
  <About />


  <Prizes />

    
  </>
  );
}
