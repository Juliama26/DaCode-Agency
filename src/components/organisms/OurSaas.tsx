import React from "react";
import CardSaas from "../molecules/CardSaas";

export default function OurSaas() {
  return (
    <section className="flex flex-col gap-y-6 px-3 md:gap-y-12 my-4 md:py-6">
      <CardSaas></CardSaas>
      <CardSaas></CardSaas>
      <CardSaas></CardSaas>
    </section>
  );
}
