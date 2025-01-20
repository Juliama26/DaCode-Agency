import Interested from "../components/molecules/Interested";
import Team from "../components/organisms/Team";
import LayoutLanding from "../components/templates/LayoutLanding";

export default function Spesialists() {
  return (
    <LayoutLanding>
      <Interested
        className="mt-[75px] lg:mt-20"
        title="The Team"
        description="Our team members have over 15 years of experience within web development, SEO, content and design. We have an extensive portfolio of working with different companies and projects from various parts of the world."
      ></Interested>
      <Team></Team>
    </LayoutLanding>
  );
}
