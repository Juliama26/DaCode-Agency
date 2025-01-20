import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutLanding({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col justify-between">
      <Header></Header>
      {children}
      <Footer></Footer>
    </section>
  );
}
