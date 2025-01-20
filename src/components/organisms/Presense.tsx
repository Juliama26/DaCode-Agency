import session from "../../assets/session.png";

export default function Presense() {
  return (
    <section className="container mx-auto py-10 px-3 lg:px-12 flex flex-col md:flex-row gap-y-4 gap-x-12">
      <section className="space-y-6">
        <h3 className="text-3xl md:text-4xl font-semibold">
          Establishing online presence
        </h3>
        <p className="space-y-3">
          Every SaaS website, regardless of niche, must do one thing
          brilliantly, which is converting visitors into users. At first glance,
          the site should encourage and guide visitors in a smooth way towards
          call-to-actions. <br /> This goes hand in hand with a responsive
          design, meaning it needs to be apt for different devices. <br /> We
          use a data-driven approach to measure user response when developing
          the site. This method usually makes the site quicker to launch, is
          more cost-effective and more successful in the long run. <br /> The
          pages need to be search engine optimized (SEO) because it lays the
          foundation for the technical quality, which in turn determines how
          high it will rank among search results. We also make sure that your
          website is indexed properly. <br /> We audit your audience and get to
          know your target market to be able to speak to them through the
          website in the best possible way. By finding out their consumer
          behavior we can refine the website approach.
        </p>
      </section>
      <figure>
        <img src={session} alt="assets" />
      </figure>
    </section>
  );
}
