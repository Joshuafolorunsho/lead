import MissionAndVission from "@/components/section/about-us";
import Community from "@/components/section/community";
import GetInTouch from "@/components/section/get-in-touch";
import MainSection from "@/components/section/main-section";
import Testimonial from "@/components/section/testimonials";

export default function Home() {
  return (
    <div>
      <MainSection />
      <Community />
      <div id="about-us" className="pt-[100px]"></div>
      <MissionAndVission />
      <Testimonial />
      <GetInTouch />
    </div>
  );
}
