import { Hero } from "@/components/sections/Hero";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FileTypes } from "@/components/sections/FileTypes";
import { UseCases } from "@/components/sections/UseCases";
import { Benefits } from "@/components/sections/Benefits";
import { Validation } from "@/components/sections/Validation";
import { Comparison } from "@/components/sections/Comparison";
import { Faq } from "@/components/sections/Faq";
import { Waitlist } from "@/components/sections/Waitlist";

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsBar />
      <Features />
      <HowItWorks />
      <FileTypes />
      <UseCases />
      <Benefits />
      <Validation />
      <Comparison />
      <Faq />
      <Waitlist />
    </>
  );
}
