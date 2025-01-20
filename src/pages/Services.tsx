import Button from "../components/atoms/Button";
import Interested from "../components/molecules/Interested";
import OurServices from "../components/organisms/OurServices";
import Presense from "../components/organisms/Presense";
import LayoutLanding from "../components/templates/LayoutLanding";

export default function Services() {
  return (
    <LayoutLanding>
      <Interested
        className="mt-[75px] lg:mt-20"
        title="What we can offer your SaaS Business"
        description="We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to our clients. Our team has worked with Nordic, European and American tech unicorns."
      ></Interested>
      <section className="max-w-screen-xl mx-3 lg:mx-auto -mt-6 md:-mt-12 p-1 rounded-2xl bg-accent">
        <OurServices></OurServices>
      </section>
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
