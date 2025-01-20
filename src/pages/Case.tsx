import LayoutLanding from "../components/templates/LayoutLanding";
import Interested from "../components/molecules/Interested";
import Presense from "../components/organisms/Presense";
import Button from "../components/atoms/Button";
import OurSaas from "../components/organisms/OurSaas";

export default function Case() {
  return (
    <LayoutLanding>
      <Interested
        className="mt-[75px] lg:mt-20"
        title="Some of our SaaS clients"
        description="We take your SaaS idea and make it into reality. We start with going into why and what your are looking for. Then after brainstorming on branding and strategy we are going into the details of what what and why the you want to create a website. In order to make the creation process as smooth and effective as possible then we are working in an agile/scrum way in order to make sure we can deliver on time and within budget for our clients."
      ></Interested>
      <OurSaas></OurSaas>
      <Interested
        title="Interested to work with us ?"
        description="Send a line here get and update daily"
      >
        <Button className="bg-text text-background">DaCode@gmail.com</Button>
      </Interested>
      <Presense></Presense>
    </LayoutLanding>
  );
}
