import Idea from "../molecules/Idea";

import working from "../../assets/working.png";

export default function YourIdea() {
  return (
    <section className="flex lg:justify-end lg:items-end">
      <section className="max-w-screen-sm py-12 px-3 md:px-6 lg:px-12 flex flex-col gap-y-6">
        <h2 className="text-3xl font-semibold">
          Your idea into <span className="text-primary">reality</span>
        </h2>
        <p>
          We start every web development project with a project manager from
          daCode interviewing you about the goal with the project. This is for
          us to be able to come up with a solution for your SaaS business,
          estimate a timeline, and come up with a budget.
        </p>
        <Idea
          no={1}
          title="Your Idea"
          deskripsi="In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company."
        ></Idea>
        <Idea
          no={2}
          title="Strategy meeting"
          deskripsi="This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process from start to finish."
        ></Idea>
        <Idea
          no={3}
          title="Agile and Scrum framework"
          deskripsi="In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget."
        ></Idea>
        <Idea
          no={4}
          title="Your website goes live"
          deskripsi="The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all different devices. We will also perform a few different tests to make sure that the website is optimised for user experience."
        ></Idea>
      </section>
      <figure className="hidden lg:block max-w-lg -mb-12">
        <img src={working} alt="assets" />
      </figure>
    </section>
  );
}
