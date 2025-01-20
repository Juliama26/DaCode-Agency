import image from "../../assets/great2.png";
import { FaLinkedin } from "react-icons/fa";
import Button from "../atoms/Button";

export default function CardTeam() {
  return (
    <section className="flex flex-col items-center gap-y-1 w-full md:w-72 px-4 py-8 shadow-xl rounded-xl bg-background">
      <figure className="w-20 h-20">
        <img
          src={image}
          alt="assets"
          className="w-full h-full object-cover rounded-full"
        />
      </figure>
      <h3 className="text-xl font-semibold">Kevin Jeppesen</h3>
      <p className="text-primary">Web Developer</p>
      <FaLinkedin size={25} />
      <Button className="bg-primary">kevin@dacode.se</Button>
    </section>
  );
}
