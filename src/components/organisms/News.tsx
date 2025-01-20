import Button from "../atoms/Button";
import CardNews from "../molecules/CardNews";

export default function News() {
  return (
    <section className="bg-accent py-12">
      <section className="container mx-auto px-3 lg:px-12 flex flex-col lg:flex-row gap-y-6 lg:gap-x-12">
        <section className="flex flex-col gap-y-4">
          <h4 className="font-semibold md:text-lg text-secondary">
            News & Articles
          </h4>
          <h2 className="text-3xl md:text-4xl font-semibold">DaCode Blog</h2>
          <p>
            On daCode blog we will review the latest in web development for the
            SaaS-, tech- and crypto industry.
          </p>
          <Button className="text-primary">View All</Button>
        </section>
        <section className="flex flex-col md:flex-row gap-4">
          <CardNews
            title="Why Your SaaS Business should use WordPress"
            description="A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort"
            link=""
          ></CardNews>
          <CardNews
            title="Why Your SaaS Business should use WordPress"
            description="A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort"
            link=""
          ></CardNews>
          <CardNews
            title="Why Your SaaS Business should use WordPress"
            description="A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort"
            link=""
          ></CardNews>
        </section>
      </section>
    </section>
  );
}
