import { FaSearch } from "react-icons/fa";

import Input from "../atoms/Input";

export default function BtnInput() {
  return (
    <section className="relative">
      <Input></Input>
      <button className="absolute top-2 right-4 bg-background text-primary">
        <FaSearch size={23} />
      </button>
    </section>
  );
}
