import Headerak from "../../components/headerak";
import Footer from "../../components/footer";
import Point from "../../components/point";

export default function UmeleckePotrebyAKnihy() {
  return (
    <main className="w-full font-athiti bg-black min-h-screen text-white text-xl">
      <Headerak />
      <Point
        name={"Umělecké potřeby a knihy"}
        describtion="Umění vždy bylo a bude důležité. Může se zdát, že ne, ale díky němu bylo vyhráno i spousta bitev. Vždyť husité zahnali svým mocným zpěvem křižáky na ústup, Izraelský národ zničil brány Jericha."
        coords="49.6781489N, 16.3359019E"
        question="Jak sníh zářivý, však po chvíli jakoby bahnem prošel. Kdo jsem?"
        answare="toaleťák"
        odpoved="#adsa5!as!"
      />
      <Footer />
    </main>
  );
}
