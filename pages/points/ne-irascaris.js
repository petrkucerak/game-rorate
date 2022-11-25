import Headerak from "../../components/headerak";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function NeIrascaris() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Headerak />
      <Point
        name={"Ne irascáris"}
        describtion="Pro záchranu vesnice se občas nějaké to pravidlo porušit musí. Možná ho budete muset porušit i vy. Vyberte mezi sebou jediného, koho pošlete na toto místo."
        coords="50.0212736N, 15.7704558E"
        question="Jaké jídlo se po mši jídává? (2 slova)"
        answare="teplá snídaně"
        odpoved="#54k3425ON^"
      />
      <Footer />
    </main>
  );
}
