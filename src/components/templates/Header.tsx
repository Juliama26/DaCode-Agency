import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Menu = ["Services", "Case", "DaCode Spesialists", "Blog"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full bg-background">
      <nav className="container mx-auto py-5 px-3 lg:px-12 flex items-center justify-between gap-x-6">
        <img src="/logo.png" alt="assets" />
        <ul className="hidden lg:flex items-center gap-x-6 text-primary">
          <Link to={"/"}>Home</Link>
          {Menu.map((item) => (
            <Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`} key={item}>
              {item}
            </Link>
          ))}
          <Button className="bg-secondary text-background">
            Request a quote
          </Button>
        </ul>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? (
            <HiOutlineX size={35} onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <HiOutlineMenuAlt3 size={35} />
          )}
        </button>
        {isOpen && (
          <ul className="lg:hidden absolute top-20 w-1/2 flex flex-col justify-center items-center gap-y-6 md:gap-y-12 py-6 rounded-lg bg-primary text-background">
            <Link to={"/"}>Home</Link>
            {Menu.map((item) => (
              <Link
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                key={item}
              >
                {item}
              </Link>
            ))}
            <Button className="bg-secondary text-background">
              Request a quote
            </Button>
          </ul>
        )}
      </nav>
    </header>
  );
}
