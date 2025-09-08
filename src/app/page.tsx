import AboutUs from "@/components/section/about-us";
import Community from "@/components/section/community";
import GetInTouch from "@/components/section/get-in-touch";
import MainSection from "@/components/section/main-section";

export default function Home() {
  return (
    <div>
      <MainSection />
      <Community />
      <AboutUs />
      <GetInTouch />
    </div>
  );
}
