import CardTeam from "./CardTeam";

export default function Team() {
  return (
    <section className="md:max-w-screen-lg px-3 md:px-0 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-12 -mt-5 md:-mt-10 mb-5">
      <CardTeam></CardTeam>
      <CardTeam></CardTeam>
      <CardTeam></CardTeam>
      <CardTeam></CardTeam>
      <CardTeam></CardTeam>
      <CardTeam></CardTeam>
    </section>
  );
}
