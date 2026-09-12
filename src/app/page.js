import Hero from "@/components/home/Hero";
import PopularSearches from "@/components/home/PopularSearches";
import Categories from "@/components/home/Categories";
import Locations from "@/components/home/Locations";
import ITParks from "@/components/home/ITParks";
import JobRoles from "@/components/home/JobRoles";
// import Qualifications from "@/components/home/Qualifications";
import WhyUs from "@/components/home/WhyUs";
import Community from "@/components/home/Community";
import FAQ from "@/components/home/FAQ";
import ResourcesPage from "./resources/page";

export default function Home() {
  return (
    <>
      <Hero />

      <PopularSearches />

      <Categories />

      <Locations />

      <ITParks />

      <JobRoles />

      <ResourcesPage/>

      {/* <Qualifications /> */}

      <WhyUs />

      <Community />

      <FAQ />
    </>
  );
}