import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { FirmIntro } from "@/components/FirmIntro";
import { PracticeAreas } from "@/components/PracticeAreas";
import { People } from "@/components/People";
import { Offices } from "@/components/Offices";
import { Recognition } from "@/components/Recognition";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FirmIntro />
        <PracticeAreas />
        <People />
        <Offices />
        <Recognition />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
