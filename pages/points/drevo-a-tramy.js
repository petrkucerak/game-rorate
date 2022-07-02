import Headerak from "../../components/headerak";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function DreavoATramy() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Headerak />
      <Point
        name={"Dřevo a trámy"}
        describtion="Muž hloupý stavěl dům svůj na písku, pak přišel velký mrak. Déšť padal a voda stoupala... Muž moudrý stavěl dům svůj na skále a dům tam pevně stál... Vy ale nemáte skálu, tak si musíte pomoci konstrukcí a to pevnou!"
        coords="49.6799483N, 16.3374692E"
        question="Vidíš skrz nás avšak naše okolí neprohlídneš a každý šmírák nás má rád. Kolik nás je?"
        answare="4"
        odpoved="#54k3425ON^"
      />
      <Footer />
    </main>
  );
}
