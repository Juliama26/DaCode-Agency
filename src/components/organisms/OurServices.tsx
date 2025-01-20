import OurCard from "../molecules/CardService";
import engine from "../../assets/engine.png";
import cross from "../../assets/cross.png";
import optimization from "../../assets/optimization.png";
import plugin from "../../assets/plugin.png";
import redesign from "../../assets/redesign.png";
import site from "../../assets/web-site.png";

export default function OurServices() {
  return (
    <section className="bg-accent">
      <section className="max-w-4xl container mx-auto py-12 px-3 lg:px-12 flex flex-col items-center gap-y-4">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <OurCard
            image={site}
            title="WordPress Site"
            description="Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut"
            link=""
          ></OurCard>
          <OurCard
            image={plugin}
            title="WordPress Plugin"
            description="Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut"
            link=""
          ></OurCard>
          <OurCard
            image={redesign}
            title="WordPress Redesign"
            description="Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut"
            link=""
          ></OurCard>
          <OurCard
            image={optimization}
            title="WordPress Site Optimization"
            description="Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut"
            link=""
          ></OurCard>
          <OurCard
            image={engine}
            title="WordPress Engine Optimization"
            description="Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut"
            link=""
          ></OurCard>
          <OurCard
            image={cross}
            title="WordPress Cross Platform Mobile"
            description="Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut"
            link=""
          ></OurCard>
        </section>
      </section>
    </section>
  );
}
