"use client"
import Hero from "@/components/nupur/hero";
import About from "@/components/nupur/about";
import Prizes from "@/components/nupur/prizes";
import Gallery from "@/components/anwesha/gallary/gallery";
import Sponsorship from "@/components/anwesha/sponsorship/sponser";
import FAQ from "@/components/anwesha/faq/faq";
import Timeline from "@/components/spandan/timeline/timeline";
import Stats from "@/components/spandan/stats/stats";
import Footer from "@/components/nupur/footer";
import Navbar from "@/components/nupur/navbar/page";
//import Tooltip from "@/components/nupur/animated_tooltip"
export default function Home() {
  return (
   <>
   <div className="overflow-hidden">
      <Navbar/>
      <Hero />
      <About />
      <div className="relative">
      <div className="gradient-03 z-0" />
      <Sponsorship/>
      <div/>
      </div>
      <Timeline />
      <div className="relative">
      <div className="gradient-04 z-0" />
      <Stats />
      <div/>
      </div>
      <div className="relative">
      <Prizes />
      </div>
      
      <Gallery/>
      <FAQ/>
      <Footer/>
      </div>
    
  </>
  );
}
