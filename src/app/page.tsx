"use client"
import Hero from "@/components/nupur/hero";
import About from "@/components/nupur/about";
//import Prizes from "@/components/nupur/prizes";
import Gallery from "@/components/anwesha/gallary/gallery";
import Sponsorship from "@/components/anwesha/sponsorship/sponser";
import FAQ from "@/components/anwesha/faq/faq";
import Timeline from "@/components/spandan/timeline/timeline";
import Stats from "@/components/spandan/stats/stats";
import Footer from "@/components/nupur/footer";
import Tooltip from "@/components/nupur/animated_tooltip"
export default function Home() {
  return (
   <>
   
      <Hero />
      <About />
      <Sponsorship/>
      <Timeline />
      <Stats />
      {/*<Prizes />*/}
      <Gallery/>
      <FAQ/>
    <Tooltip/>
      <Footer/>

    
  </>
  );
}
