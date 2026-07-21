import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Validation } from "@/components/sections/Validation";
import { Faq } from "@/components/sections/Faq";
import { Waitlist } from "@/components/sections/Waitlist";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Validation />
      <Faq />
      <Waitlist />
    </>
  );
}
