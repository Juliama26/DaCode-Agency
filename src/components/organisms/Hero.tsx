import Button from "../atoms/Button";
import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="h-screen container mx-auto px-3 lg:px-12 flex flex-row-reverse items-center">
      <figure className="hidden lg:block">
        <img src={hero} alt="assets" />
      </figure>
      <figcaption className="flex flex-col gap-y-3 md:gap-y-12 lg:gap-y-6">
        <p className="w-20 border-b-4 border-primary"></p>
        <h2 className="text-6xl md:text-8xl lg:text-7xl font-extrabold">
          We help you create your <span className="text-primary">website</span>
        </h2>
        <p className="md:text-xl lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis
          adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo
          non. At donec egestas cras in libero pellentesque. Donec amet
          phasellus
        </p>
        <section className="flex gap-x-6">
          <Button className="bg-primary">Get Started</Button>
          <Button>Contact Us</Button>
        </section>
      </figcaption>
    </section>
  );
}
