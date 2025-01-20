import Button from "../components/atoms/Button";
import Interested from "../components/molecules/Interested";
import Hero from "../components/organisms/Hero";
import News from "../components/organisms/News";
import OurClient from "../components/organisms/OurClient";
import OurGreat from "../components/organisms/OurGreat";
import OurServices from "../components/organisms/OurServices";
import YourIdea from "../components/organisms/YourIdea";
import LayoutLanding from "../components/templates/LayoutLanding";

export default function Home() {
  return (
    <LayoutLanding>
      <Hero></Hero>
      <OurServices></OurServices>
      <OurGreat></OurGreat>
      <YourIdea></YourIdea>
      <Interested
        title="Interested to work with us ?"
        description="Send a line here get and update daily"
      >
        <Button className="bg-text text-background">DaCode@gmail.com</Button>
      </Interested>
      <OurClient></OurClient>
      <News></News>
    </LayoutLanding>
  );
}
